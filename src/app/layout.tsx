import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

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
        <div className={`${inter.className} flex flex-col min-h-screen`}>
          <header>
            <NavBar />
          </header>
          <main className="flex-grow">
            <div className="p-4 md:px-40">{children}</div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
