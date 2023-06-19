import React from "react";
import styles from "../style/Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/" className={styles.link}>
            Design<span className={styles.dot}>.</span>
          </a>
        </div>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>home</li>
            <li className={styles.li}>services</li>
            <li className={styles.li}>portfolio</li>
            <li className={styles.li}>about</li>
          </ul>
        </nav>
      </div>
      <div className={styles.banner}>
        <p className={styles.p}>The Interior</p>
        <p className={styles.p}>Canvas</p>
        <a href="#ourproject" className={styles.btn}>
          View Our Work
        </a>
      </div>
      <div className={styles.overlay}></div>
    </header>
  );
}

export default Navbar;
