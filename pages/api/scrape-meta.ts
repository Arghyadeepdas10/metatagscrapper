
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing URL parameter' });
  }

  try {
    const response = await axios.get(String(url));
    const html = response.data;
    const $ = cheerio.load(html);

    const metaTags: { [key: string]: string } = {};

    $('meta').each((_, element) => {
      const property = $(element).attr('property') || $(element).attr('name');
      const content = $(element).attr('content');
      if (property && content) {
        metaTags[property] = content;
      }
    });

    return res.status(200).json(metaTags);
  } catch (error) {
    console.error('Error scraping meta tags:', error);
    return res.status(500).json({ error: 'Error fetching the website content' });
  }
}
