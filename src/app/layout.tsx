import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
      {/* <header>
        <nav>
          <a href="/">Home</a> | 
          <a href="/about">About</a> | 
          <a href="/services">Services</a> | 
          <a href="/contact">Contact</a>
        </nav>
      </header> */}

      {/* <main className={inter.className}> */}
      <body className={inter.className}>
        <div className="p-4 md:px-40">{children}</div>
      </body>
      {/* </main> */}
      {/* 
      <footer>
        <p>© 2023 My Next App</p>
      </footer> */}
    </html>
  );
}
