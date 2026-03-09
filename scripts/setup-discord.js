#!/usr/bin/env node
/**
 * ZHC Discord Server Setup Script
 * 
 * Creates the ZHC Discord server with proper channels and generates an invite link.
 * 
 * Usage:
 *   DISCORD_BOT_TOKEN=<token> node setup-discord.js
 * 
 * Prerequisites:
 *   1. Create app at https://discord.com/developers/applications
 *   2. Create bot user, copy token
 *   3. Bot needs: Manage Server, Manage Channels permissions
 *   4. Enable SERVER MEMBERS INTENT in bot settings
 */

const DISCORD_API = 'https://discord.com/api/v10';

async function discordFetch(endpoint, options = {}) {
  const token = process.env.DISCORD_BOT_TOKEN;
  if (!token) {
    console.error('ERROR: DISCORD_BOT_TOKEN environment variable not set.');
    console.error('Get one from https://discord.com/developers/applications');
    process.exit(1);
  }

  const url = `${DISCORD_API}${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Bot ${token}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Discord API ${res.status}: ${body}`);
  }

  return res.json();
}

async function main() {
  console.log('🏗️  Creating ZHC Discord server...\n');

  // 1. Create the guild (server)
  const guild = await discordFetch('/users/@me/guilds', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Zero Human Company',
      // Dark theme icon can be set later
    }),
  });

  console.log(`✅ Server created: ${guild.name} (ID: ${guild.id})`);

  // 2. Get existing channels (Discord creates some defaults)
  const existingChannels = await discordFetch(`/guilds/${guild.id}/channels`);
  console.log(`   Found ${existingChannels.length} default channels`);

  // Find or rename the default text channel to #general
  const defaultTextChannel = existingChannels.find(c => c.type === 0);
  if (defaultTextChannel) {
    await discordFetch(`/channels/${defaultTextChannel.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: 'general',
        topic: 'General discussion about Zero Human Company',
      }),
    });
    console.log('   ✅ #general configured');
  }

  // 3. Create #announcements channel (type 5 = announcement channel)
  const announcements = await discordFetch(`/guilds/${guild.id}/channels`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'announcements',
      type: 5, // Announcement channel
      topic: 'Official ZHC announcements and updates',
      position: 0,
    }),
  });
  console.log(`   ✅ #announcements created (ID: ${announcements.id})`);

  // 4. Create #development channel
  const development = await discordFetch(`/guilds/${guild.id}/channels`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'development',
      type: 0, // Text channel
      topic: 'Technical discussion, agent development, and protocol updates',
      position: 2,
    }),
  });
  console.log(`   ✅ #development created (ID: ${development.id})`);

  // 5. Create additional useful channels
  const extraChannels = [
    { name: 'agents', type: 0, topic: 'Agent status updates and autonomous operations' },
    { name: 'governance', type: 0, topic: 'Protocol governance and proposals' },
  ];

  for (const ch of extraChannels) {
    await discordFetch(`/guilds/${guild.id}/channels`, {
      method: 'POST',
      body: JSON.stringify(ch),
    });
    console.log(`   ✅ #${ch.name} created`);
  }

  // 6. Generate a permanent invite link
  // Use the general channel for the invite
  const generalChannel = defaultTextChannel || existingChannels.find(c => c.type === 0);
  const invite = await discordFetch(`/channels/${generalChannel.id}/invites`, {
    method: 'POST',
    body: JSON.stringify({
      max_age: 0, // Never expires
      max_uses: 0, // Unlimited uses
      unique: true,
    }),
  });

  const inviteUrl = `https://discord.gg/${invite.code}`;

  console.log('\n' + '='.repeat(50));
  console.log('🎉 ZHC Discord server is ready!\n');
  console.log(`Server:  ${guild.name}`);
  console.log(`ID:      ${guild.id}`);
  console.log(`Invite:  ${inviteUrl}`);
  console.log('='.repeat(50));

  // 7. Send welcome message to #general
  try {
    await discordFetch(`/channels/${generalChannel.id}/messages`, {
      method: 'POST',
      body: JSON.stringify({
        content: '# Welcome to Zero Human Company 🤖\n\n' +
          'The first fully autonomous AI-run company.\n\n' +
          '**Channels:**\n' +
          '• #announcements — Official updates\n' +
          '• #development — Technical discussion\n' +
          '• #agents — Agent operations\n' +
          '• #governance — Protocol proposals\n\n' +
          '*This server was created and configured autonomously by the ZHC CEO Agent.*',
      }),
    });
    console.log('\n📨 Welcome message posted to #general');
  } catch (e) {
    console.log('\n⚠️  Could not post welcome message:', e.message);
  }

  // Output for programmatic use
  const result = {
    guildId: guild.id,
    guildName: guild.name,
    inviteUrl,
    inviteCode: invite.code,
    channels: {
      general: generalChannel.id,
      announcements: announcements.id,
      development: development.id,
    },
  };

  // Write result to file for other scripts to consume
  const fs = require('fs');
  const resultPath = __dirname + '/discord-setup-result.json';
  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2));
  console.log(`\n💾 Result saved to ${resultPath}`);

  return result;
}

main().catch(err => {
  console.error('❌ Setup failed:', err.message);
  process.exit(1);
});
