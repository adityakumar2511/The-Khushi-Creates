import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import BackgroundVideo from "../assets/HomePage/ResultDrivenVideo.mp4";

export default function ResultDriveSection() {
  return (
    <section className="w-full ">
        {/* RESULTS-DRIVEN SECTION WITH FULL WIDTH VIDEO BACKGROUND */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full overflow-hidden"
      >
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
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content - Now with relative positioning and white text */}
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-10 lg:px-12 py-12 md:py-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            {/* <span className="text-2xl md:text-3xl">🚀</span> */}
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed">
              RESULTS-DRIVEN SOCIAL MEDIA MARKETING
            </h2>
          </div>

          <p className="font-body text-base md:text-lg text-white leading-relaxed mb-4">
            We don't believe in random posting.
            <br className="hidden sm:block" />
            We believe in <span className="font-semibold text-primary">structured growth</span>.
          </p>

          <p className="font-body text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto mb-6">
            Our approach combines branding, content strategy, audience psychology, and performance 
            marketing to create a social presence that actually converts.
          </p>

          <div className="inline-block bg-primary backdrop-blur-sm rounded-xl shadow-lg px-8 py-4">
            <p className="font-body text-white md:text-md text-dark">
              Because likes are good.
            </p>
            <p className="font-body text-lg md:text-xl font-semibold text-white ">
              But leads & sales are better.
            </p>
          </div>
        </div>
      </motion.div>

    </section>  );
}