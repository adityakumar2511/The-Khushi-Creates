import { motion } from "framer-motion";
import {
  FaSearch,
  FaLightbulb,
  FaPencilAlt,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

function useIsMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

export default function ProcessSection() {
  const isMobile = useIsMobile();

  const steps = [
    { number: "1️⃣", icon: FaSearch,    title: "Understand Your Business & Goals",    color: "bg-dark",    delay: 0.1 },
    { number: "2️⃣", icon: FaLightbulb, title: "Build a Custom Growth Strategy",      color: "bg-primary", delay: 0.2 },
    { number: "3️⃣", icon: FaPencilAlt, title: "Create High-Quality Content",          color: "bg-dark",    delay: 0.3 },
    { number: "4️⃣", icon: FaChartLine, title: "Optimize Using Analytics",            color: "bg-primary", delay: 0.4 },
    { number: "5️⃣", icon: FaRocket,    title: "Scale with Performance Marketing",    color: "bg-dark",    delay: 0.5 },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-base px-2 sm:px-4 md:px-10 lg:px-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
            OUR PROCESS
          </h2>
          <p className="mt-4 font-body text-dark text-lg">
            No shortcuts. Just smart growth.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">

          {/* Curved Line SVG — desktop only */}
          <svg
            className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 pointer-events-none hidden md:block"
            style={{ zIndex: 0 }}
          >
            <motion.path
              d="M 50% 80 Q 30% 220, 50% 360 T 50% 720 T 50% 1080"
              stroke="#ff624f"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10 5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Steps */}
          <div className="relative space-y-16 md:space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              // Mobile: fade + slide up | Desktop: alternating left/right
              const stepVariant = {
                hidden: isMobile
                  ? { opacity: 0, y: 40 }
                  : { opacity: 0, x: isEven ? -50 : 50 },
                visible: { opacity: 1, x: 0, y: 0 },
              };

              return (
                <motion.div
                  key={index}
                  variants={stepVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: isMobile ? 0 : step.delay,
                    ease: "easeOut",
                  }}
                  className={`flex items-center gap-6 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />

                  {/* Circle with Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`relative ${step.color} w-16 h-16 rounded-full flex items-center justify-center shadow-md z-10 flex-shrink-0`}
                  >
                    <Icon className="text-white text-2xl" />
                    <div className={`absolute inset-0 ${step.color} rounded-full opacity-40 animate-pulse`} />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                    className={`flex-1 bg-[#E2ECB1] rounded-2xl p-6 md:p-8 shadow-lg ${
                      isEven ? "md:text-right" : "md:text-left"
                    } text-center max-w-md`}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${
                      isEven ? "md:justify-end" : "md:justify-start"
                    } justify-center`}>
                      <span className="text-xs font-semibold text-base bg-primary p-2 pl-4 pr-4 border rounded-full font-body uppercase tracking-wider">
                        STEP {index + 1}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg md:text-xl font-bold text-dark leading-tight">
                      {step.title}
                    </h3>

                    {/* Decorative line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60px" }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: isMobile ? 0.1 : step.delay + 0.3 }}
                      className={`h-1 ${step.color} rounded-full mt-4 ${
                        isEven ? "md:ml-auto" : "md:mr-auto"
                      } mx-auto`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-block bg-primary rounded-2xl shadow-2xl px-10 py-6 text-white">
            <p className="font-heading text-md md:text-xl font-bold">
              No shortcuts. Just smart growth.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}