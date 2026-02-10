"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 geometric-grid" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5"
        style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 20% 100%)" }}
      />

      {/* Lightning bolt watermark */}
      <svg
        className="absolute left-[10%] top-1/2 -translate-y-1/2 w-40 h-64 opacity-[0.03] hidden lg:block"
        viewBox="0 0 100 160"
        fill="currentColor"
      >
        <polygon points="55,0 25,70 48,70 38,160 78,80 52,80" className="text-brand-yellow" />
      </svg>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-brand-yellow animate-pulse" />
            <span className="text-xs font-semibold text-brand-yellow uppercase tracking-wider">
              Free Estimates &bull; No Obligation
            </span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight">
            Ready to Get Your
            <br />
            Electrical Problems
            <br />
            <span className="text-brand-yellow">Solved for Good?</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t wait for a small issue to become a big emergency. Get a free quote
            from a licensed electrician who will treat your home like their own.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+15551234567"
              className="group inline-flex items-center justify-center rounded-md bg-brand-red px-10 py-4 text-lg font-bold text-white transition-all hover:bg-brand-red-dark hover:shadow-xl hover:shadow-brand-red/25 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <svg className="mr-3 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (555) 123-4567
            </a>
            <span className="text-gray-500 font-medium hidden sm:block">or</span>
            <a
              href="mailto:info@ampedelectric.com"
              className="group inline-flex items-center justify-center rounded-md border-2 border-white/20 px-10 py-4 text-lg font-bold text-white transition-all hover:border-brand-yellow hover:text-brand-yellow w-full sm:w-auto"
            >
              <svg className="mr-3 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email Us
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Most quotes delivered within 24 hours. Same-day emergency service available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
