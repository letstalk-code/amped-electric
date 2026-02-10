"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-electrician.jpg')" }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-dark/75" />

      {/* Geometric grid overlay */}
      <div className="absolute inset-0 geometric-grid opacity-30" />

      {/* Diagonal accent shape */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/10"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      {/* Floating geometric elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] w-20 h-20 border-2 border-brand-yellow/20 rotate-45 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[25%] w-12 h-12 bg-brand-red/10 rotate-12 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] left-[8%] w-16 h-16 border border-brand-yellow/10 rounded-full hidden lg:block"
      />

      {/* Lightning bolt background accent */}
      <svg
        className="absolute right-[5%] top-1/2 -translate-y-1/2 w-64 h-96 opacity-[0.04] hidden lg:block"
        viewBox="0 0 100 160"
        fill="currentColor"
      >
        <polygon points="55,0 25,70 48,70 38,160 78,80 52,80" className="text-brand-yellow" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-brand-yellow animate-pulse" />
            <span className="text-xs font-semibold text-brand-yellow uppercase tracking-wider">
              Licensed &amp; Insured &bull; Award-Winning Service
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight"
          >
            Your Home&apos;s
            <br />
            Electrical System
            <br />
            <span className="text-brand-yellow">Deserves Better.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed"
          >
            Stop worrying about flickering lights, outdated panels, and unreliable
            electricians. Amped Electric delivers expert service that keeps your
            family safe and your home powered right.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center rounded-md bg-brand-red px-8 py-4 text-base font-bold text-white transition-all hover:bg-brand-red-dark hover:shadow-xl hover:shadow-brand-red/25 hover:-translate-y-0.5"
            >
              Get Your Free Quote
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="tel:+13523983363"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all hover:border-brand-yellow hover:text-brand-yellow"
            >
              <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (352) 398-3363
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-14 flex flex-wrap items-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>4.9 Rating</span>
            </div>
            <div className="h-4 w-px bg-gray-700" />
            <span>500+ Homes Serviced</span>
            <div className="h-4 w-px bg-gray-700 hidden sm:block" />
            <span className="hidden sm:block">Same-Day Service Available</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom diagonal edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: "polygon(0 100%, 100% 40%, 100% 100%)" }} />
    </section>
  );
}
