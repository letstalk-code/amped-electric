"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mike & Sarah Johnson",
    location: "Hernando County",
    quote:
      "We had an outdated panel that kept tripping. Amped Electric upgraded our entire panel in one day. Professional, on time, and the price was exactly what they quoted. No surprises.",
    rating: 5,
    service: "Panel Upgrade",
  },
  {
    name: "Linda Patterson",
    location: "Spring Hill",
    quote:
      "After calling three electricians who never showed up, I found Amped Electric. They were at my door the next morning. Fixed my kitchen outlets and even spotted a potential fire hazard in my attic. They saved us.",
    rating: 5,
    service: "Electrical Repair",
  },
  {
    name: "Robert & Diana Chen",
    location: "Brooksville",
    quote:
      "We needed a complete rewire for our 1970s home. Amped Electric gave us a clear price, stuck to the timeline, and their crew was respectful of our space. Our home finally feels safe.",
    rating: 5,
    service: "Whole-Home Rewiring",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Floating geometric accent */}
      <div className="absolute top-20 -left-10 w-40 h-40 border border-brand-red/5 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 -right-10 w-32 h-32 bg-brand-yellow/5 rotate-12 hidden lg:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-bold text-brand-red uppercase tracking-wider">
            What Homeowners Say
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-dark leading-tight">
            Real Results from
            <span className="text-brand-red"> Real Families.</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-light rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Quote mark */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-brand-red/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-dark leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-text">
                    {testimonial.service} &bull; {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
