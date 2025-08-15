import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider';
import { Poppins, Geist } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
  display: 'swap',
  preload: true,
});

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-secondary',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Santi Moreno',
  description: 'Santi Moreno, software developer, student of AI engineering and founder of Syntora.',
  openGraph: {
    title: 'Santi Moreno',
    description: 'Santi Moreno, software developer, student of AI engineering and founder of Syntora.',
    images: '/og.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santi Moreno',
    description: 'Santi Moreno, software developer, student of AI engineering and founder of Syntora.',
    images: '/og.jpg',
  },
  icons: {
    icon: '/Vector.svg',
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const {locale} = await params;
  if(!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Vector.svg" />
      </head>
      <body className={`${poppins.variable} ${geist.variable}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}