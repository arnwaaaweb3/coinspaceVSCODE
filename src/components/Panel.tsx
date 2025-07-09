'use client';

import Image from 'next/image';
import styles from '../styles/Panel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { ConnectButton } from '@mysten/wallet-kit';

export default function Panel() {
  const images = ['/panel1.svg', '/panel2.svg'];

  return (
    <div className={styles.panelWrapper}>
      <div className={styles.panelContainer}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className={styles.imageWrapper}>
                {index === 0 && (
                  <div className={styles.walletButtonContainer}>
                    <ConnectButton />
                    <p className={styles.walletNotice}>
                      By connecting wallet, you agree to our{' '}
                      <a href="/terms" className={styles.termsLink} target="_blank" rel="noopener noreferrer">
                        Terms and Conditions
                      </a>.
                    </p>
                  </div>
                )}
                <Image
                  src={src}
                  alt={`Panel ${index + 1}`}
                  layout="responsive"
                  width={1920}
                  height={640}
                  priority
                  className={styles.panelImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
