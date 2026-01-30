import {
  FaMapMarkedAlt,
  FaChartLine,
  FaEye,
  FaWhatsapp,
  FaExpandArrowsAlt,
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-primary px-4 sm:px-6 md:px-16 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-base">
            Your Unfair Advantage in Prayagraj’s Competitive Market
          </h2>
          <p className="mt-4 font-body text-base">
            Local expertise. Proven systems. Transparent execution.
          </p>
        </div>

        {/* Advantage Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition">
            <FaMapMarkedAlt className="text-primary text-3xl mb-5" />
            <h3 className="font-heading text-lg font-semibold text-dark">
              Local Market Masters
            </h3>
            <p className="mt-3 font-body text-sm text-dark leading-relaxed">
              UP-specific strategies crafted for Prayagraj audiences with
              bilingual Hindi & English communication.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition">
            <FaChartLine className="text-primary text-3xl mb-5" />
            <h3 className="font-heading text-lg font-semibold text-dark">
              Guaranteed ROI
            </h3>
            <p className="mt-3 font-body text-sm text-dark leading-relaxed">
              250% average growth delivered consistently — or we work
              free until results show.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition">
            <FaEye className="text-primary text-3xl mb-5" />
            <h3 className="font-heading text-lg font-semibold text-dark">
              Full Transparency
            </h3>
            <p className="mt-3 font-body text-sm text-dark leading-relaxed">
              Real-time dashboards showing traffic, leads, conversions
              and ROI — no hidden numbers.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition">
            <FaWhatsapp className="text-primary text-3xl mb-5" />
            <h3 className="font-heading text-lg font-semibold text-dark">
              24/7 Support
            </h3>
            <p className="mt-3 font-body text-sm text-dark leading-relaxed">
              WhatsApp-ready pivots, quick updates, and instant action
              when the market shifts.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition sm:col-span-2 lg:col-span-1">
            <FaExpandArrowsAlt className="text-primary text-3xl mb-5" />
            <h3 className="font-heading text-lg font-semibold text-dark">
              Scalable Solutions
            </h3>
            <p className="mt-3 font-body text-sm text-darkleading-relaxed">
              From ₹10k startup plans to ₹5L+ enterprise campaigns —
              scale smoothly without disruption.
            </p>
          </div>

        </div>

        {/* Social Proof */}
        {/* <div className="mt-20 text-center">
          <p className="font-heading text-lg font-semibold text-dark">
            50+ Prayagraj brands crushing goals with us.
          </p>
          <p className="mt-1 font-body text-primary font-medium">
            Ready to be the next success story?
          </p>
        </div> */}

      </div>
    </section>
  );
}
