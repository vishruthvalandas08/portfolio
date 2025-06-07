import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://vishruthvalandas08.github.io/portfolio' });
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(sitemap).then(() => console.log('✅ sitemap.xml generated!'));

sitemap.pipe(writeStream);
links.forEach(link => sitemap.write(link));
sitemap.end();
