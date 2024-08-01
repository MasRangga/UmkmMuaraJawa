import React from "react";
import Gif from "../../assets/mobile_bike.gif";

const AppStore = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400">
                Temukan dan Nikmati Produk Unggulan dari UMKM Muara Jawa Ilir
              </h1>
              <p className="text-center sm:text-left text-gray-600 dark:text-gray-300">
                Dapatkan produk berkualitas dari UMKM Muara Jawa Ilir dengan
                penawaran spesial hanya untuk Anda. Belanja mudah, cepat, dan
                aman, langsung dari ponsel Anda.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  onClick={() =>
                    document
                      .getElementById("produk")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Pesan Sekarang
                </button>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="300">
              <img
                src={Gif}
                alt="mobile bike"
                className="w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
