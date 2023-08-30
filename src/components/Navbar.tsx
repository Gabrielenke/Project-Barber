"use client";

import Link from "next/link";
import ActionButton from "./ActionButton";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const Navlinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/",
      title: "About",
    },
    {
      href: "/",
      title: "Services",
    },
    {
      href: "/",
      title: "Shop",
    },
    {
      href: "/",
      title: "Contact",
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-16 py-4 text-white backdrop-blur-3xl ${
        scrolled && "bg-gray-600/50"
      }`}
    >
      <nav className="flex items-center">
        <Link href="/">LOGO</Link>
      </nav>
      <nav className="flex items-center gap-5">
        {Navlinks.map((link) => {
          return (
            <Link key={link.title} href={link.href}>
              {link.title}
            </Link>
          );
        })}
      </nav>
      <nav className="flex items-center gap-5">
        <Link href="/">Brazil</Link>
        <Link href="/">
          <ActionButton
            className="border-2 border-solid border-primary !bg-primary/10"
            text="+55 19 xxxx-xxxx"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
