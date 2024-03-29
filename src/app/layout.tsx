import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './_components/NavBar';
import Footer from './_components/Footer';
import ContextProvider from '@/app/_context/ContextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fresh Groceries | Aldokan',
  description:
    'e-commerce platform in Berlin, specializing in halal meat and Arabic groceries.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <ContextProvider>
          <div className={`${inter.className} flex flex-col min-h-screen`}>
            <header>
              <NavBar />
            </header>

            <main className="flex-grow">
              <div className="p-4 md:px-40">{children}</div>
            </main>

            <Footer />
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
