'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useWalletKit } from '@mysten/wallet-kit';
import WalletProvider, { useWalletStatus } from '@/components/WalletProvider';


export default function Dashboard() {
  const { isConnected, currentAccount } = useWalletKit();
  const { isWalletReady, error: providerError } = useWalletStatus();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log('Dashboard: Mounting', { isMounted, isWalletReady, isConnected });
    setIsMounted(true);
  }, []);

  useEffect(() => {
    console.log('Dashboard: Checking redirect', { isMounted, isWalletReady, isConnected });
    if (!isMounted || !isWalletReady || isConnected) return;
    const timer = setTimeout(() => {
      console.log('Dashboard: Redirecting to /');
      router.replace('/');
    }, 100);
    return () => clearTimeout(timer);
  }, [isMounted, isWalletReady, isConnected, router]);

  if (!isMounted || !isWalletReady) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#0f172a',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }

  if (providerError) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#0f172a',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p style={{ color: '#ef4444' }}>{providerError}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0f172a',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Dashboard</h1>
      </header>

      <main
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            width: '100%',
            padding: '24px',
            backgroundColor: '#1f2937',
            borderRadius: '12px',
          }}
        >
          {isConnected && currentAccount ? (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>
                Welcome, {currentAccount.address.substring(0, 8)}...
              </h2>
              <p style={{ marginBottom: '24px' }}>
                You have access to the following modules:
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#374151',
                    padding: '16px',
                    borderRadius: '8px',
                  }}
                >
                  <h3 style={{ fontWeight: 'bold' }}>
                    Module 1: Introduction to Web3
                  </h3>
                  <button
                    style={{
                      marginTop: '12px',
                      padding: '10px 20px',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                  >
                    Unlock Module
                  </button>
                </div>

                <div
                  style={{
                    backgroundColor: '#374151',
                    padding: '16px',
                    borderRadius: '8px',
                  }}
                >
                  <h3 style={{ fontWeight: 'bold' }}>
                    Module 2: Blockchain Basics
                  </h3>
                  <button
                    style={{
                      marginTop: '12px',
                      padding: '10px 20px',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                  >
                    Unlock Module
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>
                Connect your wallet to access the dashboard!
              </h2>

            </div>
          )}
        </div>
      </main>
    </div>
  );
}