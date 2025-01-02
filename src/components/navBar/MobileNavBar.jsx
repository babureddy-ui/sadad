import React, { useState } from 'react';
import styles from '../MobilePages/Mobile.module.css';
import Image from 'next/image';

const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <div
        style={{
          height: "2.3rem",
          width: "9rem",
          position: "relative",
          margin: "0rem 10rem 0 0rem",
        }}
      >
        <Image
          src="/assets/NavigationBar/Doroki-logo1.svg"
          alt="Doroki logo"
          fill
        />
      </div>

      {isMenuOpen && (
        <div className={styles.menu}>
          <a href="#" className={styles.menuItem}>Home</a>
          <a href="#" className={styles.menuItem}>Privacy Policy</a>
          <a href="#" className={styles.menuItem}>Terms of Service</a>
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
