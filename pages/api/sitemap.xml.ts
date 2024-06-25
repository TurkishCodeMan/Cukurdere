// pages/api/sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async function handler(req: { method: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; end: { (arg0: string): void; new(): any; }; }; setHeader: (arg0: string, arg1: string) => void; }) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const links = [
    { url: '/home', changefreq: 'daily', priority: 1.0 },
    { url: '/home#services', changefreq: 'daily', priority: 0.8 },
    { url: '/home#about', changefreq: 'daily', priority: 0.8 },
    { url: '/home#contact', changefreq: 'daily', priority: 0.8 },
  ];


  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://www.cukurderesondaj.com.tr` });

  // Turn the stream into a promise
  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  // Set the response headers and send the XML string
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).end(xmlString);
}
