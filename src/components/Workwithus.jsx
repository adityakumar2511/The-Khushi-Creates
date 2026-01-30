import { motion } from "framer-motion";
import {
  FaRocket,
  FaShoppingCart,
  FaStore,
  FaBriefcase,
  FaCalendarCheck,
  FaPhoneAlt,
  FaFileAlt,
  FaPlayCircle,
} from "react-icons/fa";

export default function Workwithus() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-16 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
            Partner with Prayagraj’s Fastest-Growing Digital Agency
          </h2>
          <p className="mt-4 font-body text-dark text-md">
            Perfect for startups, e-commerce brands, local shops, and B2B
            companies ready to scale.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* WHO WE SERVE (Left → Right) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-10 shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
          >
            <h3 className="font-heading text-xl font-semibold text-white mb-8">
              Who We Serve
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaRocket className="text-dark text-lg mt-1" />
                <p className="font-body text-white/80 text-md">
                  <span className="font-semibold text-white">Startups:</span>{" "}
                  SEO + social media to build early traction
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaShoppingCart className="text-dark text-lg mt-1" />
                <p className="font-body text-white/80 text-md">
                  <span className="font-semibold text-white">E-commerce:</span>{" "}
                  High-ROI PPC campaigns that convert
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaStore className="text-dark text-lg mt-1" />
                <p className="font-body text-white/80 text-md">
                  <span className="font-semibold text-white">Local Shops:</span>{" "}
                  Geo-targeted ads for footfall & leads
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaBriefcase className="text-dark text-lg mt-1" />
                <p className="font-body text-white/80 text-md">
                  <span className="font-semibold text-white">B2B:</span>{" "}
                  LinkedIn ads + email outreach for deal flow
                </p>
              </div>
            </div>
          </motion.div>

          {/* ONBOARDING (Right → Left) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-dark rounded-2xl p-10 shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
          >
            <h3 className="font-heading text-xl font-semibold text-white mb-8">
              Onboarding in 7 Days
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-primary text-lg mt-1" />
                <p className="font-body text-white/80 text-md">
                  <span className="font-semibold text-white">
                    Free 30-min call:
                  </span>{" "}
                  Strategy discussion + audit
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaFileAlt className="text-primary text-lg mt-1" />
                <p className="font-body text-white/80 text-md">
                  <span className="font-semibold text-white">
                    Custom proposal:
                  </span>{" "}
                  Shared within 24 hours
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaPlayCircle className="text-primary text-lg mt-1" />
                <p className="font-body text-white/80 text-md">
                  <span className="font-semibold text-white">
                    Campaigns live:
                  </span>{" "}
                  Week 1 after approval
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaCalendarCheck className="text-primary text-lg mt-1" />
                <p className="font-body text-white/80 text-md">
                  <span className="font-semibold text-white">
                    Weekly optimization:
                  </span>{" "}
                  Continuous performance improvements
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
