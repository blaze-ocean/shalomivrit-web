# Cloudflare Pages Deployment Guide

## Environment Variables Setup

After deploying to Cloudflare Pages, you need to configure the following environment variables:

### Required Environment Variables

1. Go to your Cloudflare Pages dashboard
2. Select your project (`shalomivrit-web`)
3. Go to **Settings** → **Environment variables**
4. Add the following variables for **Production** and **Preview** environments:

| Variable Name | Value |
|--------------|-------|
| `ROBOKASSA_MERCHANT_LOGIN` | `shalomivrit` |
| `ROBOKASSA_PASSWORD1` | `c7cEq6jctRL3jhcH1og7` |

### Steps to Add Environment Variables:

1. Click **"Add variable"**
2. Enter the variable name (e.g., `ROBOKASSA_MERCHANT_LOGIN`)
3. Enter the value
4. Select which environments to apply to (Production and/or Preview)
5. Click **"Save"**
6. Repeat for each variable

### After Adding Variables

After adding the environment variables, you need to trigger a new deployment:

1. Go to **Deployments** tab
2. Click **"Retry deployment"** on the latest deployment, or
3. Push a new commit to trigger a fresh build

## Build Configuration

The project is configured with:
- **Build command**: `npm run build`
- **Build output directory**: `.svelte-kit/cloudflare`
- **Node.js compatibility**: Enabled via `wrangler.toml`

## Troubleshooting

### Build fails with "Could not resolve 'crypto'"
- Make sure `wrangler.toml` exists with `nodejs_compat` flag
- Verify `svelte.config.js` references the wrangler config

### Environment variables not found
- Ensure variables are set in Cloudflare Pages dashboard
- Check that variable names match exactly (case-sensitive)
- Redeploy after adding variables

### Payment API returns config_error
- Environment variables are missing or incorrect
- Check Cloudflare Pages logs for error messages
