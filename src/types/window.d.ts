// src/types/window.d.ts

interface ExtendedEthereumProvider {
  isMetaMask?: boolean;
  isCoinbaseWallet?: boolean;
  isBraveWallet?: boolean;
  request: (args: { method: string; params?: any[] }) => Promise<any>;
  on: (event: string, callback: (...args: any[]) => void) => void;
  removeListener: (event: string, callback: (...args: any[]) => void) => void;
}

interface SuiWallet {
  connect: () => Promise<void>;
  getAccounts: () => Promise<string[]>;
}

// Extend the window object
interface Window {
  ethereum?: ExtendedEthereumProvider;
  suiWallet?: SuiWallet;
}
