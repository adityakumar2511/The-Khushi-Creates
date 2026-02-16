import { link } from "framer-motion/client";
import { FaInstagram, FaVideo, FaPalette, FaGlobe, FaBullhorn } from "react-icons/fa";
import Ads from "../assets/HomePage/Ads.jpeg";
import GraphicDesigner from "../assets/HomePage/GraphicDesigner.jpeg";
import VideoEditor from "../assets/HomePage/VideoEditor.jpeg";
import SocialMedia from "../assets/HomePage/SocialMediaManagement.jpeg";
import WebsiteDevelopment from "../assets/HomePage/WebsiteDevelopment.jpeg";
export default function ServicesSection() {
  const services = [
    {
      title: "Social Media Management",
      description: "Complete content planning, posting, engagement & growth strategy tailored to your business goals.",
      image: SocialMedia,
      link: "/services#social",

    },
    {
      title: "Reels & Short-Form Video Editing",
      description: "High-impact videos designed to increase reach, engagement & brand recall.",
      image: VideoEditor,
      link: "/services#video",
    },
    {
      title: "Branding & Graphic Designing",
      description: "Logos, brand identity & creatives that make your business look premium and trustworthy.",
      image: GraphicDesigner,
      link: "/services#branding",
    },
    {
      title: "Website Development",
      description: "Modern, responsive websites built to convert visitors into clients.",
      image: WebsiteDevelopment,
      link: "/services#website",
    },
    {
      title: "Paid Ads Management",
      description: "Strategic ad campaigns focused on generating quality leads and measurable results.",
      image: Ads,
      link: "/services#ads",
    },
  ];

  return (
    <section className="w-full bg-base px-2 sm:px-4 md:px-10 lg:px-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
            OUR SERVICES
          </h2>
          <p className="mt-4 text-dark font-body text-lg leading-relaxed">
            Complete social media marketing solutions designed to grow your brand 
            and drive real business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-4"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Overlay with icon */}
                  {/* <div className="absolute inset-0 bg-dark/40 flex items-center justify-center">
                    <div className="flex items-center gap-3">
                      <Icon className="text-white text-3xl bg-primary w-16 h-16 rounded-full p-4" />
                      <span className="text-4xl">{service.emoji}</span>
                    </div>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-heading text-xl font-semibold text-dark">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body text-md text-dark leading-relaxed">
                    {service.description}
                  </p>
                  <a className="mt-5 text-primary font-medium text-md flex items-center gap-1 hover:gap-2 transition-all" href={service.link}>
                    Know more →
                  </a>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}