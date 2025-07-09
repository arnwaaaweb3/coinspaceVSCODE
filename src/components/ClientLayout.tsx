'use client';

import { ReactNode } from 'react';
import { WalletKitProvider } from '@mysten/wallet-kit';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return <WalletKitProvider>{children}</WalletKitProvider>;
}