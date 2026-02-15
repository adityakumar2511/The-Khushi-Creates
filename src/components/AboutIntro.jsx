import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="w-full bg-base px-2 sm:px-4 md:px-10 lg:px-12 py-10 md:py-16">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            ABOUT THE KHUSHI CREATES
          </h2>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-3"
        >
          <h3 className="font-heading text-md md:text-lg font-bold text-primary">
            We Don't Just Manage Social Media. 
            <br className="hidden sm:block" />
            We Build Brands That Matter.
          </h3>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 space-y-3"
        >
          <p className="font-body text-md md:text-lg text-dark leading-relaxed text-center">
            The Khushi Creates is a results-driven Social Media Marketing Agency dedicated to 
            helping businesses grow with clarity, strategy, and creativity.
          </p>

          <p className="font-body text-base md:text-lg text-dark leading-relaxed text-center">
            We believe that social media is more than just posting content — it's about building 
            brand authority, creating meaningful engagement, and turning attention into revenue.
          </p>
        </motion.div>

        {/* Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-body font-bold text-lg md:text-xl text-dark mb-2">
            Our focus is simple:
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <span className="font-heading text-md md:text-lg  font-bold text-primary">
              Strategic Growth.
            </span>
            <span className="font-heading text-md md:text-lg  font-bold text-dark">
              Strong Branding.
            </span>
            <span className="font-heading text-md md:text-lg  font-bold text-primary">
              Measurable Results.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}