# Local Development Setup

## Running Locally

To test the website locally with proper image loading:

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start local server**:
   ```bash
   npm run local
   ```

3. **Open in browser**:
   - Go to `http://localhost:3000`
   - Navigate to `http://localhost:3000/home.html` for the home page
   - Navigate to `http://localhost:3000/team.html` for the team page
   - etc.

## Why This Setup Works

- **Local Development**: The `serve` package creates a local server that serves files from the root directory
- **Vercel Deployment**: Uses the same `/images/` paths that Vercel expects
- **Images**: All images are stored in `public/images/` folder and served correctly by both local server and Vercel

## Image Paths

All images use absolute paths like `/images/team/filename.jpg` which work for both:
- Local development (via `npm run local`)
- Vercel deployment (automatically serves from `public/images/`)

## Quick Test

1. Run `npm run local`
2. Open `http://localhost:3000/team.html`
3. All team member images should display correctly
4. Test other pages: home.html, about.html, contact.html, careers.html, faq.html
