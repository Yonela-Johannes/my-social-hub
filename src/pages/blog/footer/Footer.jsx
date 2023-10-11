import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import avatar from '../../../assets/avatar.jpg'

const Footer = () => {
  return (
    <div className='mt-[50px] py-[20px] flex flex-col md:flex-row items-center justify-between px-2 md:px-0'>
        <div className={styles.info}>
          <div className={styles.logo}>
            <img className="rounded-full object-cover w-[50px] h-[50px]" src={avatar} alt="lama blog" width={50} height={50} />
            <h1 className='text-[16px] md:text-[24px]'>Yonela Johannes blog</h1>
          </div>
          <p className='mt-2 mb-4 font-thin'>
          🚀Let's code the future, one line at a time, while illuminating our minds with wisdom. Dive into my thoughts, discoveries, and musings, and together, let's craft a brighter tomorrow. 🌈Stay curious, stay inspired, and always keep coding!
          </p>
        </div>
        <div className='flex-1 flex gap-16 md:justify-end'>
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
            <a target="_blank" href="https://github.com/Yonela-Johannes">Github</a>
            <a target="_blank" href="https://www.facebook.com/JohannesYonela">Facebook</a>
            <a target="_blank" href="https://www.instagram.com/yonelajohannes">Instagram</a>
            <a target="_blank" href="https://www.linkedin.com/in/yonela-johannes/">LinkedIn</a>
          </div>
        </div>
      </div>
  );
};

export default Footer;
