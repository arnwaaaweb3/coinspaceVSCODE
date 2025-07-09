import React, { useState } from 'react';
import { useWalletKit } from '@mysten/wallet-kit';
import '../styles/CustomConnectButton.css';

const CustomConnectButton: React.FC = () => {
  const {
    connect,
    disconnect,
    isConnected,
    currentAccount,
    wallets,
  } = useWalletKit();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const handleConnect = (walletName: string) => {
    connect(walletName);
    setIsWalletModalOpen(false); // Tutup modal setelah pilih
  };

  const handleOpenModal = () => {
    setIsWalletModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsWalletModalOpen(false);
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="connect-button-container">
      <div className="connect-button-wrapper">
        {isConnected && currentAccount ? (
          <>
            <button className="custom-connect-button connected" disabled>
              <div className="connected-wallet-display">
                <span>{truncateAddress(currentAccount.address)}</span>
              </div>
            </button>
            <button
              className="custom-disconnect-button"
              onClick={disconnect}
            >
              Disconnect
            </button>
          </>
        ) : (
          <button className="custom-connect-button" onClick={handleOpenModal}>
            Connect Wallet
          </button>
        )}
      </div>

      {/* Wallet Selection Modal */}
      {isWalletModalOpen && (
        <div className="wallet-modal-overlay">
          <div className="wallet-modal">
            <h3 className="wallet-modal-title">Select Wallet</h3>
            <div className="wallet-list">
              {wallets.length > 0 ? (
                wallets.map((wallet) => (
                  <button
                    key={wallet.name}
                    className="wallet-option"
                    onClick={() => handleConnect(wallet.name)}
                  >
                    <img
                      src={wallet.icon}
                      alt={wallet.name}
                      className="wallet-icon"
                    />
                    {wallet.name}
                  </button>
                ))
              ) : (
                <p className="wallet-modal-text">No wallets detected</p>
              )}
            </div>
            <button className="wallet-modal-close" onClick={handleCloseModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomConnectButton;
