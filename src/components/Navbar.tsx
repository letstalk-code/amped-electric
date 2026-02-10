"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="animate-flash">
                <polygon points="20,2 10,18 17,18 14,34 26,16 19,16" fill="#FFD700" stroke="#CC0000" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-xl font-black tracking-tight ${scrolled ? "text-brand-red" : "text-white"}`}>
                AMPED
              </span>
              <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${scrolled ? "text-dark" : "text-brand-yellow"}`}>
                Electric, LLC
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-yellow ${
                  scrolled ? "text-dark" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-md bg-brand-red px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/25"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              } ${scrolled ? "bg-dark" : "bg-white"}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              } ${scrolled ? "bg-dark" : "bg-white"}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              } ${scrolled ? "bg-dark" : "bg-white"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-dark hover:text-brand-red transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center rounded-md bg-brand-red px-5 py-3 text-sm font-bold text-white hover:bg-brand-red-dark transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
