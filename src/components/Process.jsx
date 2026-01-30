import {
  FaSearch,
  FaLightbulb,
  FaRocket,
  FaChartBar,
  FaArrowRight,
} from "react-icons/fa";

export default function ProcessSection() {
  return (
    <section className="w-full bg-base px-4 sm:px-6 md:px-16 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
            Our Proven 4-Step Framework
          </h2>
          <p className="mt-4 font-body text-dark">
            Delivering results in just 30 days.  
            Transparent from discovery to scale.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* STEP 01 */}
          <div className="relative">
            {/* Card */}
            <div className="bg-white rounded-xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.4)]  transition-transform duration-300 hover:-translate-y-4">
              <div className="w-12 h-12 flex items-center justify-center mb-5">
                <FaSearch className="bg-dark text-white w-12 h-12 rounded-full p-3" />
              </div>

              <span className="text-xs font-semibold text-primary font-body">
                01 · DISCOVERY
              </span>
              <h3 className="mt-2 font-heading text-base font-semibold text-dark">
                Free Audit
              </h3>
              <p className="mt-3 font-body text-sm text-dark leading-relaxed">
                Complete audit of your current setup to identify gaps and
                opportunities.
              </p>
            </div>

            {/* Arrow (Desktop only) */}
            <FaArrowRight className="hidden lg:block absolute -right-7 top-1/2 -translate-y-1/2 text-primary text-xl" />
          </div>

          {/* STEP 02 */}
          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.4)]  transition-transform duration-300 hover:-translate-y-4">
              <div className="w-12 h-12 flex items-center justify-center mb-5">
                <FaLightbulb className="bg-dark text-white w-12 h-12 rounded-full p-3" />
              </div>

              <span className="text-xs font-semibold text-primary font-body">
                02 · STRATEGY
              </span>
              <h3 className="mt-2 font-heading text-base font-semibold text-dark">
                90-Day Roadmap
              </h3>
              <p className="mt-3 font-body text-sm text-dark leading-relaxed">
                Custom strategy with KPIs, timelines,
                and measurable goals.
              </p>
            </div>

            <FaArrowRight className="hidden lg:block absolute -right-7 top-1/2 -translate-y-1/2 text-primary text-xl" />
          </div>

          {/* STEP 03 */}
          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.4)]  transition-transform duration-300 hover:-translate-y-4">
              <div className="w-12 h-12 flex items-center justify-center mb-5">
                <FaRocket className="bg-dark text-white w-12 h-12 rounded-full p-3" />
              </div>

              <span className="text-xs font-semibold text-primary font-body">
                03 · EXECUTION
              </span>
              <h3 className="mt-2 font-heading text-base font-semibold text-dark">
                Campaign Launch
              </h3>
              <p className="mt-3 font-body text-sm text-dark leading-relaxed">
                Campaigns go live only after your approval
                for complete transparency.
              </p>
            </div>

            <FaArrowRight className="hidden lg:block absolute -right-7 top-1/2 -translate-y-1/2 text-primary text-xl" />
          </div>

          {/* STEP 04 */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.4)]  transition-transform duration-300 hover:-translate-y-4">
              <div className="w-12 h-12 flex items-center justify-center mb-5">
                <FaChartBar className="bg-dark text-white w-12 h-12 rounded-full p-3" />
              </div>

              <span className="text-xs font-semibold text-primary font-body">
                04 · REPORTING
              </span>
              <h3 className="mt-2 font-heading text-base font-semibold text-dark">
                Transparent Reports
              </h3>
              <p className="mt-3 font-body text-sm text-dark leading-relaxed">
                Monthly dashboards covering traffic,
                leads, conversions, and ROI.
              </p>
            </div>
          </div>

        </div>

        {/* Trust Line */}
        <div className="mt-20 text-center">
          <p className="font-heading text-lg font-semibold text-dark">
            100+ businesses transformed.
          </p>
          <p className="mt-1 font-body text-primary font-medium">
            Your turn next.
          </p>
        </div>

      </div>
    </section>
  );
}
