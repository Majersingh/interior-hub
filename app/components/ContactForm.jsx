'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMailchimp, FaPhone, FaMapMarked, FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@interiorhub.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsApp = () => {
    const whatsappLink = `https://wa.me/919876543210?text=Hello, I'm interested in your services`;
    window.open(whatsappLink, '_blank');
  };

  const contactCards = [
    {
      icon: <FaMapMarked className="text-3xl text-secondary" />,
      title: "Our Location",
      content: "123 Interior Design Street\nFaridabad District\nNCR 100001, INDIA",
      action: null
    },
    {
      icon: <FaPhone className="text-3xl text-secondary" />,
      title: "Phone Number",
      content: "+1 (123) 456-7890",
      action: null
    },
    {
      icon: <FaMailchimp className="text-3xl text-secondary" />,
      title: "Email Address",
      content: "contact@interiorhub.com",
      action: null
    },
    {
      icon: <FaWhatsapp className="text-3xl text-[#25D366]" />,
      title: "WhatsApp",
      content: "Chat with us instantly",
      action: handleWhatsApp
    }
  ];

  return (
    <section className="py-4 bg-gray-50" id='contact'>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-2"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 overflow-hidden">
          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                onClick={card.action || undefined}
                style={{ cursor: card.action ? 'pointer' : 'default' }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-gray-100 p-4 rounded-full">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{card.content}</p>
                  {card.action && (
                    <button className="mt-2 text-[#25D366] font-medium hover:text-[#128C7E] transition-colors">
                      Start Chat
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8  overflow-hidden rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg  hover:bg-secondary/90 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <MapEmbed/>
    </section>
  );
};

export default ContactForm; 

const MapEmbed = () => {
    return (
      <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449196.1351540826!2d76.99746000251596!3d28.408850873977592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24d1dfb3fa1bc83%3A0xbc814f9364b5ede3!2sTHE%20INTERIORHUB%20-%20Pvc%20panel%20Faridabad%20(Best%20pvc%20panel%20shop%20in%20FARIDABAD%2CLOUVERS%20SHOP!5e0!3m2!1sen!2sin!4v1744040381240!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full"
        ></iframe>
      </div>
    )
  }
  