import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {

  const socialLinks = [
    { name: "Github", icon: <AiFillGithub />, link: "https://github.com/Yonela-Johannes" },
    {
      name: "LinkedIn",
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/yonela-johannes/",
    },
    {
      name: "Facebook",
      icon: <AiFillFacebook />,
      link: "https://www.facebook.com/JohannesYonela",
    },
    {
      name: "Instagram",
      icon: <AiFillInstagram />,
      link: "https://www.instagram.com/yonelajohannes/",
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
                    className="text-[28px] p-1 text-bg_light hover:text-white hover:bg-green rounded-full transition-all duration-300"
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
