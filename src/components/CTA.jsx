import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ctaBg from "../assets/cta-bg.jpg"; // <-- apni image yahan rakho

export default function CTA() {
  return (
    <section
      className="relative w-full px-4 sm:px-6 md:px-16 lg:px-20 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/80"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center text-white">

        {/* Headline */}
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold leading-tight">
          DON’T GET LEFT BEHIND —
          <br className="hidden sm:block" />
          CLAIM YOUR FREE GROWTH AUDIT TODAY!
        </h2>

        {/* Subtext */}
        <p className="mt-6 font-body text-white/85 text-sm md:text-base">
          80% of businesses fail online without expert guidance.
          Get a professional growth audit in just 30 minutes — no obligation.
        </p>

        {/* Checklist */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
          {[
            "Competitor analysis",
            "Traffic & lead gaps revealed",
            "90-day ROI roadmap",
            "No obligation",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                ✓
              </span>
              <p className="font-body text-sm text-white/90">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14">
          <button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-xl text-lg font-bold shadow-xl transition font-body">
            BOOK FREE CALL NOW
          </button>
        </div>

        {/* Trust Line */}
        <div className="mt-10 text-white/70 text-sm">
          Trusted by 100+ UP Brands · Response in 2 Hours 🚀
        </div>

      </div>
    </section>
  );
}
