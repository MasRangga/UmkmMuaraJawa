import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import LogoMJI from "../../assets/LogoMJI.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 py-6">
      <section className="max-w-4xl mx-auto text-center px-4">
        <div className="mb-6">
          <img src={LogoMJI} alt="LogoMJI" className="w-40 mx-auto mb-4" />
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Menawarkan solusi terbaik untuk kebutuhan Anda dengan kualitas
            terjamin dan pelayanan yang ramah.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <FaLocationArrow className="text-xl" />
              <p>Noida, Uttar Pradesh</p>
            </div>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="#"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors"
            >
              <FaFacebook />
            </a>
            
          </div>
        </div>
        <div className="text-center py-4 border-t border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400">
          © KKN Muara Jawa Ilir. All rights reserved.
        </div>
      </section>
    </div>
  );
};

export default Footer;
