const fs = require('fs');
const path = require('path');

const siteUrl = process.env.SITE_URL || 'https://msrnayeem.cloud';
const infoDir = path.join(process.cwd(), 'info');
const publicDir = path.join(process.cwd(), 'public');

function buildSitemap(projects) {
  const urls = [
    `${siteUrl}/`,
  ];

  // Add project pages if you have dedicated pages per project
  projects.forEach((p) => {
    // If liveLink is external we skip creating site URL entries for projects.
    // For demo, include slug path
    const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    urls.push(`${siteUrl}/projects/${slug}`);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>`)
    .join('\n')}\n</urlset>`;

  return xml;
}

function main() {
  let projects = [];
  try {
    const projectsRaw = fs.readFileSync(path.join(infoDir, 'projects.json'), 'utf8');
    projects = JSON.parse(projectsRaw);
  } catch (err) {
    console.warn('No projects.json found or invalid JSON. Creating sitemap with root only.');
  }

  const sitemap = buildSitemap(projects);

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
  console.log('Wrote public/sitemap.xml');
}

main();
