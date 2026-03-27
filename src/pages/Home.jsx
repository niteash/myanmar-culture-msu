import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LanguageToggle from "../components/LanguageToggle";

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* 🌐 Language Button */}
      <LanguageToggle />

      {/* 🎥 HERO SECTION */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/poster.jpg"
          className="absolute w-full h-full object-cover"
        >
          <source src="/MSU.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold gold-text"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Myanmar Culture
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Scan • Explore • Experience the heritage of Myanmar
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <a
              href="#explore"
              className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:scale-105 transition"
            >
              Explore
            </a>
          </motion.div>
        </div>
      </div>

      {/* 🌍 EXPLORE SECTION */}
      <div id="explore" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold gold-text text-center mb-16">
          Explore Myanmar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* CARD */}
          {[
            {
              name: "Pagoda",
              link: "pagoda",
              img: "https://cdn.getyourguide.com/img/tour/61adf3975277caaf.jpeg/155.jpg",
            },
            {
              name: "Inle Lake",
              link: "inle",
              img: "https://www.remotelands.com/storage/media/1123/conversions/b130126005-banner-size.jpg",
            },
            {
              name: "Culture",
              link: "culture",
              img: "https://greenglobaltravel.com/wp-content/uploads/2019/10/Image-4_Arakanese-Rakhine-Woman.jpeg",
            },
            {
              name: "Food",
              link: "food",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvX62mZ-8TQYNVtEStrYIX-EboFEvFq-F8Hw&s",
            },
          ].map((item, index) => (
            <Link key={index} to={`/info/${item.link}`}>
              <motion.div
                className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {/* Image */}
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition" />

                {/* Text */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-yellow-400">
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* ✨ FOOTER */}
      <div className="text-center py-10 text-gray-400 text-sm">
        © 2026 Myanmar Cultural Experience
      </div>
    </div>
  );
};

export default Home;
