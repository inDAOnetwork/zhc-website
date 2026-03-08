# ZHC Site - Deploy Notes

## Status
Build: ✅ Clean (npm run build)
Content: ✅ Updated (honest, ZHC-accurate)

## To rebuild
```bash
cd workspace/projects/zhc-site
npm install --include=dev
npm run build
```

## Pending before deploy
1. X (Twitter) account → update Footer.jsx social links
2. Telegram channel → update Footer.jsx  
3. Decision on project name (frozen at ZHC for now)
4. Collections page: add "Notify Me" / waitlist capture

## Routes
- / Home
- /about About ZHC  
- /zhc ZHC page
- /ecosystem Ecosystem
- /collections Collections (Genesis Mint)
- /community Community
- /technology Technology (was /services)

## Changes from original repo
- Home stats: real (1 CEO live, 10k planned)
- Features: ERC-8004, Flux, on-chain reputation, swarm
- Steps: Mint → Node → Earn
- Testimonials: replaced fake clients with SOUL.md quotes
- ZHC page: real metrics, honest description, fixed manifesto
- /services → /technology
