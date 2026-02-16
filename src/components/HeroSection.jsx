import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full bg-base px-2 sm:px-4 md:px-10 lg:px-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">

        {/* MAIN HERO - LEFT CONTENT & RIGHT VIDEO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-dark">
              We Don't Just Post Content.
              <br />
              <span className="text-primary">We Build Brands That Grow & Sell.</span>
            </h1>

            <p className="font-body mt-6 text-base md:text-lg text-dark leading-relaxed">
              Your audience is online every single day. The question is — are they noticing your brand?
            </p>

            <p className="font-body mt-4 text-base md:text-lg text-dark leading-relaxed">
              At The Khushi Creates, we help businesses turn their social media into a powerful growth
              engine through strategy, creativity, and performance marketing.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              {/* Call Button */}
              <a
                href="tel:+916387297711"
                className="bg-primary font-body hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold shadow-md transition text-base md:text-lg text-center"
              >
                Book a Free Strategy Call
              </a>

              {/* Services Page Link */}
              <a
                href="/services"
                className="border-2 font-body border-dark hover:border-primary hover:text-primary text-dark px-8 py-4 rounded-lg font-semibold transition text-base md:text-lg text-center"
              >
                View Our Services
              </a>
            </div>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            {/* Video Container with 16:9 aspect ratio */}
            <div className="relative w-full aspect-video bg-dark/5 rounded-2xl overflow-hidden shadow-2xl">

              {/* Replace this div with your actual video element */}
              {/* Example: <video src="/path/to/video.mp4" controls className="w-full h-full object-cover" /> */}
              {/* Or YouTube embed: <iframe src="https://www.youtube.com/embed/VIDEO_ID" className="w-full h-full" allowFullScreen /> */}

              {/* Placeholder - Remove this when adding real video */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-dark/10">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center shadow-xl cursor-pointer mb-4"
                  >
                    <FaPlay className="text-white text-2xl ml-1" />
                  </motion.div>
                  <p className="font-body text-dark/60 text-sm">Video Player</p>
                  <p className="font-body text-dark/40 text-xs mt-1">Replace with your video source</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}