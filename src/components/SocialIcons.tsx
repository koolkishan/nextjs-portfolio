import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

function SocialIcons() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://www.github.com" },
    { name: "Youtube", icon: <FiYoutube />, link: "" },
    { name: "LinkedIn", icon: <FiLinkedin />, link: "" },
    { name: "Instagram", icon: <FiInstagram />, link: "" },
    { name: "Twitter", icon: <FiTwitter />, link: "" },
  ];
  return (
    <div>
      <ul>
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name}>
            <Link href={link}>{icon}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialIcons;
