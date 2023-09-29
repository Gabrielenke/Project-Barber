"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/assets/export";
import Image from "next/image";
import ScrollSlider from "./ScrollSlider";
import ActionButton from "./ActionButton";

const Navbar = () => {
  const sections = ["home", "services", "about", "contact", "shop"];

  const [activeSection, setActiveSection] = useState(sections[0]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, options);

    sectionRefs.current = sections.map((section) =>
      document.getElementById(section),
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sections]);

  const handleScrollY = () => {
    if (window.scrollY > window.innerHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  return (
    <>
      <ScrollSlider />
      <header
        className={`fixed left-1/2 top-5 z-50 flex w-[80vw] -translate-x-1/2 items-center justify-between rounded-full px-16 py-4 text-white backdrop-blur-md ${
          scrolled && "backdrop-blur-lg"
        }`}
      >
        <nav className="flex items-center">
          <Link href="/">
            <Image className="h-10 w-10" src={Logo} alt="Logo" />
          </Link>
        </nav>
        <nav className="hidden items-center gap-10 lg:flex">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`z-40 border-b-2 border-solid font-medium transition-all duration-300 hover:text-primary 
                  ${
                    activeSection === section.toLowerCase()
                      ? "border-primary text-primary"
                      : "border-transparent text-zinc-100"
                  }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
        <nav className="hidden items-center gap-5 lg:flex">
          <Link href="/">Brazil</Link>
          <Link href="/">
            <ActionButton
              className="rounded-lg border-2 border-solid border-primary !bg-primary/10"
              text="+55 19 xxxx-xxxx"
            />
          </Link>
        </nav>
        <button
          className="text-2xl focus:outline-none lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </header>
      {isMobileMenuOpen && (
        <nav className="fixed left-1/2 right-0 top-20 z-40 w-[80vw] -translate-x-1/2 rounded-lg  bg-white py-4 text-center lg:hidden">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`block py-2 hover:bg-gray-200 ${
                activeSection === section.toLowerCase() ? "font-bold" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          <nav className="flex items-center justify-around px-4">
            <Link href="/">Brazil</Link>
            <Link className="flex items-center" href="/">
              <ActionButton
                className="rounded-lg border-2 border-solid border-primary !bg-primary/10"
                text="+55 19 xxxx-xxxx"
              />
            </Link>
          </nav>
        </nav>
      )}
    </>
  );
};

export default Navbar;
