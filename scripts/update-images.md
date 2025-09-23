# Image Update Guide

## Quick Steps to Add Your Images

### 1. Prepare Your Images

Make sure your images are optimized:
- **Team Photos**: 800x600px (4:3 ratio), JPG format
- **Hero Image**: 1200x1200px (square), JPG format
- File size should be under 500KB for fast loading

### 2. Replace Placeholder Files

Copy your images to these exact locations:

```
public/images/team/team-photo-1.jpg    ← Your first team photo
public/images/team/team-photo-2.jpg    ← Your second team photo  
public/images/hero-bg.jpg              ← Your hero image
```

### 3. Where Images Appear

- **Homepage Hero**: Right side of the main banner
- **About Page**: "Team in Action" section with two large photos
- **Team Members**: Individual profile photos (currently external URLs)

### 4. Optional: Update Team Member Photos

To use local images for individual team members, edit `src/app/about/page.tsx`:

1. Add your team member photos to `public/images/team/`
2. Update the `teamMembers` array to use local paths:

```javascript
const teamMembers = [
  {
    // ... other properties
    image: "/images/team/member-1.jpg", // instead of external URL
  },
  // ... more members
]
```

### 5. Test Your Changes

1. Save your files
2. Refresh your website
3. Check that all images load correctly
4. Verify images look good on mobile and desktop

## Image Best Practices

- Use descriptive file names
- Compress images before uploading
- Consider WebP format for better compression
- Ensure images are professional and high-quality
- Test on different screen sizes
