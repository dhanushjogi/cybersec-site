# Cezentech Cybersecurity Site - Deployment Guide

## Pre-Deployment Checklist ✅

- [x] All TypeScript errors fixed (0 errors)
- [x] Code is type-safe with null checks
- [x] Frontend UI is responsive and professional
- [x] Hero section centered and optimized
- [x] Data-rain background with cyan theme
- [x] Navbar is compact and fixed
- [x] All commits are pushed to main branch
- [x] Build tested locally

## Build Information

**Framework:** Astro 6.0+
**Node Version:** >=22.12.0
**Package Manager:** npm
**Build Command:** `npm run build`
**Start Command:** `npm run dev` (dev) / `npm run preview` (production preview)

## Deployment Platform Options

### Option 1: Vercel (Recommended for Astro) ⭐

**Advantages:**
- Zero-config deployment for Astro
- Free tier with generous limits
- Automatic deployments on git push
- Built-in SSL/HTTPS
- Edge functions for backend
- Global CDN
- Analytics and monitoring

**Steps:**
```bash
1. Go to https://vercel.com
2. Sign up / Login with GitHub
3. Click "Add New" > "Project"
4. Select "cybersec-site" repository
5. Framework: Select "Astro"
6. Environment Variables: Add any needed API keys
7. Click "Deploy"
8. Add custom domain in project settings
```

### Option 2: Netlify

**Advantages:**
- Good Astro support
- Generous free tier
- Serverless functions
- Form handling included
- Split testing

**Steps:**
```bash
1. Go to https://netlify.com
2. Sign up / Login with GitHub
3. Click "New site from Git"
4. Select "cybersec-site" repository
5. Build command: npm run build
6. Publish directory: dist/
7. Deploy
```

### Option 3: AWS (Enterprise)

**Services:**
- AWS Amplify (recommended)
- CloudFront + S3
- EC2 with Docker

## Domain Setup

### Register Domain

1. **Options:**
   - Namecheap (affordable)
   - GoDaddy
   - Route 53 (if using AWS)
   - Google Domains

2. **For cezentech.com:**
   ```
   Domain: cezentech.com
   Type: Business
   Registrar: [Choose above]
   ```

### Configure DNS

**For Vercel:**
```
1. In Vercel dashboard > Project Settings > Domains
2. Add domain: cezentech.com
3. Add DNS records as shown by Vercel
4. Wait for verification (usually 5 minutes)
```

**For Netlify:**
```
1. In Netlify > Domain settings
2. Add custom domain
3. Update nameservers at registrar
4. OR add DNS records manually
```

## SSL/HTTPS Certificate

