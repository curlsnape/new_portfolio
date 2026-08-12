import React, { useRef, useState } from "react";
import { NavLink } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowUpRight, Menu, X } from "lucide-react";

gsap.registerPlugin(useGSAP);

const links = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact",  to: "/contact" },
];

const Navbar = () => {
  const navRef        = useRef(null);
  const logoRef       = useRef(null);
  const linkRefs      = useRef([]);
  const ctaRef        = useRef(null);
  const mobileMenuRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -40, opacity: 0, duration: 0.7, ease: "power3.out",
      });
      gsap.from(logoRef.current, {
        x: -20, opacity: 0, duration: 0.5, delay: 0.2,
      });
      gsap.from(linkRefs.current, {
        y: -15, opacity: 0, scale: 1.3, stagger: 0.1, delay: 0.3,
        duration: 0.5, ease: "power3.out",
      });
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.5, ease: "back.out(1.7)" }
      );

      const cta = ctaRef.current;
      cta.addEventListener("mouseenter", () =>
        gsap.to(cta, { scale: 1.1, duration: 0.25, ease: "power2.out" })
      );
      cta.addEventListener("mouseleave", () =>
        gsap.to(cta, { scale: 1, duration: 0.25, ease: "power2.out" })
      );
    },
    { scope: navRef }
  );

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
      gsap.from(".mobile-link", {
        y: 12, opacity: 0, stagger: 0.07, duration: 0.35,
        delay: 0.1, ease: "power2.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0, y: -10, duration: 0.25, ease: "power2.in",
        onComplete: () => setMenuOpen(false),
      });
    }
  };

  return (
    <nav ref={navRef} className="w-full z-50 px-4 relative">
      <div className="max-w-7xl mx-auto h-[10vh] flex items-center justify-between">
        <NavLink
          ref={logoRef}
          to="/"
          className="text-xl font-semibold flex gap-1 items-center no-underline"
          onClick={() => menuOpen && setMenuOpen(false)}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white mr-2">
            A
          </span>
          <h4 className="font-medium text-base">Akshay Sawant</h4>
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              ref={(el) => (linkRefs.current[index] = el)}
              className={({ isActive }) =>
                `no-underline ${isActive ? "text-black font-medium" : "text-gray-500"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          ref={ctaRef}
          to="/contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black text-white no-underline"
        >
          Let's talk <ArrowUpRight size={16} />
        </NavLink>

        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-black text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg z-50 px-6 py-6 flex flex-col gap-5"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `mobile-link text-lg font-medium no-underline ${isActive ? "text-black" : "text-gray-500"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mobile-link mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-black text-white no-underline w-fit"
          >
            Let's talk <ArrowUpRight size={16} />
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
