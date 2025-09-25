# Development Workflow

## For Local Development (Images Working)
```bash
npm run local
```
Then open `http://localhost:3000` - images will work with `public/images/` paths

## For Vercel Deployment (Images Working)
```bash
npm run deploy
git add .
git commit -m "Deploy with Vercel-compatible image paths"
git push
```

## What This Does:
- **Local**: Uses `public/images/` paths (works with local server)
- **Vercel**: Converts to `/images/` paths (works with Vercel's static file serving)
- **Same images**: All images stay in `public/images/` folder

## Quick Test:
1. **Local**: `npm run local` → `http://localhost:3000/team.html`
2. **Deploy**: `npm run deploy` → `git push` → Check Vercel URL

Both will show images correctly!
