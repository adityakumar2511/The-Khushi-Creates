import {
  FaChartBar,
  FaLightbulb,
  FaStar,
  FaComments,
  FaRocket,
  FaHeart,
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-primary px-4 sm:px-6 md:px-16 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">💎</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-base">
              WHY CHOOSE THE KHUSHI CREATES?
            </h2>
          </div>
          <p className="mt-4 font-body text-base text-base/90">
            We treat your brand like our own.
          </p>
        </div>

        {/* Advantage Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {/* Card 1 - Strategy First */}
          <div className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition text-center">
            <div className="flex items-center justify-center mb-5">
              <div className="relative">
                <FaChartBar className="text-white bg-primary text-2xl w-16 h-16 rounded-full p-4" />
                <span className="absolute -top-1 -right-1 text-xl bg-white rounded-full w-7 h-7 flex items-center justify-center">✔</span>
              </div>
            </div>
            <h3 className="font-heading text-lg font-semibold text-dark">
              Strategy First, Always
            </h3>
          </div>

          {/* Card 2 - Creative + Data-Driven */}
          <div className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition text-center">
            <div className="flex items-center justify-center mb-5">
              <div className="relative">
                <FaLightbulb className="text-white bg-primary text-2xl w-16 h-16 rounded-full p-4" />
                <span className="absolute -top-1 -right-1 text-xl bg-white rounded-full w-7 h-7 flex items-center justify-center">✔</span>
              </div>
            </div>
            <h3 className="font-heading text-lg font-semibold text-dark">
              Creative + Data-Driven Execution
            </h3>
          </div>

          {/* Card 3 - Consistent Brand Presence */}
          <div className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition text-center">
            <div className="flex items-center justify-center mb-5">
              <div className="relative">
                <FaStar className="text-white bg-primary text-2xl w-16 h-16 rounded-full p-4" />
                <span className="absolute -top-1 -right-1 text-xl bg-white rounded-full w-7 h-7 flex items-center justify-center">✔</span>
              </div>
            </div>
            <h3 className="font-heading text-lg font-semibold text-dark">
              Consistent & Professional Brand Presence
            </h3>
          </div>

          {/* Card 4 - Clear Communication */}
          <div className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition text-center">
            <div className="flex items-center justify-center mb-5">
              <div className="relative">
                <FaComments className="text-white bg-primary text-2xl w-16 h-16 rounded-full p-4" />
                <span className="absolute -top-1 -right-1 text-xl bg-white rounded-full w-7 h-7 flex items-center justify-center">✔</span>
              </div>
            </div>
            <h3 className="font-heading text-lg font-semibold text-dark">
              Clear Communication & Transparency
            </h3>
          </div>

          {/* Card 5 - Real Business Growth */}
          <div className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition text-center sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center mb-5">
              <div className="relative">
                <FaRocket className="text-white bg-primary text-2xl w-16 h-16 rounded-full p-4" />
                <span className="absolute -top-1 -right-1 text-xl bg-white rounded-full w-7 h-7 flex items-center justify-center">✔</span>
              </div>
            </div>
            <h3 className="font-heading text-lg font-semibold text-dark">
              Focused on Real Business Growth
            </h3>
          </div>

        </div>

        {/* Tagline */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-lg px-8 py-5">
            <FaHeart className="text-primary text-2xl" />
            <p className="font-heading text-lg md:text-xl font-semibold text-dark">
              We treat your brand like our own.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}