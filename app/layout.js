import './globals.css';
import { headers } from 'next/headers';

export async function generateMetadata() {
  const requestHeaders = await headers();
  const host = requestHeaders.get('x-forwarded-host') || requestHeaders.get('host') || 'localhost:3000';
  const protocol = requestHeaders.get('x-forwarded-proto') || (host.includes('localhost') ? 'http' : 'https');
  const image = `${protocol}://${host}/og.png`;
  const title = 'Nova Dental — klinika stomatologiczna';
  const description = 'Nowoczesne, spokojne i kompleksowe leczenie stomatologiczne w jednym miejscu.';

  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
