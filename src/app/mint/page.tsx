'use client';

import { useState } from 'react';
import { useWalletKit, ConnectButton } from '@mysten/wallet-kit';
import { mintNFT } from '../../lib/mintNFT';

export default function MintPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [price, setPrice] = useState(0);
  const { currentAccount, signAndExecuteTransactionBlock } = useWalletKit();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleMint = async () => {
    if (!file) return alert('📎 Please upload a PDF file.');
    if (!title || !description || !price) return alert('✍️ Please fill in all fields.');
    if (!currentAccount?.address) return alert('🔌 Please connect your wallet.');

    try {
      await mintNFT(title, description, file, price, currentAccount.address, signAndExecuteTransactionBlock);
      alert('✅ NFT minted successfully!');
    } catch (error) {
      console.error('❌ Minting failed:', error);
      alert('Minting failed. Please try again.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#011829',
      color: '#c0e6ff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px',
      flexDirection: 'column'
    }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px' }}>
          Distribute your Module to the World through Blockchain!
        </h1>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <ConnectButton />
        </div>

        <input
          type="text"
          placeholder="Module Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '16px' }}
        />
        <textarea
          placeholder="Module Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '16px' }}
        />
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          style={{ width: '100%', padding: '12px', marginBottom: '16px' }}
        />
        <input
          type="number"
          placeholder="Price (in SUI)"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          style={{ width: '100%', padding: '12px', marginBottom: '24px' }}
        />

        <button
          onClick={handleMint}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#2563eb',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Mint NFT
        </button>
      </div>
    </div>
  );
}
