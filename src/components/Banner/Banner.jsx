import React from "react";
import Konten1 from "../../assets/Konten1.png"
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="min-h-screen" id="2">
        <div className="min-h-screen flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {/* Image section */}
              <div>
                <img
                  src={Konten1}
                  alt="Konten1"
                  className="max-w-[430px] w-full mx-auto "
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Tentang UMKM Muara Jawa Ilir
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  Selamat datang di UMKM Muara Jawa Ilir. Kami menyediakan
                  berbagai produk berkualitas dengan layanan terbaik.
                  <br />
                  <br />
                  UMKM Muara Jawa Ilir berkomitmen untuk memberikan kepuasan
                  kepada pelanggan dengan menawarkan produk-produk yang
                  berkualitas dan layanan yang profesional. Kami terus berusaha
                  untuk memenuhi kebutuhan Anda dengan standar tertinggi.
                </p>
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
