'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles/About.module.css';
import HeaderAbout from './components/Header-about';
import {
  FaBook,
  FaBullseye,
  FaBinoculars,
  FaUsers,
  FaBriefcase,
  FaLightbulb,
  FaPhone,
  FaMap,
} from 'react-icons/fa';

function HomeContent() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) setActiveId(id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.fadeInSection');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const navLinks = [
    { href: '#coinspace', label: 'Coinspace', icon: <FaBook /> },
    { href: '#mission', label: 'Mission', icon: <FaBullseye /> },
    { href: '#vision', label: 'Vision', icon: <FaBinoculars /> },
    { href: '#team', label: 'Team', icon: <FaUsers /> },
    { href: '#service', label: 'Service', icon: <FaBriefcase /> },
    { href: '#usecase', label: 'Use-Case', icon: <FaLightbulb /> },
    { href: '#roadmap', label: 'Roadmap', icon: <FaMap /> },
    { href: '#contact', label: 'Contact', icon: <FaPhone /> },
  ];

  return (
    <div className={styles.contentWrapper}>
      <aside className={styles.sidebar}>
        <ul>
          {navLinks.map(({ href, label, icon }) => {
            const id = href.replace('#', '');
            return (
              <li key={id}>
                <a
                  href={href}
                  className={activeId === id ? styles.active : ''}
                >
                  <span className={styles.iconWithGap}>{icon}</span>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className={styles.mainContent}>
        <section id="coinspace" className="fadeInSection">
          <h2>Coinspace: Decentralized Learning App</h2>
          <p>
            Coinspace is a cutting-edge decentralized learning platform, designed to accelerate education
            and distribute knowledge and information in all fairness. We believe that education should be accessible
            to anyone regardless of their background, and we are committed to providing a platform that empowers
            individuals to learn and grow, based on the principles of decentralization.
          </p>
        </section>
        <section id="mission" className="fadeInSection"><h2>Mission</h2></section>
        <section id="vision" className="fadeInSection"><h2>Vision</h2></section>
        <section id="team" className="fadeInSection"><h2>Team</h2></section>
        <section id="service" className="fadeInSection"><h2>Service</h2></section>
        <section id="usecase" className="fadeInSection"><h2>Use-Case</h2></section>
        <section id="roadmap" className="fadeInSection"><h2>Roadmap</h2></section>
        <section id="contact" className="fadeInSection"><h2>Contact</h2></section>
      </main>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <HeaderAbout />
      <HomeContent />
    </div>
  );
}
