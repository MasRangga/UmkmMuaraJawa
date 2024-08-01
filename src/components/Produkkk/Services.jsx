import React, { useState } from "react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import KontenLaki from "../../assets/KontenLaki.png"
import KontenCewe from "../../assets/KontenCewe.png"

import Umkm1 from "../../assets/Umkm1.png"
import Umkm2 from "../../assets/Umkm2.png";
import Umkm3 from "../../assets/Umkm3.png";
import Umkm4 from "../../assets/Umkm4.png";
import Umkm5 from "../../assets/Umkm5.png";
import Umkm6 from "../../assets/Umkm6.png";
import Umkm7 from "../../assets/Umkm7.png";
import Umkm8 from "../../assets/Umkm8.png";
import Umkm9 from "../../assets/Umkm9.png";
import Umkm10 from "../../assets/Umkm10.png";
import Umkm11 from "../../assets/Umkm11.png";
import Umkm12 from "../../assets/Umkm12.png";
import Umkm13 from "../../assets/Umkm13.png";
import Umkm14 from "../../assets/Umkm14.png";
import Umkm15 from "../../assets/Umkm15.png";
import Umkm16 from "../../assets/Umkm16.png";
import Umkm17 from "../../assets/Umkm17.png";
import Umkm18 from "../../assets/Umkm18.png";
import Umkm19 from "../../assets/Umkm19.png";



const ServicesData = [
  {
    id: 1,
    img: KontenCewe,
    detailImg: Umkm1,
    name: "Produksi Zubaedah",
    description: "Ayam Biryani dengan rasa rempah yang kaya.",
    whatsapp: "+6285350582838",
    detail:
      "Ayam Biryani adalah hidangan nasi aromatik dengan bumbu dan rempah khas.",
  },
  {
    id: 2,
    img: KontenCewe,
    detailImg: Umkm2,
    name: "Kacang Sembunyi Ratna",
    description: "Kari ayam pedas yang lezat.",
    whatsapp: "+6285346096751",
    detail:
      "Chicken Kari adalah kari ayam dengan bumbu pedas yang menggugah selera.",
  },
  {
    id: 3,
    img: KontenCewe,
    detailImg: Umkm3,
    name: "Kripik Bawang Istiqomah",
    description: "Kopi dingin yang menyegarkan.",
    whatsapp: "+6281350181715",
    detail:
      "Cold Coffee adalah kopi dingin yang disajikan dengan es untuk menyegarkan hari Anda.",
  },
  {
    id: 4,
    img: KontenLaki,
    detailImg: Umkm4,
    name: "Peyek Hasan",
    whatsapp: "+6285350378844",
  },
  {
    id: 5,
    img: KontenCewe,
    detailImg: Umkm5,
    name: "Kerupuk Mm. Misda",
    whatsapp: "+6285393576648",
  },
  {
    id: 6,
    img: KontenCewe,
    detailImg: Umkm6,
    name: "Olahan Hj. Rachmah",
    whatsapp: "+628125358741",
  },
  {
    id: 7,
    img: KontenLaki,
    detailImg: Umkm7,
    name: "Pempek Bintang",

    whatsapp: "+6285247210003",
  },
  {
    id: 8,
    img: KontenCewe,
    detailImg: Umkm8,
    name: "Akar Sampai Kue Basah",
    whatsapp: "+6281346303336",
  },
  {
    id: 9,
    img: KontenCewe,
    detailImg: Umkm9,
    name: "Cinkruk Ugi Athifah",
    whatsapp: "+6282251337470",
  },
  {
    id: 10,
    img: KontenCewe,
    detailImg: Umkm10,
    name: "Amplang Khairunnisa",
    whatsapp: "+6282250134629",
  },
  {
    id: 11,
    img: KontenLaki,
    detailImg: Umkm11,
    name: "PopCron Basyir",

    whatsapp: "+6281747475515",
  },
  {
    id: 12,
    img: KontenCewe,
    detailImg: Umkm12,
    name: "Olahan Ibu Raihan",
    whatsapp: "+6283140686278",
  },
  {
    id: 13,
    img: KontenCewe,
    detailImg: Umkm13,
    name: "Olahan Kue Ibu Irma",
    whatsapp: "+6282256149184",
  },
  {
    id: 14,
    img: KontenCewe,
    detailImg: Umkm14,
    name: "Pempek dan Kue Mak OlA",
    whatsapp: "+6281347664677",
  },
  {
    id: 15,
    img: KontenCewe,
    detailImg: Umkm15,
    name: "Bumbu Masak 3 Bersaudara",
    whatsapp: "+6281347664677",
  },
  {
    id: 16,
    img: KontenCewe,
    detailImg: Umkm16,
    name: "Bawang Goreng Bu Emmy",
    whatsapp: "+6282154057637",
  },
  {
    id: 17,
    img: KontenCewe,
    detailImg: Umkm17,
    name: "Cemilan Mama Rio",
    whatsapp: "+6281254887601",
  },
  {
    id: 18,
    img: KontenLaki,
    detailImg: Umkm18,
    name: "Keripik Salay Pak Iswadi",
    whatsapp: "+628134726632",
  },
  {
    id: 19,
    img: KontenCewe,
    detailImg: Umkm19,
    name: "Amplang Mama Arjun",
    whatsapp: "+6282350684977",
  },
];



const Services = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <span id="services"></span>
      <div className="py-28">
        <div className="container">
          <div className="text-center mb-10 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              UMKM Muara Jawa Ilir
            </p>
            <h1 className="text-3xl font-bold">Produk Kami</h1>
            <p className="text-base text-gray-400">
              Temukan berbagai produk lezat kami yang dibuat dengan penuh cinta
              dan kualitas terbaik.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] w-full my-4" // Added my-4 for vertical margins
                key={service.id}
              >
                <div className="h-[100px] mb-5 mt-8 flex justify-center items-center">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[250px] block transform -translate-y-8 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-2xl font-bold">{service.name}</h1>
                  <div className="mt-4 flex justify-center gap-4 flex-wrap">
                    <a
                      href={`https://wa.me/${
                        service.whatsapp
                      }?text=${encodeURIComponent(
                        "Hai! Selamat datang. Kami siap membantu Anda. Silakan pesan produk yang Anda inginkan!"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      <FaWhatsapp className="mr-2 text-2xl" />
                      WhatsApp
                    </a>
                    <button
                      onClick={() => openModal(service)}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-800 hover:shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                      <CgArrowsExpandUpRight className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {modalIsOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={closeModal}
              ></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg mx-auto relative z-10">
                {selectedProduct && (
                  <>
                    <h2 className="text-3xl font-bold mb-4">
                      {selectedProduct.name}
                    </h2>
                    <img
                      src={selectedProduct.detailImg}
                      alt={selectedProduct.name}
                      className="w-full max-w-xs mx-auto mb-4"
                      style={{ maxWidth: "200px", height: "auto" }}
                    />

                    <div className="flex flex-col items-center space-y-4">
                      <a
                        href={`https://wa.me/${
                          selectedProduct.whatsapp
                        }?text=${encodeURIComponent(
                          "Hai! Selamat datang. Kami siap membantu Anda. Silakan pesan produk yang Anda inginkan!"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        <FaWhatsapp className="mr-2 text-2xl" />
                        <span>Chat via WhatsApp</span>
                      </a>

                      <button
                        onClick={closeModal}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Close
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Services;
