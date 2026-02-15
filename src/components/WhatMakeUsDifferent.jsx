import { motion } from "framer-motion";

export default function WhatMakesUsDifferent() {
  const points = [
    "We create strategy before content",
    "We focus on business growth, not just engagement",
    "We understand audience psychology",
    "We maintain consistency & professionalism",
    "We treat every brand like our own"
  ];

  return (
    <section className="w-full bg-white px-2 sm:px-4 md:px-10 lg:px-12 py-10 md:py-16">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-8">
            What Makes Us Different?
          </h2>
        </motion.div>

        {/* Points List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
              className="flex items-start gap-4 bg-primary rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">✓</span>
              </div>
              <p className="font-body text-lg md:text-xl text-white leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-primary/10 rounded-2xl px-8 py-4">
            <p className="font-body text-lg md:text-xl text-dark leading-relaxed font-semibold">
              We don't believe in shortcuts.
            </p>
            <p className="font-heading text-xl md:text-2xl font-bold text-primary mt-1">
              We believe in smart, structured growth.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}