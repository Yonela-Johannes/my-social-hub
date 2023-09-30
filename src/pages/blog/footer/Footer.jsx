import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import avatar from '../../../assets/avatar.jpg'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <img className="rounded-full object-cover w-[50px] h-[50px]" src={avatar} alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>Yonela Johannes blog</h1>
        </div>
        <p className={styles.desc}>
        🚀Let's code the future, one line at a time, while illuminating our minds with wisdom. Dive into my thoughts, discoveries, and musings, and together, let's craft a brighter tomorrow. 🌈Stay curious, stay inspired, and always keep coding!
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link to="/">Homepage</Link>
          <Link to="/blogs">Blog</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link to="/">Style</Link>
          <Link to="/">Fashion</Link>
          <Link to="/">Coding</Link>
          <Link to="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link to="/">Facebook</Link>
          <Link to="/">Instagram</Link>
          <Link to="/">LinkedIn</Link>
          <Link to="/">Tiktok</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
