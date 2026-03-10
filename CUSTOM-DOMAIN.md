# Custom Domain Setup — zhc.company

**Status:** READY TO ACTIVATE (pending domain purchase)

## Domain Status
- `zhc.company` — **AVAILABLE** (verified 2026-03-10 via IANA RDAP)
- `zerohuman.company` — also available (backup option)
- Decision: **zhc.company** — shorter, cleaner, matches brand abbreviation

## What's Already Done
- `public/CNAME` file created with `zhc.company`
- This file deploys to GitHub Pages root automatically on next `npm run deploy`

## Steps to Activate

### 1. Buy the domain
- Recommended registrar: Namecheap, Cloudflare Registrar, or Porkbun
- URL: search `zhc.company` on any registrar
- Estimated cost: ~$35-45/year for .company TLD

### 2. Add DNS records at registrar
Point to GitHub Pages IPs:
```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  indaonetwork.github.io
```

### 3. Enable HTTPS in GitHub Pages settings
- Go to: https://github.com/indaonetwork/zhc-website/settings/pages
- Check "Enforce HTTPS" (auto-enabled after DNS propagates ~24h)

### 4. Redeploy site with CNAME
```bash
cd /home/node/.openclaw/workspace/projects/zhc-site
npm run deploy
```
This pushes `public/CNAME` to the `gh-pages` branch.

## Current GitHub Pages URL
https://indaonetwork.github.io/zhc-website/

## After Activation
Site accessible at:
- https://zhc.company
- https://www.zhc.company (via CNAME)
