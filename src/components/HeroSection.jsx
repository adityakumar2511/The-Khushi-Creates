import { motion } from "framer-motion";
import {
  FaChartLine,
  FaSearch,
  FaGlobe,
  FaUserCircle,
} from "react-icons/fa";
import heroImage from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section className="w-full bg-base flex items-center px-4 sm:px-6 md:px-16 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-dark">
            Take Your <span className="text-primary">Brand</span>
            <br className="hidden sm:block" />
            to New Heights
          </h1>

          <p className="font-body mt-5 text-md text-dark max-w-xl mx-auto md:mx-0 leading-relaxed">
            At Hacks4U, we combine tech expertise with creativity to deliver
            premium digital marketing services and IT solutions tailored to
            your business needs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-primary font-body hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition">
              Get Started
            </button>

            <button className="border font-body border-dark hover:border-primary text-dark px-6 py-3 rounded-lg font-semibold transition">
              Our Services
            </button>
          </div>

          <div className="mt-6 flex justify-center md:justify-start items-center gap-2 text-sm font-body text-dark/70">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
              ✓
            </span>
            Over 1k+ projects completed successfully
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <img
            src={heroImage}
            alt="Digital Marketing"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg"
          />

          {/* Floating Icons (hidden on very small screens) */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="hidden sm:flex absolute top-6 left-6 bg-white p-3 rounded-xl shadow-lg"
          >
            <FaSearch className="text-primary text-xl" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="hidden sm:flex absolute top-10 right-8 bg-white p-3 rounded-xl shadow-lg"
          >
            <FaUserCircle className="text-dark text-xl" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="hidden sm:flex absolute bottom-16 left-8 bg-white p-3 rounded-xl shadow-lg"
          >
            <FaChartLine className="text-primary text-xl" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3.8, repeat: Infinity }}
            className="hidden sm:flex absolute bottom-10 right-12 bg-white p-3 rounded-xl shadow-lg"
          >
            <FaGlobe className="text-dark text-xl" />
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-8 sm:-bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-xl px-4 sm:px-5 py-3 flex items-center gap-3"
          >
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
              ✓
            </span>
            <div>
              <p className="text-sm font-heading font-semibold text-dark">
                Here Innovation
              </p>
              <p className="text-xs font-body text-dark/60">
                Meets Execution
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
