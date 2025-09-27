// Deployment script to convert paths for Vercel
const fs = require('fs');
const path = require('path');

const htmlFiles = ['home.html', 'about.html', 'team.html', 'contact.html', 'careers.html', 'faq.html'];

console.log('Converting image paths for Vercel deployment...');

htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Replace public/images/ with /images/ for Vercel
        content = content.replace(/src="public\/images\//g, 'src="/images/');
        
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
});

console.log('Deployment paths updated! Ready for Vercel.');
