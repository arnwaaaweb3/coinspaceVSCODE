module coinspace_nft::nft_module {
    use sui::object::{Self, UID};
    use sui::tx_context;
    use sui::tx_context::TxContext;
    use sui::transfer;
    use std::string;

    /// Struktur data NFT untuk modul pembelajaran
    struct LearningNFT has key, store {
        id: UID,
        title: string::String,
        description: string::String,
        file_url: string::String,
        author: address,
    }

    /// Fungsi minting NFT edukasi
    public entry fun mint_module(
        title: string::String,
        description: string::String,
        file_url: string::String,
        ctx: &mut TxContext
    ) {
        let nft = LearningNFT {
            id: object::new(ctx),
            title,
            description,
            file_url,
            author: tx_context::sender(ctx),
        };
        transfer::transfer(nft, tx_context::sender(ctx));
    }
}
