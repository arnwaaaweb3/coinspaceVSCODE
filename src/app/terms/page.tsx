'use client';

import styles from '../terms/styles/Terms.module.css';
import Image from 'next/image';

export default function TermsPage() {
  return (
    <div className={styles.termsWrapper}>
      <div className={styles.termsLayout}>
        <div className={styles.termsContainer}>
          <h1 className={styles.heading}>Welcome</h1>
          <p className={styles.updated}>
            By using Coinspace, you’re vibing with our mission: Decentralizing education through NFTs. 
            But just like any cool community, we have a few rules and a playbook. Here’s our T&C – no boring stuff, promise!
          </p>

          <section className={styles.section}>
            <h2>1. 📚 What We Do?</h2>
            <p>Coinspace is a Web3-powered platform where:</p>
            <ul className={styles.list}>
              <li>Educators publish educational content as NFTs.</li>
              <li>Learners can mint, own, and learn from these NFTs.</li>
              <li>Royalties go straight to the creator (no middlemen, yay!).</li>
            </ul>
            <p>We’re not a traditional e-learning site. We’re a movement. A protocol. A vibe.</p>
          </section>

          <section className={styles.section}>
            <h2>2. 🎓 For Learners: Read Before You Mint!</h2>
            <p>When you mint an NFT module:</p>
            <ul className={styles.list}>
              <li>You don’t own the intellectual property. You own access to the module.</li>
              <li>You’re paying gas fees (for free modules) or crypto to the author (for premium ones).</li>
              <li>You can’t re-upload, resell the content outside the chain, or claim it as yours.</li>
            </ul>
            <p>Please don’t be that guy.</p>
          </section>

          <section className={styles.section}>
            <h2>3. ✍️ For Creators: Share Knowledge, Not Spam</h2>
            <p>Creators can:</p>
            <ul className={styles.list}>
              <li>Upload PDF modules.</li>
              <li>Set mint price and royalties.</li>
              <li>Track ownership transparently via blockchain.</li>
            </ul>
            <p>But:</p>
            <ul className={styles.list}>
              <li>No plagiarism, hate speech, fake info, or AI-generated nonsense.</li>
              <li>We reserve the right to remove any content that breaks our vibe (and rules).</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. 🧠 Smart Contracts, Smart Risks</h2>
            <p>Coinspace is built on the Sui blockchain. That means:</p>
            <ul className={styles.list}>
              <li>All transactions are public and irreversible.</li>
              <li>Gas fees may apply (network-based).</li>
              <li>If you mess up your wallet or lose your keys, we can’t help. Web3’s harsh like that.</li>
            </ul>
            <p>So please, use a wallet you understand. Don’t FOMO mint stuff without thinking.</p>
          </section>

          <section className={styles.section}>
            <h2>5. 🔒 Privacy? We Don’t Need Your Name</h2>
            <p>We respect your privacy. We don’t collect emails or passwords. All we see is your wallet address. That’s it.</p>
            <p>But please don’t:</p>
            <ul className={styles.list}>
              <li>Impersonate someone else.</li>
              <li>Use bots or exploit smart contracts.</li>
              <li>Try to hack us. Seriously. Don’t.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. 🛠️ Bugs, Updates & DAO Things</h2>
            <p>Coinspace is still evolving. Things might break.</p>
            <ul className={styles.list}>
              <li>We might update features or policies (we’ll try to tell you).</li>
              <li>In the future, governance might be handed to a DAO. We’ll vibe democratically when the time’s right.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. 🧾 Legal Stuff (The “Don’t Sue Us” Part)</h2>
            <p>We’re not responsible for:</p>
            <ul className={styles.list}>
              <li>Lost funds, failed transactions, or tech glitches.</li>
              <li>Any third-party wallet bugs.</li>
              <li>Decisions you make based on content found here.</li>
            </ul>
            <p>This is an educational platform, not financial or legal advice. Use it wisely.</p>
          </section>

          <section className={styles.section}>
            <h2>8. 💌 Final Words</h2>
            <p>By using Coinspace, you agree to all the stuff above. If you don’t, that’s cool—but please don’t use the platform.</p>
            <p>Now go mint some knowledge. Decentralize your brain. 🧠🚀</p>
          </section>

          {/* Gambar di sebelah kanan */}
        <div className={styles.illustrationWrapper}>
          <Image
            src="/images/coinspace_terms.svg"
            alt="Coinspace Illustration"
            width={400}
            height={400}
            className={styles.illustrationImg}
          />
        </div>
      </div>
    </div>
    </div>
  );
}