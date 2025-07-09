'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { WalletKitProvider } from '@mysten/wallet-kit';
import { ReactNode } from 'react';

interface WalletStatus {
  isWalletReady: boolean;
  error: string | null;
}

const WalletStatusContext = createContext<WalletStatus>({
  isWalletReady: false,
  error: null,
});

export function useWalletStatus() {
  return useContext(WalletStatusContext);
}

interface WalletProviderProps {
  children: ReactNode;
}

export default function WalletProvider({ children }: WalletProviderProps) {
  const [isWalletReady, setIsWalletReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log('WalletProvider: Mounting');
    setIsMounted(true);
    try {
      setIsWalletReady(true);
      console.log('WalletProvider: Initialized');
    } catch (err) {
      setError('Failed to initialize wallet provider');
      setIsWalletReady(true);
      console.log('WalletProvider: Error', err);
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <WalletStatusContext.Provider value={{ isWalletReady, error }}>
      <WalletKitProvider
        preferredWallets={['Slush Wallet', 'Suiet']}
        features={['sui:signAndExecuteTransactionBlock']}
        storageKey="coinspace-wallet"
      >
        {children}
      </WalletKitProvider>
    </WalletStatusContext.Provider>
  );
}