import { motion } from "framer-motion";
import BackgroundVideo from "../assets/HomePage/ResultDrivenVideo.mp4";

export default function ResultDriveSection() {
  return (
    <section className="w-full overflow-x-hidden">

      {/* Full Width Video Background */}
      <div className="relative w-full overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={BackgroundVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-10 lg:px-12 py-12 md:py-16 text-center">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed mb-6"
          >
            RESULTS-DRIVEN SOCIAL MEDIA MARKETING
          </motion.h2>

          {/* Para 1 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="font-body text-base md:text-lg text-white leading-relaxed mb-4"
          >
            We don't believe in random posting.
            <br className="hidden sm:block" />
            We believe in{" "}
            <span className="font-semibold text-primary">structured growth</span>.
          </motion.p>

          {/* Para 2 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="font-body text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto mb-6"
          >
            Our approach combines branding, content strategy, audience psychology, and performance
            marketing to create a social presence that actually converts.
          </motion.p>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="inline-block bg-primary backdrop-blur-sm rounded-xl shadow-lg px-8 py-4"
          >
            <p className="font-body text-white md:text-md">
              Because likes are good.
            </p>
            <p className="font-body text-lg md:text-xl font-semibold text-white">
              But leads & sales are better.
            </p>
          </motion.div>

        </div>
      </div>

    </section>
  );
}