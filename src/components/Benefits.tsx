"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Panel Upgrades",
    description: "Upgrade your outdated electrical panel to safely handle your home's modern power demands.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: "Whole-Home Rewiring",
    description: "Complete rewiring for older homes with outdated or dangerous aluminum and knob-and-tube wiring.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Lighting Design",
    description: "Custom interior and exterior lighting solutions that transform your space and boost curb appeal.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L12 4.37m-5.68 5.7h11.8M4.26 19.72A9.96 9.96 0 0112 2.04a9.96 9.96 0 017.74 17.68" />
      </svg>
    ),
    title: "EV Charger Installation",
    description: "Level 2 EV charger installation so you can charge your electric vehicle overnight at home.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Safety Inspections",
    description: "Comprehensive electrical inspections that identify hazards before they become emergencies.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L12 4.37m-5.68 5.7h11.8M4.26 19.72A9.96 9.96 0 0112 2.04a9.96 9.96 0 017.74 17.68" />
      </svg>
    ),
    title: "Emergency Repairs",
    description: "When the power goes out or something sparks, we're there fast with same-day emergency service.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Benefits() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-light overflow-hidden">
      {/* Diagonal top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }}
      />

      {/* Geometric accent */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-brand-yellow/10 rotate-45 hidden lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-bold text-brand-red uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-dark leading-tight">
            Expert Electrical Solutions,
            <span className="text-brand-red"> Zero Guesswork.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-text leading-relaxed">
            From quick repairs to complete home rewiring, we handle it all with precision and transparency.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-transparent hover:border-brand-yellow/30"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-brand-red to-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="w-14 h-14 rounded-lg bg-dark flex items-center justify-center text-brand-yellow mb-5 group-hover:bg-brand-red group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">{service.title}</h3>
              <p className="text-gray-text leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
