# ChosenX - Modern Marketing Website

A professional, modern marketing website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with deep navy background and gold/teal accents
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Professional Layout**: Sticky header with navigation and highlighted CTA button
- **Complete Pages**:
  - Home page with hero section and feature highlights
  - About page with company mission, values, and team showcase
  - FAQ page with animated accordion
  - Contact page with form validation and business information
  - Apply page with file upload and form validation
- **Form Validation**: Client-side validation with error handling
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Custom shadcn/ui inspired components
- **Utilities**: clsx, tailwind-merge

## 🎨 Design System

### Color Palette
- **Primary Background**: Deep Navy (#102a43)
- **Accent Colors**: Gold (#eab308) and Teal (#14b8a6)
- **Text**: White with opacity variations
- **Glass Effects**: White overlays with backdrop blur

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Proper heading structure with responsive sizing

### Components
- **Rounded Corners**: 2xl border radius for modern look
- **Shadows**: Soft drop shadows with hover effects
- **Spacing**: Consistent padding and margins using Tailwind utilities

## 📱 Pages Overview

### Home Page
- Bold hero section with gradient text effects
- Statistics showcase
- Feature cards with icons
- Call-to-action sections

### About Page
- Company mission and story
- Core values with icon cards
- Team member showcase with social links
- Professional imagery placeholders

### FAQ Page
- Animated accordion with smooth transitions
- Comprehensive Q&A covering services, pricing, process
- Contact CTA section
- Quick navigation links

### Contact Page
- Contact form with validation
- Business information cards
- Map placeholder (ready for Google Maps integration)
- Success/error states

### Apply Page
- Job application form with file upload
- Form validation and error handling
- Success confirmation with animation
- Professional layout

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── apply/             # Application page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/                # UI components (Button, Card, Accordion)
│   ├── Header.tsx         # Site header with navigation
│   └── Footer.tsx         # Site footer
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions
└── types/                 # TypeScript type definitions
    └── index.ts           # Shared interfaces
```

## 🔧 Customization

### Updating Colors
Edit the color palette in `tailwind.config.js`:
```javascript
colors: {
  navy: { /* Custom navy shades */ },
  gold: { /* Custom gold shades */ },
  teal: { /* Custom teal shades */ }
}
```

### Adding Content
- Update team members in `src/app/about/page.tsx`
- Modify FAQ items in `src/app/faq/page.tsx`
- Change contact information in `src/app/contact/page.tsx`
- Update company details throughout the site

### Google Maps Integration
Replace the map placeholder in the Contact page with an actual Google Maps embed:
```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="300"
  allowFullScreen
  loading="lazy"
/>
```

## 📦 Build & Deploy

1. **Build for Production**:
   ```bash
   npm run build
   ```

2. **Start Production Server**:
   ```bash
   npm start
   ```

3. **Deploy**: 
   Ready to deploy to Vercel, Netlify, or any hosting platform that supports Next.js.

## 🎯 Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with App Router
- **SEO**: Proper meta tags and Open Graph support
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Optimized animations and minimal bundle size

## 🤝 Contributing

This is a production-ready template that can be customized for any business or organization. The code is clean, well-documented, and follows Next.js best practices.

## 📄 License

This project is open source and available under the MIT License.
