// app/api/robots.ts
import { NextApiRequest, NextApiResponse } from "next";

const baseUrl = "https://www.cukurderesondaj.com.tr";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain");
  res.write(
    `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
Host: ${baseUrl}`
  );
  res.end();
}
