import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import StrategyIcon from "../assets/HomePage/strategy.png";
import CreativeIcon from "../assets/HomePage/creative.png";
import GrowthIcon from "../assets/HomePage/growth.png";
import CommunicationIcon from "../assets/HomePage/clearCommunication.png";
import ConsistencyIcon from "../assets/HomePage/consistent.png";

function useIsMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

export default function WhyChooseUs() {
  const isMobile = useIsMobile();

  const cards = [
    { icon: StrategyIcon, alt: "BrandCreates Strategy Icon", title: "Strategy First, Always" },
    { icon: CreativeIcon, alt: "BrandCreates Creative Icon", title: "Creative + Data-Driven Execution" },
    { icon: ConsistencyIcon, alt: "BrandCreates Consistency Icon", title: "Consistent & Professional Brand Presence" },
    { icon: CommunicationIcon, alt: "BrandCreates Communication Icon", title: "Clear Communication & Transparency" },
    { icon: GrowthIcon, alt: "BrandCreates Growth Icon", title: "Focused on Real Business Growth", extra: "sm:col-span-2 lg:col-span-1" },
  ];

  const headingVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const taglineVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="w-full overflow-x-hidden bg-primary px-2 sm:px-4 md:px-10 lg:px-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-base">
            WHY CHOOSE THE KHUSHI CREATES?
          </h2>
          <p className="mt-4 font-body text-lg text-base/90">
            We treat your brand like our own.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: isMobile ? 0 : index * 0.1,
                ease: "easeOut",
              }}
              className={`bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition text-center ${card.extra || ""}`}
            >
              <div className="flex items-center justify-center mb-5">
                <motion.img
                  src={card.icon}
                  alt={card.alt}
                  className="h-24 w-24"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-dark">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          variants={taglineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-lg px-8 py-5">
            <FaHeart className="text-primary text-2xl" />
            <p className="font-heading text-lg md:text-xl font-semibold text-dark">
              We treat your brand like our own.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}