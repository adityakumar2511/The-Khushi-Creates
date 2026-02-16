import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from 'react-icons/fa';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        businessName: "",
        contactNumber: "",
        email: "",
        services: "",
        budget: "",
        goals: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const socialLinks = [
        { name: "Facebook", icon: FaFacebookF, url: "https://www.facebook.com/Thekhushicreates/" },
        { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/thekhushicreates/" },
        { name: "Twitter", icon: FaTwitter, url: "https://www.behance.net/khushijaiswal30" },
        { name: "LinkedIn", icon: FaLinkedinIn, url: "https://www.linkedin.com/in/khushijaiswal20802/" },
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // EmailJS configuration
        const serviceID = 'service_hwuj8as'; // Replace with your EmailJS service ID
        const templateID = 'template_irv02uj'; // Replace with your EmailJS template ID
        const publicKey = '99zEqRuAQi-zgzoPV'; // Replace with your EmailJS public key

        // Template parameters
        const templateParams = {
            from_name: formData.fullName,
            business_name: formData.businessName,
            contact_number: formData.contactNumber,
            email: formData.email,
            services: formData.services,
            budget: formData.budget,
            goals: formData.goals,
            to_email: 'thekhushicreates@gmail.com' // Your receiving email
        };

        try {
            const response = await emailjs.send(
                serviceID,
                templateID,
                templateParams,
                publicKey
            );

            console.log('Email sent successfully!', response.status, response.text);
            setSubmitStatus('success');
            
            // Reset form
            setFormData({
                fullName: "",
                businessName: "",
                contactNumber: "",
                email: "",
                services: "",
                budget: "",
                goals: ""
            });

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);

        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('error');
            
            // Clear error message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full bg-base px-2 sm:px-4 md:px-10 lg:px-12 py-10 md:py-16">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Heading */}
                        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-dark leading-tight mb-6">
                            Let's Grow Your Brand Together.
                        </h2>

                        <div className="space-y-3 mb-4">
                            <p className="font-body text-md md:text-lg text-dark leading-relaxed">
                                Have a project in mind?
                                <br />
                                Looking to scale your business online?
                            </p>

                            <p className="font-body text-base md:text-lg text-dark leading-relaxed">
                                We'd love to understand your goals and create a strategy that delivers real results.
                            </p>

                            <p className="font-body text-base md:text-lg text-dark leading-relaxed font-semibold">
                                At The Khushi Creates, we believe every successful brand starts with the right conversation.
                            </p>
                        </div>

                        {/* Get In Touch Section */}
                        <div className="mt-8">
                            <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6 flex items-center gap-3">
                                Get In Touch
                            </h3>

                            <div className="space-y-6">

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <motion.div
                                        animate={{ rotate: 100 }}
                                        transition={{
                                            duration: 0,
                                            repeat: 1,
                                            ease: "linear"
                                        }}
                                        className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0"
                                    >
                                        <FaPhone className="text-white text-lg" />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-heading font-semibold text-dark mb-2">Phone</h4>
                                        <p className="font-body text-dark">
                                            <a href="tel:+916387297711" className="hover:text-primary transition">+91 6387297711, </a>
                                            <a href="tel:+917905844454" className="hover:text-primary transition">+91 7905844454, </a>
                                            <a href="tel:+918887522315" className="hover:text-primary transition">+91 8887522315</a>
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold text-dark mb-2">Email</h4>
                                        <a
                                            href="mailto:thekhushicreates@gmail.com"
                                            className="font-body text-dark hover:text-primary transition"
                                        >
                                            thekhushicreates@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold text-dark mb-2">Location</h4>
                                        <p className="font-body text-dark">
                                            Mutthiganj, Prayagraj
                                            Uttar Pradesh, India 211003
                                        </p>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-start gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl p-4 rounded-full bg-primary text-white hover:bg-primary/80 transition-all duration-300 hover:scale-110"
                                        >
                                            <social.icon />
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </div>

                    </motion.div>

                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-primary rounded-2xl p-8 md:p-10 shadow-2xl">

                            {/* Form Heading */}
                            <div className="mb-8">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-base mb-3 flex items-center gap-2">
                                    Book a Free Strategy Consultation
                                </h3>
                                <p className="font-body text-white text-md font-md">
                                    Fill out the form below and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            {/* Success/Error Messages */}
                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-500 text-white rounded-lg font-body">
                                    ✓ Thank you! We'll get back to you within 24 hours.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-500 text-white rounded-lg font-body">
                                    ✗ Something went wrong. Please try again or email us directly.
                                </div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Full Name */}
                                <div>
                                    <label className="block font-body text-white mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 border-2 border-dark/20 rounded-lg focus:border-dark focus:outline-none font-body bg-white text-dark disabled:opacity-50"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                {/* Business Name */}
                                <div>
                                    <label className="block font-body text-white mb-2">
                                        Business Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 border-2 border-dark/20 rounded-lg focus:border-dark focus:outline-none font-body bg-white text-dark disabled:opacity-50"
                                        placeholder="Enter your business name"
                                    />
                                </div>

                                {/* Contact Number */}
                                <div>
                                    <label className="block font-body text-white mb-2">
                                        Contact Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 border-2 border-dark/20 rounded-lg focus:border-dark focus:outline-none font-body bg-white text-dark disabled:opacity-50"
                                        placeholder="+91 XXXXXXXXXX"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block font-body text-white mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 border-2 border-dark/20 rounded-lg focus:border-dark focus:outline-none font-body bg-white text-dark disabled:opacity-50"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                {/* Services Required */}
                                <div>
                                    <label className="block font-body text-white mb-2">
                                        Services Required *
                                    </label>
                                    <select
                                        name="services"
                                        value={formData.services}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 border-2 border-dark/20 rounded-lg focus:border-dark focus:outline-none font-body bg-white text-dark disabled:opacity-50"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="social-media">Social Media Management</option>
                                        <option value="video-editing">Reels & Video Editing</option>
                                        <option value="branding">Branding & Graphic Design</option>
                                        <option value="website">Website Development</option>
                                        <option value="paid-ads">Paid Ads Management</option>
                                        <option value="custom">Custom Marketing Solutions</option>
                                    </select>
                                </div>

                                {/* Budget */}
                                <div>
                                    <label className="block font-body text-white mb-2">
                                        Monthly Marketing Budget *
                                    </label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 border-2 border-dark/20 rounded-lg focus:border-dark focus:outline-none font-body bg-white text-dark disabled:opacity-50"
                                    >
                                        <option value="">Select your budget</option>
                                        <option value="5k-10k">₹5,000 - ₹10,000</option>
                                        <option value="10k-25k">₹10,000 - ₹25,000</option>
                                        <option value="25k-50k">₹25,000 - ₹50,000</option>
                                        <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                                    </select>
                                </div>

                                {/* Business Goals */}
                                <div>
                                    <label className="block font-body text-white mb-2">
                                        Tell us about your business goals *
                                    </label>
                                    <textarea
                                        name="goals"
                                        value={formData.goals}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        rows="4"
                                        className="w-full px-4 py-3 border-2 border-dark/20 rounded-lg focus:border-dark focus:outline-none font-body resize-none bg-white text-dark disabled:opacity-50"
                                        placeholder="What are your main goals? What challenges are you facing?"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full font-body font-bold py-4 rounded-lg transition shadow-lg text-lg bg-white text-dark hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Schedule My Free Consultation'}
                                </button>

                            </form>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}