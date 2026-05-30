import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const W = 1200;
const H = 630;
const djDir = join(__dir, '..');
const labDir = join(__dir, '../../andyk-music-lab');
const logoSrc = join(djDir, 'public/logo.png');
const LOGO_SIZE = 150;
const logoLeft = Math.round((W - LOGO_SIZE) / 2); // 525

// Strip the white/near-white background from the logo.
// For dark backgrounds: also invert the remaining dark pixels to white.
async function prepareLogo({ forDark = false } = {}) {
  const { data, info } = await sharp(logoSrc)
    .resize(LOGO_SIZE, LOGO_SIZE)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const THRESHOLD = 220; // luminance above this → transparent
  for (let i = 0; i < data.length; i += 4) {
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    if (lum > THRESHOLD) {
      data[i + 3] = 0; // make near-white pixels transparent
    } else if (forDark) {
      // Invert dark pixels to white so the logo is visible on a dark background
      data[i] = 255 - data[i];
      data[i + 1] = 255 - data[i + 1];
      data[i + 2] = 255 - data[i + 2];
    }
  }

  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toBuffer();
}

function textSvg(lines) {
  const items = lines.map(({ text, y, fill, size, weight }) =>
    `<text x="${W / 2}" y="${y}" text-anchor="middle" fill="${fill}"
      font-family="Helvetica Neue,Helvetica,Arial,sans-serif"
      font-size="${size}"${weight ? ` font-weight="${weight}"` : ''}>${text}</text>`
  ).join('\n');
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${items}</svg>`
  );
}

async function generateDJ() {
  const logo = await prepareLogo({ forDark: true });

  const border = 22;
  const borderSvg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
      <rect x="${border}" y="${border}" width="${W - border * 2}" height="${H - border * 2}"
        fill="none" stroke="#444444" stroke-width="2"/>
    </svg>`
  );

  const text = textSvg([
    { text: "DJ Andy'K",                       y: 375, fill: '#ffffff', size: 86, weight: 'bold' },
    { text: 'Trance · Progressive House · EDM', y: 458, fill: '#888888', size: 34 },
  ]);

  await sharp({ create: { width: W, height: H, channels: 3, background: '#111111' } })
    .composite([
      { input: logo,      top: 110, left: logoLeft },
      { input: borderSvg, top: 0,   left: 0 },
      { input: text,      top: 0,   left: 0 },
    ])
    .jpeg({ quality: 95 })
    .toFile(join(djDir, 'public/og-image.jpg'));

  console.log('✓ djandyk-landing/public/og-image.jpg  (1200×630)');
}

async function generateLab() {
  const logo = await prepareLogo({ forDark: false });

  const text = textSvg([
    { text: "Andy'K Music Lab",                         y: 358, fill: '#111111', size: 78, weight: 'bold' },
    { text: 'Professional tools for producers and DJs', y: 440, fill: '#666666', size: 32 },
  ]);

  await sharp({ create: { width: W, height: H, channels: 3, background: '#ffffff' } })
    .composite([
      { input: logo, top: 108, left: logoLeft },
      { input: text, top: 0,   left: 0 },
    ])
    .jpeg({ quality: 95 })
    .toFile(join(labDir, 'public/og-image.jpg'));

  console.log('✓ andyk-music-lab/public/og-image.jpg   (1200×630)');
}

Promise.all([generateDJ(), generateLab()]).catch(console.error);
