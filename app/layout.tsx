import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import './IosevkaSS12-Unhinted.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" style={{
        fontFamily: 'Iosevka SS12 Web, sans-serif, system-ui',
      }}>
        <RootProvider search={{ options: { type: 'static' } }}>{children}</RootProvider>
      </body>
    </html>
  );
}
