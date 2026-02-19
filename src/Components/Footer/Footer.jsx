import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} py-6 text-center`}>
      <p className="text-sm sm:text-base opacity-80">
        © {year} <span className="font-semibold">Ayush Agrawal</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;