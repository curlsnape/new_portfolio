import React, { useRef } from "react";
import { NavLink } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linkRefs = useRef([]);
  const ctaRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });


      gsap.from(logoRef.current, {
        x: -20,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      });

      gsap.from(linkRefs.current, {
        y: -15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.5,
          ease: "back.out(1.7)",
        }
      );
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className=" w-full z-50 px-6 py-3"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <NavLink
          ref={logoRef}
          to="/"
          className="text-xl font-semibold no-underline"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white mr-2">
            A
          </span>
          rc.
        </NavLink>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              ref={(el) => (linkRefs.current[index] = el)}
              className={({ isActive }) =>
                `no-underline ${
                  isActive ? "text-black font-medium" : "text-gray-500"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <NavLink
          ref={ctaRef}
          to="/contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black text-white no-underline"
        >
          Let's talk ↗
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;