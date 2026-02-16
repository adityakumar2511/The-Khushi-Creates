import { motion } from "framer-motion";
import Ads from "../assets/HomePage/Ads.jpeg";
import GraphicDesigner from "../assets/HomePage/GraphicDesigner.jpeg";
import VideoEditor from "../assets/HomePage/VideoEditor.jpeg";
import SocialMedia from "../assets/HomePage/SocialMediaManagement.jpeg";
import WebsiteDevelopment from "../assets/HomePage/WebsiteDevelopment.jpeg";
export default function MainServicesSection() {
  const services = [
    {
      title: "Social Media Management",
      id: "social",
      subtitle: "Your brand deserves more than inconsistent posting.",
      description: "We handle your complete social media presence with strategy, planning, and professional execution.",
      includes: [
        "Content Strategy & Monthly Planning",
        "Creative Post Designing",
        "Caption Writing with Brand Voice",
        "Hashtag Research",
        "Posting & Scheduling",
        "Audience Engagement",
        "Performance Tracking"
      ],
      goal: "Build a strong, consistent & growth-focused presence.",
      image: SocialMedia,
    },
    {
      title: "Reels & Short-Form Video Editing",
      id: "video",
      subtitle: "Attention spans are short. Impact matters.",
      description: "We create scroll-stopping reels designed to boost reach, engagement & brand recall.",
      includes: [
        "Trend Research",
        "Script Guidance (if needed)",
        "Professional Editing",
        "Captions & Hooks",
        "High-Retention Structure"
      ],
      goal: "Increase visibility & attract new audiences.",
      image: VideoEditor,
    },
    {
      title: "Branding & Graphic Designing",
      id: "branding",
      subtitle: "Your brand identity is your first impression.",
      description: "We design visuals that make your business look premium, trustworthy, and memorable.",
      includes: [
        "Logo Design",
        "Brand Identity Creation",
        "Social Media Creatives",
        "Highlight Covers",
        "Marketing Graphics"
      ],
      goal: "Make your brand stand out professionally.",
      image: GraphicDesigner,
    },
    {
      title: "Website Development",
      id: "website",
      subtitle: "Your website should convert, not just exist.",
      description: "We build modern, responsive, and conversion-focused websites that reflect your brand and drive inquiries.",
      includes: [
        "Clean & Modern Design",
        "Mobile Responsive Layout",
        "Fast Loading Speed",
        "Clear Call-to-Action",
        "Contact & Inquiry Integration"
      ],
      goal: "Turn visitors into paying clients.",
      image: WebsiteDevelopment,
    },
    {
      title: "Paid Ads Management",
      id: "ads",
      subtitle: "Growth needs strategy. Not guesswork.",
      description: "We create data-driven ad campaigns designed to generate quality leads and maximize ROI.",
      includes: [
        "Audience Targeting",
        "Ad Copywriting",
        "Creative Design",
        "Campaign Optimization",
        "Performance Monitoring"
      ],
      goal: "Generate leads, sales & measurable results.",
      image: Ads,
    },
    {
      title: "Custom Marketing Solutions",
      id: "custom",
      subtitle: "Every business is different.",
      description: "We also offer customized marketing strategies based on your specific goals and industry.",
      includes: [
        "Business Analysis",
        "Custom Strategy Development",
        "Industry-Specific Solutions",
        "Flexible Service Packages",
        "Ongoing Support & Optimization"
      ],
      goal: "Deliver tailored solutions that fit your unique needs.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    },
  ];

  return (
        <section className="w-full bg-[#F0E3CE] px-2 sm:px-4 md:px-10 lg:px-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            OUR SERVICES
          </h2>
          
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            <span className="font-heading text-md md:text-lg font-bold text-primary">
              Strategic.
            </span>
            <span className="font-heading text-md md:text-lg font-bold text-dark">
              Creative.
            </span>
            <span className="font-heading text-md md:text-lg font-bold text-primary">
              Result-Driven.
            </span>
          </div>

          <p className="mt-3 font-body text-base md:text-lg text-dark leading-relaxed">
            At The Khushi Creates, we don't offer random marketing.
          </p>
          <p className="font-body text-base md:text-lg text-dark leading-relaxed mt-1">
            We provide structured solutions designed to grow your brand, attract the right audience, 
            and generate real business results.
          </p>
        </motion.div>

        {/* Services Cards - Alternating Layout */}
        <div className="space-y-12 md:space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
              
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-base p-8 rounded-2xl shadow-lg ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
                id={service.id}
              >
                
                {/* Image Side */}
                <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[200px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>

                  <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-dark mb-1">
                    {service.title}
                  </h3>

                  <p className="font-body text-md font-semibold text-primary mb-2">
                    {service.subtitle}
                  </p>

                  <p className="font-body text-lg text-dark leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* What's Included */}
                  <div className="bg-primary rounded-xl p-6 pt-4 pb-4 shadow-lg mb-6">
                    <h4 className="font-heading text-md font-bold text-dark mb-2">
                      What's Included:
                    </h4>
                    <ul className="space-y-1">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-white text-md mt-1">✓</span>
                          <span className="font-body text-md text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Goal */}
                  <div className="flex items-start gap-3 bg-primary/10 rounded-xl p-2">
                    <span className="text-2xl">👉</span>
                    <div>
                      <span className="font-heading font-bold text-dark text-md">Goal: </span>
                      <span className="font-body text-dark text-md">{service.goal}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}