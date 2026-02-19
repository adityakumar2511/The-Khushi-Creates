import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaChartLine, FaHeart } from "react-icons/fa";

function useIsMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 1024;
}

export default function HomeAbout() {
  const isMobile = useIsMobile();

  const leftVariant = {
    hidden: isMobile ? { opacity: 0, y: 40 } : { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const rightVariant = {
    hidden: isMobile ? { opacity: 0, y: 40 } : { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: FaRocket,
      bg: "bg-primary",
      title: "Clarity",
      desc: "Clear strategies that make sense for your business goals",
    },
    {
      icon: FaUsers,
      bg: "bg-dark",
      title: "Creativity",
      desc: "Content that captures attention and builds connection",
    },
    {
      icon: FaChartLine,
      bg: "bg-primary",
      title: "Confidence",
      desc: "Data-backed results you can trust and measure",
    },
    {
      icon: FaHeart,
      bg: "bg-dark",
      title: "Growth",
      desc: "Sustainable results that scale with your business",
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-[#E2ECB1] px-2 sm:px-4 md:px-10 lg:px-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE - Content */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight">
              ABOUT US
            </h2>

            <p className="mt-6 font-body text-lg md:text-xl text-dark leading-relaxed">
              The Khushi Creates was built with one mission —
            </p>

            <p className="mt-4 font-body text-base md:text-lg text-dark leading-relaxed">
              To help businesses grow online with clarity, creativity, and confidence.
            </p>

            <p className="mt-6 font-body text-base md:text-lg text-dark leading-relaxed">
              We don't just manage social media.
              <br />
              We position brands to stand out, attract the right audience, and convert consistently.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 inline-flex items-center gap-3 bg-dark rounded-2xl px-6 py-4"
            >
              <FaHeart className="text-primary text-2xl" />
              <p className="font-heading text-lg md:text-xl font-bold text-white">
                Your growth is our priority.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Feature Cards */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: isMobile ? 0 : 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: isMobile ? 0 : index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5 }}
                  className="bg-base rounded-2xl p-6 shadow-lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-14 h-14 ${feature.bg} rounded-full flex items-center justify-center mb-4`}
                  >
                    <Icon className="text-white text-2xl" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-bold text-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-dark/80">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}