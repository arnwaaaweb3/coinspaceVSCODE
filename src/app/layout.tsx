import './globals.css';
import { ReactNode } from 'react';
import ClientLayout from '../components/ClientLayout';
import WalletProviderClient from '../components/WalletProviderClient'; // ganti ini!

export const metadata = {
  title: 'Coinspace',
  description: 'Learn anything, decentralized!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Helvetica:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <WalletProviderClient>
          <ClientLayout>{children}</ClientLayout>
        </WalletProviderClient>
      </body>
    </html>
  );
}
