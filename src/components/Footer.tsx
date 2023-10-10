import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Share from "./share/Share";

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
    <footer className="w-full pb-10">
      <div className="flex items-center gap-20 justify-center flex-col w-full">
          <div className="flex items-center justify-evenly w-full lg:py-5">
            <div className="mt-8 flex flex-col md:flex-row items-center gap-20 text-center justify-center">
              <ul className="flex items-center gap-5 h-min bg-primary py-3 px-2 rounded-full w-min">
              <p className="text-[16px]">Follow:</p>
                {socialLinks.map(({ icon, link, name }) => (
                  <li
                    key={name}
                    className="cursor-pointer bg-secondary border border-lighter text-white rounded-full p-2 hover:bg-green duration-300"
                  >
                    <Link href={link}>{icon}</Link>
                  </li>
                ))}
              </ul>
            <Share />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
