import { FaGlobe, FaCode, FaPalette, FaLock } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="w-full bg-slate-50 px-4 sm:px-6 md:px-16 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
            Our Premium Services
          </h2>
          <p className="mt-4 text-dark font-body text-dark ">
            Unlock your success with our premier digital marketing services and
            IT solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card */}
          <div className="bg-white rounded-xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.4)]  transition-transform duration-300 hover:-translate-y-4">
            <FaGlobe className="text-white text-3xl mb-6 bg-primary w-12 h-12 rounded-full p-3" />
            <h3 className="font-heading text-lg font-semibold text-dark">
              Digital Marketing
            </h3>
            <p className="mt-3 font-body text-sm text-dark leading-relaxed">
              Boost your online presence with our comprehensive digital
              marketing services.
            </p>
            <a className="mt-5 text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
              Learn more →
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.4)]  transition-transform duration-300 hover:-translate-y-4">
            <FaCode className="text-white text-3xl mb-6 bg-primary w-12 h-12 rounded-full p-3" />
            <h3 className="font-heading text-lg font-semibold text-dark">
              Web Development
            </h3>
            <p className="mt-3 font-body text-sm text-dark leading-relaxed">
              Custom website development with stunning design and powerful
              functionality.
            </p>
            <a className="mt-5 text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
              Learn more →
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.4)]  transition-transform duration-300 hover:-translate-y-4">
            <FaPalette className="text-white text-3xl mb-6 bg-primary w-12 h-12 rounded-full p-3" />
            <h3 className="font-heading text-lg font-semibold text-dark">
              UI / UX Design
            </h3>
            <p className="mt-3 font-body text-sm text-dark leading-relaxed">
              Create seamless user experiences with our expert UI/UX design
              services.
            </p>
            <a className="mt-5 text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
              Learn more →
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.4)]  transition-transform duration-300 hover:-translate-y-4">
            <FaLock className="text-white text-3xl mb-6 bg-primary w-12 h-12 rounded-full p-3" />
            <h3 className="font-heading text-lg font-semibold text-dark">
              Branding
            </h3>
            <p className="mt-3 font-body text-sm text-dark leading-relaxed">
              Build a strong brand identity that resonates with your audience.
            </p>
            <a className="mt-5 text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
              Learn more →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
