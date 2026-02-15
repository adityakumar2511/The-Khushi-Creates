import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaChartLine, FaHeart } from "react-icons/fa";

export default function HomeAbout() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-16 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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

            <div className="mt-8 inline-flex items-center gap-3 bg-primary/10 rounded-2xl px-6 py-4">
              <FaHeart className="text-primary text-2xl" />
              <p className="font-heading text-lg md:text-xl font-bold text-dark">
                Your growth is our priority.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Stats/Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            
            {/* Feature 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-base rounded-2xl p-6 shadow-lg"
            >
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark mb-2">
                Clarity
              </h3>
              <p className="font-body text-sm text-dark/80">
                Clear strategies that make sense for your business goals
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-base rounded-2xl p-6 shadow-lg"
            >
              <div className="w-14 h-14 bg-dark rounded-full flex items-center justify-center mb-4">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark mb-2">
                Creativity
              </h3>
              <p className="font-body text-sm text-dark/80">
                Content that captures attention and builds connection
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-base rounded-2xl p-6 shadow-lg"
            >
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark mb-2">
                Confidence
              </h3>
              <p className="font-body text-sm text-dark/80">
                Data-backed results you can trust and measure
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-base rounded-2xl p-6 shadow-lg"
            >
              <div className="w-14 h-14 bg-dark rounded-full flex items-center justify-center mb-4">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark mb-2">
                Growth
              </h3>
              <p className="font-body text-sm text-dark/80">
                Sustainable results that scale with your business
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}