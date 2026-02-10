"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Homes Serviced" },
  { value: "4.9", label: "Star Rating" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

const credentials = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Fully Licensed & Insured",
    description: "State-licensed electricians with full liability and workers' comp coverage for your protection.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-7.54 0" />
      </svg>
    ),
    title: "Award-Winning Service",
    description: "Voted Best Electrician by our community. Readers' Choice winner for quality and reliability.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Experienced Team",
    description: "Master electricians with decades of combined experience in residential electrical work.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Upfront Pricing",
    description: "You'll know the exact cost before we start. No hidden fees, no surprise charges — ever.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-light overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-bold text-brand-red uppercase tracking-wider">
              About Amped Electric
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-dark leading-tight">
              We Don&apos;t Just Fix Wires.
              <span className="text-brand-red"> We Protect Families.</span>
            </h2>
            <p className="mt-6 text-gray-text leading-relaxed">
              Amped Electric was built on a simple idea: homeowners in Brooksville and Hernando County deserve an electrician
              who shows up on time, does the job right, and charges a fair price. No excuses.
            </p>
            <p className="mt-4 text-gray-text leading-relaxed">
              Every member of our team is a licensed professional who takes pride in their
              craft. We treat your home like our own — because your family&apos;s safety isn&apos;t
              something we take lightly.
            </p>

            {/* Credentials grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {credentials.map((cred, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red">
                    {cred.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-sm">{cred.title}</h4>
                    <p className="text-xs text-gray-text mt-0.5 leading-relaxed">{cred.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats + Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Professional Photo */}
            <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
              <img
                src="/images/about-electrician.jpg"
                alt="Professional electrician at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
            </div>

            {/* Stats card */}
            <div className="relative bg-dark rounded-2xl p-10 overflow-hidden">
              {/* Geometric overlay */}
              <div className="absolute inset-0 geometric-grid opacity-50" />
              <div
                className="absolute top-0 right-0 w-2/3 h-full bg-brand-red/10"
                style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }}
              />

              <div className="relative grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl sm:text-5xl font-black text-brand-yellow">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Lightning bolt accent */}
              <svg
                className="absolute -bottom-4 -right-4 w-24 h-32 text-brand-yellow/10"
                viewBox="0 0 100 160"
                fill="currentColor"
              >
                <polygon points="55,0 25,70 48,70 38,160 78,80 52,80" />
              </svg>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center">
                <svg className="w-6 h-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-dark text-sm">Readers&apos; Choice</p>
                <p className="text-xs text-gray-text">Best Electrician Winner</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
