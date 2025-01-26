import './globals.css';
import type { Metadata } from 'next';
import { Yusei_Magic } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Navigation } from '@/components/navigation';

const inter = Yusei_Magic({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'amagami - ポートフォリオ',
  description: 'エンジニアとしてのスキル・プロジェクトをご紹介します。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning className='scroll-smooth'>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
