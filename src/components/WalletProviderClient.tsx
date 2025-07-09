// src/components/WalletProviderClient.tsx
'use client';

import { WalletKitProvider } from '@mysten/wallet-kit';
import { ReactNode } from 'react';

export default function WalletProviderClient({ children }: { children: ReactNode }) {
  return (
    <WalletKitProvider>
      {children}
    </WalletKitProvider>
  );
}
