import { motion } from "framer-motion";
import { FaRocket, FaEye } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="w-full bg-primary px-2 sm:px-4 md:px-10 lg:px-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark">
                Our Mission
              </h3>
            </div>

            <p className="font-body text-base md:text-lg text-dark leading-relaxed">
              Our mission is to help businesses transform their online presence into a 
              powerful growth engine.
            </p>

            <p className="font-body text-base md:text-lg text-dark leading-relaxed mt-4">
              We aim to bridge the gap between creativity and performance marketing — 
              so brands not only look good, but grow consistently.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center">
                <FaEye className="text-white text-2xl" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark">
                Our Vision
              </h3>
            </div>

            <p className="font-body text-base md:text-lg text-dark leading-relaxed">
              To become a trusted marketing partner for brands that are serious about 
              scaling and building long-term digital authority.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}