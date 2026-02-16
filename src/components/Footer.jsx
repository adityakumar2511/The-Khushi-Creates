import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp
} from 'react-icons/fa';
import logo from "../assets/footerLogo.png";

const footerLinks = {
  company: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Social Media Management", path: "/service#social" },
    { name: "Reels & Short-Form Video Editing", path: "/service#video" },
    { name: "Branding & Graphic Designing", path: "/service#branding" },
    { name: "Website Development", path: "/service#website" },
    { name: "Paid Ads Management", path: "/service#ads" },
    { name: "Custom Marketing Solutions", path: "/service#custom" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, url: "https://www.facebook.com/Thekhushicreates/" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/thekhushicreates/" },
  { name: "Twitter", icon: FaTwitter, url: "https://www.behance.net/khushijaiswal30" },
  { name: "LinkedIn", icon: FaLinkedinIn, url: "https://www.linkedin.com/in/khushijaiswal20802/" },
];

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-dark text-base shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-8">

            {/* Logo & About */}
            <div className="lg:col-span-4 space-y-3 center">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <img src={logo} alt="BrandCreates Logo" className="h-12 w-auto" />
              </div>

              <p className="font-body text-lg leading-relaxed max-w-md text-base text-center lg:text-left pt-4">
                We are a creative digital marketing agency dedicated to helping brands grow
                their online presence through innovative strategies and compelling content.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 pt-1 lg:justify-start justify-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl p-3 rounded-full bg-base/10 text-base hover:bg-primary hover:text-dark transition-all duration-300 hover:scale-110"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold font-heading mb-3 text-base text-left">
                Company
              </h3>
              <ul className="space-y-2 font-body text-left">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-lg text-base/80 hover:text-base hover:font-semibold transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="text-3xl font-bold font-heading mb-3 text-left text-base">
                Services
              </h3>
              <ul className="space-y-2 text-left font-body">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-lg text-base/80 hover:text-base hover:font-semibold transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h3 className="text-3xl font-bold font-heading mb-3 text-base text-center lg:text-left">
                Get in Touch
              </h3>
              <ul className="space-y-3 text-lg text-base/80 text-center lg:text-left">
                <li className="flex gap-3 items-center justify-center lg:justify-start">
                  <FaEnvelope className="text-primary mt-1 w-5 h-5 flex-shrink-0" />
                  <a
                    href="mailto:thekhushicreates@gmail.com"
                    className="font-body text-base hover:text-primary transition"
                  >
                    thekhushicreates@gmail.com
                  </a>
                </li>
                <li className="flex gap-3 items-start justify-center lg:justify-start">
                  <FaPhone className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="font-body flex flex-col gap-1">
                    <a href="tel:+916387297711" className="hover:text-primary transition">+91 6387297711</a>
                    <a href="tel:+917905844454" className="hover:text-primary transition">+91 7905844454</a>
                    <a href="tel:+918887522315" className="hover:text-primary transition">+91 8887522315</a>
                  </span>
                </li>
                <li className="flex gap-3 items-center justify-center lg:justify-start">
                  <FaMapMarkerAlt className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="font-body hover:text-primary transition">Prayagraj Uttar Pradesh, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-base/20 pt-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-md text-base/70 font-body">
              <p className="text-center">
                © {new Date().getFullYear()} The Khushi Creates. All rights reserved. Created By <a href="https://aditya-kumar-2511.vercel.app/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Aditya Kumar</a>
              </p>
            </div>
          </div>

        </div>
      </footer>

      {/* WhatsApp Sticky Button */}
      <a
        href="https://wa.me/916387297711?text=Hi, I want to know more about your services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  );
}