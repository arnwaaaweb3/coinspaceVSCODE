'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import CustomConnectButton from './CustomConnectButton';

export function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image
          src="/coinspace-normal-logo.png"
          alt="Coinspace Logo"
          width={70}
          height={70}
        />
        <span className={styles.logoText}>Coinspace</span>
      </div>

      <div className={styles.menuWrapper}>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>

        {menuOpen && (
          <div className={styles.dropdown}>
            <div className={styles.walletSection}>
              <CustomConnectButton />
            </div>
            <a href="/dashboard">Dashboard</a>
            <a href="/about">About</a>
          </div>
        )}
      </div>
    </header>
  );
}
