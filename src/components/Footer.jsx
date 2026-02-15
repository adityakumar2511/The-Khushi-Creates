import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
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
    { name: "Social Media Marketing", path: "/services/social" },
    { name: "Content Creation", path: "/services/content" },
    { name: "SEO Optimization", path: "/services/seo" },
    { name: "Brand Strategy", path: "/services/strategy" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, url: "https://facebook.com/brandcreates" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/brandcreates" },
  { name: "Twitter", icon: FaTwitter, url: "https://twitter.com/brandcreates" },
  { name: "LinkedIn", icon: FaLinkedinIn, url: "https://linkedin.com/company/brandcreates" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-base shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          {/* Logo & About */}
          <div className="lg:col-span-1 space-y-3 center">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <img src={logo} alt="BrandCreates Logo" className="h-12 w-auto " />
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
                  className="text-xl p-3 rounded-xl bg-base/10 text-base
                             hover:bg-primary hover:text-dark
                             transition-all duration-300 hover:scale-110 "
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-3xl font-bold font-heading mb-3 text-base text-center">
              Company
            </h3>
            <ul className="space-y-2 font-body text-center ">
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
          <div>
            <h3 className="text-3xl font-bold font-heading mb-3 text-center text-base">
              Services
            </h3>
            <ul className="space-y-2 text-center font-body">
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
          <div>
            <h3 className="text-3xl font-bold font-heading mb-3 text-base text-center lg:text-left">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-lg text-base/80 text-center lg:text-left">
              <li className="flex gap-3 items-center justify-center lg:justify-start">
                <FaEnvelope className="text-primary mt-1 w-5 h-5" />
                <span className="font-body"><a
                  href="mailto:thekhushicreates@gmail.com"
                  className="font-body text-base hover:text-primary transition"
                >
                  thekhushicreates@gmail.com
                </a></span>
              </li>
              <li className="flex gap-3 items-center justify-center lg:justify-start">
                <FaPhone className="text-primary mt-1 h-5 w-5" />
                <span className="font-body">
                  <a href="tel:+916387297711" className="hover:text-primary transition">+91 6387297711, </a><br/>
                  <a href="tel:+917905844454" className="hover:text-primary transition">+91 7905844454, </a>
                  <br/>
                  <a href="tel:+918887522315" className="hover:text-primary transition">+91 8887522315</a>
                </span>
              </li>
              <li className="flex gap-3 items-center justify-center lg:justify-start">
                <FaMapMarkerAlt className="text-primary mt-1 h-5 w-5" />
                <span className="font-body hover:text-primary transition">India (Serving clients nationwide)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-base/20 pt-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-md text-base/70 font-body">
            <p className="text-center">
              © {new Date().getFullYear()} The Khushi Creates. All rights reserved. Created By <a href="https://aditya-kumar-2511.vercel.app/" className="text-primary hover:underline" target="_blank">Aditya Kumar</a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}