import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function FoundersNote() {
  return (
    <section className="w-full bg-primary px-2 sm:px-4 md:px-10 lg:px-12 py-10 md:py-16">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
            Founder's Note
          </h2>
        </motion.div>

        {/* Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative"
        >
          {/* Quote Icon */}
          <div className="absolute -top-6 left-8 w-12 h-12 bg-dark rounded-full flex items-center justify-center">
            <FaQuoteLeft className="text-white text-xl" />
          </div>

          {/* Content */}
          <div className="mt-4 space-y-4">
            <p className="font-body text-lg md:text-xl text-dark leading-relaxed">
              The Khushi Creates started with a simple vision —
            </p>

            <p className="font-body text-base md:text-lg text-dark leading-relaxed">
              To help businesses stop struggling with inconsistent social media and start 
              building a strong digital identity.
            </p>

            <p className="font-body text-base md:text-lg text-dark leading-relaxed font-semibold">
              Every brand has potential.
              <br />
              It just needs the right strategy and execution.
            </p>

            <p className="font-body text-base md:text-lg text-dark leading-relaxed">
              At The Khushi Creates, we are committed to delivering both.
            </p>
          </div>

          {/* Signature or Name (Optional) */}
          <div className="mt-4 pt-6 border-t-2 border-primary/20">
            <p className="font-heading text-xl md:text-2xl font-bold text-primary">
              — The Khushi Creates Team
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}