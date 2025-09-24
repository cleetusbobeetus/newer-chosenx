# ChosenX - Static HTML Marketing Website

A professional, modern marketing website built with static HTML, CSS, and JavaScript.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with black background and dark red/orange accents
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

- **Frontend**: Static HTML5, CSS3, JavaScript
- **Development**: Local development server using `serve`
- **Deployment**: Optimized for static hosting (Vercel, Netlify, GitHub Pages)
- **Styling**: Custom CSS with modern design principles
- **Structure**: Multi-page website with clean navigation

## 🎨 Design System

### Color Palette
- **Primary Background**: Black (#000000)
- **Accent Colors**: Dark Red (#b91c1c) and Orange (#ea580c)
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

1. **Install Dependencies** (optional for development):
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Or simply open `index.html` in your browser for basic viewing.

3. **Open Browser**:
   Visit [http://localhost:3000](http://localhost:3000) (if using npm dev server)

## 📁 Project Structure

```
CHOSENX/
├── index.html             # Home page
├── about.html             # About page  
├── contact.html           # Contact page
├── faq.html               # FAQ page
├── careers.html           # Careers/Apply page
├── home.html              # Alternative home page
├── website.html           # Additional page
├── public/                # Static assets
│   └── images/            # Image files
│       ├── hero-bg.jpg    # Hero background
│       └── team/          # Team photos
├── package.json           # Project configuration
├── vercel.json            # Vercel deployment config
└── README.md              # Project documentation
```

## 🔧 Customization

### Updating Content
- Edit HTML files directly to modify content
- Update styles in embedded CSS or external stylesheets
- Modify JavaScript functionality in script tags or external files
- Replace images in the `public/images/` directory

### Adding Content
- Update team members in `about.html`
- Modify FAQ items in `faq.html`  
- Change contact information in `contact.html`
- Update company details throughout the HTML files

### Google Maps Integration
Replace the map placeholder in the Contact page with an actual Google Maps embed:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="300"
  allowFullScreen
  loading="lazy">
</iframe>
```

## 📦 Build & Deploy

1. **Build for Production**:
   ```bash
   npm run build
   ```
   (This project is already production-ready as static files)

2. **Start Production Server** (local testing):
   ```bash
   npm start
   ```

3. **Deploy**: 
   Ready to deploy to Vercel, Netlify, GitHub Pages, or any static hosting platform.
   
   **Vercel**: The included `vercel.json` configures proper routing for the static site.
   **Other platforms**: Simply upload all HTML files and the `public/` directory.

## 🎯 Performance Features

- **Fast Loading**: Static HTML files load instantly
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and semantic HTML elements
- **Mobile Responsive**: Optimized for all device sizes
- **Clean Code**: Well-structured HTML with efficient CSS

## 🤝 Contributing

This is a production-ready template that can be customized for any business or organization. The code is clean, well-documented, and follows modern web development best practices.

## 📄 License

This project is open source and available under the MIT License.
