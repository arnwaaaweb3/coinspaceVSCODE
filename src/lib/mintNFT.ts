import { uploadFileToIPFS } from './ipfsUploader';
import { TransactionBlock } from '@mysten/sui.js/transactions';

export const mintNFT = async (
  title: string,
  description: string,
  file: File,
  price: number,
  walletAddress: string,
  signAndExecuteTransactionBlock: any // from useWallet hook
) => {
  const fileUrl = await uploadFileToIPFS(file);

  console.log('Minting NFT with metadata:', {
    title,
    description,
    fileUrl,
    price,
    walletAddress
  });

  // Buat tx block baru
  const tx = new TransactionBlock();

  // Contoh call ke fungsi mint di Move module
  tx.moveCall({
    target: '0xYOUR_MODULE_ADDRESS::nft_module::mint_nft', // ganti ini!
    arguments: [
      tx.pure(title),
      tx.pure(description),
      tx.pure(fileUrl),
      tx.pure(price.toString())
    ]
  });

  const result = await signAndExecuteTransactionBlock({
    transactionBlock: tx,
    chain: 'sui:devnet', // ganti ke testnet/mainnet kalau sudah siap
  });

  console.log('✅ Mint result:', result);

  return result;
};
