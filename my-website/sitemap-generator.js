const fs = require('fs');
const path = require('path');

const domain = 'https://db4cloud.in';

const pages = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'daily'
  },
  {
    path: '/services',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/industries',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/careers',
    priority: '0.7',
    changefreq: 'weekly'
  },
  {
    path: '/contact',
    priority: '0.6',
    changefreq: 'monthly'
  }
];

const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${domain}${page.path}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `).join('')}
</urlset>`;

const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${domain}/sitemap.xml`;

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Write sitemap.xml
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXML);

// Write robots.txt
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

console.log('Sitemap and robots.txt generated successfully!');
