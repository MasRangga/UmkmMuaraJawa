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
            <a
              href="https://www.google.com/maps/place/0%C2%B052'18.3%22S+117%C2%B012'41.9%22E/@-0.8717447,117.2090651,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-0.8717447!4d117.21164?entry=ttu"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLocationArrow className="text-xl" />
              <p>
                Gg. Cemp., Muara Jawa Ilir, Kec. Muara Jawa, Kabupaten Kutai
                Kartanegara, Kalimantan Timur
              </p>
            </a>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.instagram.com/kknuinsi24_muarajawailir?igsh=cHZ6bzlrNDYydTc4"
              className="flex items-center gap-2 text-3xl text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              <p className="text-base">KKN 24 | Muara Jawa Ilir</p>
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
