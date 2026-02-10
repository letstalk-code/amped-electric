"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Flickering Lights & Random Outages",
    description:
      "You shouldn't have to wonder if your lights will stay on. Flickering and tripping breakers are warning signs of serious wiring issues lurking behind your walls.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Outdated Electrical Panels",
    description:
      "Homes over 20 years old often have panels that can't handle modern electrical loads. This isn't just inconvenient — it's a fire hazard your family lives with daily.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Electricians Who Don't Show Up",
    description:
      "You've taken the day off work, waited around for hours, and they never came. Or worse — they showed up, did a sloppy job, and disappeared when problems returned.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Surprise Bills & Hidden Costs",
    description:
      "A \"quick fix\" turns into a four-figure invoice. Without upfront pricing, you're left guessing what the final cost will be until it's too late.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Pain() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-bold text-brand-red uppercase tracking-wider">
            Sound Familiar?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-dark leading-tight">
            Your Home&apos;s Electrical Problems
            <span className="text-brand-red"> Won&apos;t Fix Themselves.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-text leading-relaxed">
            Every day you wait, these issues get worse — and more expensive to fix.
          </p>
        </motion.div>

        {/* Pain point cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-xl border border-gray-100 bg-white p-8 transition-all hover:shadow-xl hover:shadow-brand-red/5 hover:border-brand-red/20 hover:-translate-y-1"
            >
              {/* Diagonal accent stripe */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-xl">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-red/5 rotate-45" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark">{point.title}</h3>
                </div>
                <p className="text-gray-text leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
