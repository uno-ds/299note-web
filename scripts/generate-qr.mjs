#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import QRCode from 'qrcode';

const TARGETS = [
  {
    name: 'wvac2026.png',
    url: 'https://299note.com',
    note: 'Root URL (locale-auto)',
  },
  {
    name: 'wvac2026-utm.png',
    url: 'https://299note.com?utm_source=wvac2026&utm_medium=qr',
    note: 'UTM-tagged QR for A4 sheet',
  },
];

const OUT_DIR = resolve(process.cwd(), 'public', 'qr');
await mkdir(OUT_DIR, { recursive: true });

for (const t of TARGETS) {
  const outPath = join(OUT_DIR, t.name);
  await QRCode.toFile(outPath, t.url, {
    type: 'png',
    errorCorrectionLevel: 'H',
    margin: 2,
    width: 1024,
    color: { dark: '#2D2A2B', light: '#FFFBFB' },
  });
  console.log(`✓ ${t.name.padEnd(24)} → ${t.url}`);
}

console.log(`\nSaved to: ${OUT_DIR}`);
