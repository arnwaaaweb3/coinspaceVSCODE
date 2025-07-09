'use client';

//Header-about.tsx
{/*Directorinya ada di /src/app/about/components/Header-about.tsx*/}

import React from 'react';
import styles from '../styles/About.module.css';

const HeaderAbout: React.FC = () => {
  return (
    <img
      src="/header-about.svg"
      alt="Header About"
      className={styles.headerImage}
    />
  );
};

export default HeaderAbout;
