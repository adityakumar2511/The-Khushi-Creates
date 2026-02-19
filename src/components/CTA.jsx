import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ctaBg from "../assets/cta-bg.jpeg";

export default function CTA() {
  return (
    <section
      className="relative w-full overflow-x-hidden px-2 sm:px-4 md:px-10 lg:px-12 py-10 md:py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center text-white">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight"
        >
          Ready to Build a Powerful Online Presence?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-4 font-body text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Stop struggling with inconsistent growth.
          <br />
          Start building a brand that people trust — and buy from.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-8"
        >
          <a
            href="tel:+916387297711"
            className="bg-primary font-body hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold shadow-md transition text-base md:text-lg text-center inline-block"
          >
            Book a Free Strategy Call
          </a>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
        >
          <span className="text-2xl">✨</span>
          <p className="font-body text-sm md:text-base text-white/90">
            No commitment. Just real strategy.
          </p>
        </motion.div>

      </div>
    </section>
  );
}