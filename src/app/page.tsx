'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useWalletKit } from '@mysten/wallet-kit';
import WalletProvider, { useWalletStatus } from '../components/WalletProvider';
import { Header } from '../components/Header';
import Panel from '../components/Panel';
import Footer from '@/components/Footer';
import RunningText from '../components/RunningText'; 

function HomeContent() {
  const { isConnected } = useWalletKit();
  const { isWalletReady, error } = useWalletStatus();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isWalletReady) {
    return (
      <main className="main-content">
        <div className="content-overlay">
          <div
            className="spinner"
            style={{
              border: '4px solid #fef4ea',
              borderTop: '4px solid #604cc3',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              animation: 'spin 1s linear infinite',
            }}
          ></div>
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="main-content">
        <div className="content-overlay">
          <p className="error-message">{error}</p>
        </div>
      </main>
    );
  }
}

export default function Home() {
  return (
    <WalletProvider>
      <Header />
      <RunningText />
      <div style={{ height: '45px' }} />
      <Panel />
      <HomeContent />
      <Footer />
    </WalletProvider>
  );
}