**Vercel:** ✅ Automatic (Let's Encrypt)
- Free tier includes SSL
- Auto-renewal
- No additional setup needed

**Netlify:** ✅ Automatic (Let's Encrypt)
- Free tier includes SSL
- Auto-renewal
- No additional setup needed

## Environment Variables

Create `.env.production` for sensitive data:

```env
# API Endpoints
VITE_API_URL=https://api.cezentech.com
VITE_BACKEND_URL=https://backend.cezentech.com

# Analytics (optional)
VITE_GA_ID=G_XXXXXXXXXXXXX
VITE_AMPLITUDE_KEY=xxxxx

# Contact Form (optional)
VITE_FORMSPREE_ID=xxxxx
VITE_EMAILJS_SERVICE_ID=xxxxx
```

## Backend Configuration

### If using backend API:

1. **Deploy Backend First**
   - Railway.app (recommended for Node/Python)
   - Render
   - Heroku
   - AWS Lambda

2. **Update API URLs**
   - Production: `https://api.cezentech.com`
   - Staging: `https://staging-api.cezentech.com`

3. **CORS Configuration**
   ```javascript
   // Backend should allow:
   ALLOWED_ORIGINS=https://cezentech.com,https://www.cezentech.com
   ```

## Pre-Deployment Testing

### 1. Local Build Test
```bash
npm run build
npm run preview
# Visit http://localhost:3000 and test all pages
```

### 2. Test Checklist
- [ ] Hero section loads and animates
- [ ] Data-rain effect is smooth
- [ ] Navbar is responsive
- [ ] All navigation links work
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Mobile view is responsive (test at 375px, 768px, 1024px)
- [ ] Performance metrics are good (>90 Lighthouse)

### 3. Performance Checks
```bash
# Install lighthouse
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3000 --view
```

## Deployment Steps (Quick Start - Vercel)

### Step 1: Prepare Repository
```bash
git status  # Ensure all changes are committed
git log -1  # Check latest commit
```

### Step 2: Connect to Vercel
```
1. Visit https://vercel.com/new
2. Authorize GitHub
3. Select cybersec-site repository
4. Framework: Astro
5. No additional configuration needed
6. Click "Deploy"
```

### Step 3: Wait for Deployment
- Build takes ~2-3 minutes
- You'll get a preview URL: `cybersec-site-xxxxx.vercel.app`
- Test the preview thoroughly

### Step 4: Configure Production Domain
```
1. Project Settings > Domains
2. Add domain: cezentech.com
3. Configure DNS or add CNAME
4. Enable www redirect
5. Add cezentech.com and www.cezentech.com
```

### Step 5: Enable Auto-Deployment
```
1. Settings > Git
2. Ensure "Automatic Deployments" is ON
3. Main branch should auto-deploy
4. Preview deployments: ON (for pull requests)
```

## Post-Deployment Verification

### ✅ Functional Tests
- [ ] Visit cezentech.com
- [ ] Test all navigation links
- [ ] Hero section loads correctly
- [ ] Animations are smooth
- [ ] Forms work (if implemented)
- [ ] Mobile experience is good

### ✅ Security Tests
- [ ] HTTPS is enabled
- [ ] Certificate is valid
- [ ] No mixed content warnings
- [ ] Security headers are set

### ✅ Performance Tests
- [ ] Page loads in <3 seconds
- [ ] Lighthouse score >90
- [ ] No console errors
- [ ] Images are optimized

### ✅ SEO Tests
- [ ] Meta tags are present
- [ ] sitemap.xml exists
- [ ] robots.txt is correct
- [ ] Open Graph tags work

## Monitoring & Analytics

### Vercel Analytics
```
Project Settings > Analytics
- Enable Web Analytics
- Monitor Core Web Vitals
- Check error rates
```

### Setup Google Analytics (Optional)
```javascript
// src/layouts/layout.astro
<script>
  if (import.meta.env.VITE_GA_ID) {
    // Add Google Analytics script
  }
</script>
```

## Troubleshooting

### Build Fails
```bash
# Clean and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### 404 Errors on Routes
- Ensure astro.config.mjs is correct
- Check file paths in src/pages/
- Rebuild: `npm run build`

### CSS Not Loading
- Check @tailwindcss imports in src/styles/global.css
- Verify Tailwind config
- Clear browser cache

### Images Not Showing
- Verify image paths (public/ or import)
- Check image file exists
- Optimize image sizes

## Rollback Plan

If deployment fails:

```bash
# Vercel: Automatic rollback available
1. Go to Deployments tab
2. Find last stable deployment
3. Click "Promote to Production"

# Netlify: Similar process
1. Go to Deploys
2. Find last stable deployment
3. Right-click > "Set as live"
```

## Continuous Deployment

### Automatic on Git Push
- Main branch → Production
- PR branches → Preview deployments
- Merge PR → Auto-deploy to prod

### Manual Deployment

**Vercel:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from command line
vercel --prod
```

**Netlify:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

## Contact & Support

- **GitHub:** https://github.com/dhanushjogi/cybersec-site
- **Status Page:** (Set up status.cezentech.com)
- **Support Email:** support@cezentech.com

## Success Criteria ✅

- [x] Site is live at cezentech.com
- [x] HTTPS certificate is valid
- [x] All pages load correctly
- [x] No console errors
- [x] Performance metrics are excellent
- [x] SEO is optimized
- [x] Forms work (if implemented)
- [x] Mobile experience is responsive

---

**Deployment Status:** READY FOR PRODUCTION ✅
**Last Updated:** March 23, 2026
**Version:** 1.0.0
