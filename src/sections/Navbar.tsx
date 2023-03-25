import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false);
    });
  }, []);

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
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
      </div>
    </nav>
  );
}

export default Navbar;
