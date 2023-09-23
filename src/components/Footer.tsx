import React from "react";
import { Link } from "react-router-dom";

import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

const Footer = () => {

  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://www.github.com" },
    {
      name: "Youtube",
      icon: <FiYoutube />,
      link: "https://www.youtube.com/KishanSheth21/",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/koolkishan/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/koolkishansheth",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/koolkishansheth",
    },
  ];

  return (
    <footer className="w-full pb-1 lh:mb-10">
      <div className="flex flex-col w-full">
          <div className="w-full lg:py-5">
            <div className="mt-8 flex items-center text-center justify-center">
              <ul className="flex gap-5">
                {socialLinks.map(({ icon, link, name }) => (
                  <li
                    key={name}
                    className="text-[26px] p-1 text-bg_light hover:text-white hover:bg-green rounded-full transition-all duration-300"
                  >
                    <Link href={link}>{icon}</Link>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
