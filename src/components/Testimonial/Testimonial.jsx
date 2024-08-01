import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Andi Prasetya",
    text: "UMKM Muara Jawa Ilir menyediakan produk yang sangat berkualitas dan pelayanan yang memuaskan. Produk mereka selalu segar dan harga yang ditawarkan sangat terjangkau.",
    img: "https://qph.cf2.quoracdn.net/main-qimg-95474603dad2483fa094a55e5e893acf-lq",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    text: "Saya sangat puas dengan produk dari UMKM Muara Jawa Ilir. Kualitasnya sangat baik dan pelayanan pelanggan mereka sangat ramah. Saya pasti akan berbelanja lagi di sini.",
    img: "https://cdn.popmama.com/content-images/community/20211203/community-42a2f604aab99c50d0fbd44f86ee6767.JPG?1638531151",
  },
  {
    id: 3,
    name: "Budi Santoso",
    text: "UMKM Muara Jawa Ilir adalah pilihan yang tepat untuk Anda yang mencari produk lokal berkualitas. Mereka selalu memberikan yang terbaik dan cepat dalam melayani pelanggan.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1kTwDH3NJhn6IS6h6NggvtDEW4z2cDlodQ&s",
  },
  {
    id: 4,
    name: "Agus Priantoro",
    text: "UMKM Muara Jawa Ilir dikenal karena keunikannya dalam menyajikan produk lokal yang berkualitas tinggi. Terletak di daerah dengan kekayaan budaya dan tradisi yang kental, UMKM ini memproduksi berbagai macam produk yang mencerminkan keaslian dan keterampilan lokal. ",
    img: "https://www.superprof.co.id/gambar/guru/rumah-guru-saya-orang-indonesia-asli-menawarkan-belajar-bahasa-indonesia-simple-untuk-orang-asing.jpg",
  },
];


const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <span id="testimonial"></span>
      <div data-aos="fade-up" data-aos-duration="300" className="py-28">
        <div className="container">
          <div className="text-center mb-10 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Apa kata pelanggan kami
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-base text-gray-400">
              Berikut adalah beberapa ulasan dari pelanggan kami
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <img
                        className="rounded-full block mx-auto w-32 h-32 object-cover"
                        src={data.img}
                        alt=""
                      />

                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
