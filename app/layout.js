import './globals.css';

const title = 'Ptak Stomatologia — gabinet stomatologiczny w Wadowicach';
const description = 'Kompleksowe leczenie stomatologiczne, implantologia, ortodoncja i diagnostyka RTG w Wadowicach.';

export const metadata = {
  metadataBase: new URL('https://klinika-usmiechu-nova.opbxedits.chatgpt.site'),
  title,
  description,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: { title, description, images: [{ url: '/og.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
      </head>
      <body>{children}</body>
    </html>
  );
}
