import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../assets/AlphaBlack.png";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

const Footer = () => {

  const categories = [
    { name: "Graphic Design", logo: "/service-1.svg" },
    { name: "Digital Marketing", logo: "/service-2.svg" },
    { name: "Writing & Translation", logo: "/service-3.svg" },
    { name: "Video & Animation", logo: "/service-4.svg" },
    { name: "Music & Audio", logo: "/service-5.svg" },
    { name: "Programming & Tech", logo: "/service-6.svg" },
    { name: "Business", logo: "/service-7.svg" },
    { name: "Lifestyle", logo: "/service-8.svg" },
    { name: "Data", logo: "/service-9.svg" },
    { name: "Photography", logo: "/service-10.svg" },
  ];
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
  const data = [
    {
      headerName: "Categories",
      links: [
        ...categories.map(({ name }) => ({
          name,
          link: `/search?category=${name}`,
        })),
      ],
    },
    {
      headerName: "About",
      links: [
        { name: "Careers", link: "#" },
        { name: "Press & News", link: "#" },
        { name: "Privacy Policy", link: "#" },
        { name: "Terms of Service", link: "#" },
      ],
    },
    {
      headerName: "Support",
      links: [
        { name: "Help & Support", link: "#" },
        { name: "Trust & Safety", link: "#" },
      ],
    },
    {
      headerName: "Community",
      links: [
        { name: "Success Stories", link: "#" },
        { name: "Events", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Influencers", link: "#" },
        { name: "Photography", link: "#" },
        { name: "Music", link: "#" },
        { name: "Invite a Friend", link: "#" },
        { name: "Developers", link: "#" },
        { name: "Community Standards", link: "#" },
      ],
    },
    {
      headerName: "Contact",
      links: [
        { name: "23 Sunflux Street", link: "#" },
        { name: "Bardale Village", link: "#" },
        { name: "7580", link: "#" },
        { name: "Cape Town", link: "#" },
        { name: "+27 74 883 5699", link: "#" },
        { name: "nomi@tech", link: "#" },
      ],
    }
  ];

  return (
    <footer className="w-full pb-1 sm:pb-[100px] sm:mb-10">
      <div className="flex flex-col w-full">
        <div className="py-4">
          <div className="flex bg-bg_alt items-center justify-center w-full">
              <div className="h-[140px] flex items-center justify-evenly w-[90%]">
                <div className="flex gap-3 sm:items-center">
                  <img className="hidden sm:block w-8 h-8 object-cover" src={newsletter} alt="newsletter" />
                  <h2 className="mb-2 sm:mb-o text-white">Sign up for Our Newsletter</h2>
                </div>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      className="bg-bg_cl"
                      placeholder="Your Email Address"
                      aria-label="Your Email Address"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text p-2 bg-bg_cl" id="basic-addon2">
                      Subscribe
                    </span>
                  </div>
              </div>
          </div>
        <div className="">
          <div className="w-full py-16">
            <div className="sm:flex ml-4 sm:ml-0 justify-evenly">
                {data.map(({ headerName, links }) => {
                  return (
                    <li key={headerName} className="flex flex-col">
                      <span className="font-bold mb-3">{headerName}</span>
                      <ul className="flex flex-col gap-2">
                        {links.map(({ name, link }) => (
                          <li key={name} className="text-white">
                            <Link href={link}>{name}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
            </div>
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
        </div>
          <div className="">
            <div className="row">
              <div className="">
                <p className="text-center mb-0 text-white">
                  &copy; {new Date().getFullYear()} - Developed by Nomi
                </p>
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
