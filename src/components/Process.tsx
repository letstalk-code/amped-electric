"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Request Your Free Quote",
    description:
      "Tell us about your electrical needs. Fill out our quick form or give us a call — we'll respond within hours, not days.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get a Clear, Upfront Price",
    description:
      "We'll assess the job and give you a straightforward price with no hidden fees. You'll know exactly what you're paying before any work begins.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "We Handle Everything",
    description:
      "Our licensed electricians arrive on time, do the job right the first time, clean up after themselves, and leave your home better than we found it.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-dark overflow-hidden">
      {/* Geometric grid */}
      <div className="absolute inset-0 geometric-grid" />

      {/* Diagonal accent */}
      <div
        className="absolute top-0 left-0 w-1/3 h-full bg-brand-yellow/[0.03]"
        style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-bold text-brand-yellow uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Three Simple Steps to
            <span className="text-brand-yellow"> Peace of Mind.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            No runaround. No guessing. Just clear communication and quality work.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%+1px)] w-full h-px">
                  <div className="w-full h-px bg-gradient-to-r from-brand-yellow/40 to-transparent" />
                </div>
              )}

              <div className="relative bg-dark-card border border-white/5 rounded-xl p-8 hover:border-brand-yellow/20 transition-all hover:-translate-y-1">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-black text-brand-yellow/20 group-hover:text-brand-yellow/40 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
