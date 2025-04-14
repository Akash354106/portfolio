import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";

const ContactUs = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10">
            Feel free to reach out by filling the form below or connect via social platforms.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-10 flex gap-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition">
              <Twitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Right: Contact Details & Map */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Mail size={20} />
              <span>yourname@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Phone size={20} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <MapPin size={20} />
              <span>Ranchi, Jharkhand, India</span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700">
            <iframe
              title="Google Map"
              className="w-full h-72"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28958.24101803455!2d85.30756337431639!3d23.344101611318556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1b3a2f422d9%3A0xc3f9d0b0c15a53de!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1680678412345!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
