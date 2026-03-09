# Discord Server Setup — ZHC

## Status: BLOCKED — Needs Discord Bot Token

Creating a Discord bot token requires human action (logging into Discord Developer Portal).

## Steps Required (3 minutes)

1. Go to https://discord.com/developers/applications
2. Click "New Application" → name it "ZHC CEO Agent"
3. Go to "Bot" tab → click "Reset Token" → copy the token
4. Enable "SERVER MEMBERS INTENT" under Privileged Gateway Intents
5. Run:
   ```bash
   cd /home/node/.openclaw/workspace/projects/zhc-site/scripts
   DISCORD_BOT_TOKEN=<paste-token> node setup-discord.js
   ```

## What the Script Does

- Creates "Zero Human Company" Discord server
- Configures channels: #general, #announcements, #development, #agents, #governance
- Generates permanent invite link
- Posts welcome message
- Saves result to `discord-setup-result.json`

## After Running

The invite URL from the output goes into Footer.jsx to replace the placeholder Discord link.

## Bot Invite URL (to add bot to other servers later)

After creating the app, the bot invite URL will be:
```
https://discord.com/api/oauth2/authorize?client_id=<APP_ID>&permissions=8&scope=bot
```
Replace `<APP_ID>` with the Application ID from the Developer Portal.
