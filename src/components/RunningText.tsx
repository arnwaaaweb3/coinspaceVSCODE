'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/RunningText.module.css';

export default function RunningText() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={styles.runningTextContainer}>
      <span className={styles.runningText}>
        Ready to learn, earn, and explore? Welcome to Coinspace!{' '}
        Before we kick things off, don't forget to check our{' '}
        <Link href="/terms" className={styles.termsLink}>
          Terms and Conditions.
        </Link>
      </span>
      <button
        className={styles.closeButton}
        onClick={() => setIsVisible(false)}
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}
