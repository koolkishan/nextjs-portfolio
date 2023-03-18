import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

function Navbar() {
  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];
  return (
    <nav>
      <div className="brand">
        <Link href="kishansheth.com">
          <Logo />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="nav-items-list">
          {sectionLinks.map(({ name, link }) => (
            <li key={name} className="nav-items-list-item">
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
        <div className="nav-items-button">
          <Button text="Resume" link="http://localhost:3000/resume.pdf" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
