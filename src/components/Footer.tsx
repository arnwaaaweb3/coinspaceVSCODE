'use client';

import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import {
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaTiktok,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Brand Section */}
        <div className={styles.brand}>
          <h2 className={styles.brandTitle}>Coinspace</h2>
          <p className={styles.tagline}>When blockchain scales education.</p>
        </div>

        {/* Socials Section (Kanan Atas) */}
        <div className={styles.socials}>
          <a
            href= "https://x.com/coinspaceid"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaTwitter />
          </a>
          <a
            href= "https://discord.gg/xN9rBNmyXZ"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaDiscord />
          </a>
          <a
            href="https://github.com/yourrepo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaGithub />
          </a>
          <a
            href="https://tiktok.com/@yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaTiktok />
          </a>
          <a
            href="https://linkedin.com/company/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaInstagram />
          </a>
        </div>

        {/* Links Section */}
        <div className={styles.links}>
          <Link href="/dashboard" className={styles.link}>
            Dashboard
          </Link>
          <Link href="/terms" className={styles.link}>
            Terms and Conditions
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/privacy" className={styles.link}>
            Privacy Policy
          </Link>
          <Link href="/faq" className={styles.link}>
            FAQ
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
          <Link href="/help" className={styles.link}>
            Help
          </Link>
          <Link href="/accessibility" className={styles.link}>
            Accessibility
          </Link>
        </div>

        {/* Newsletter Section (Kiri Bawah) */}
        <div className={styles.newsletter}>
          <p>Stay updated with Coinspace!</p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              <FaEnvelope /> Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copy}>
        © {new Date().getFullYear()} Coinspace. All rights reserved.
      </div>
    </footer>
  );
}