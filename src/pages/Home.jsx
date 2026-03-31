import { content } from "../data/content";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const grouped = Object.entries(content).reduce((acc, [id, item]) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push({ id, ...item });
    return acc;
  }, {});

  return (
    <div className="bg-black text-white">
      {/* 🖼️ HERO IMAGE SECTION */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="/preview.jpeg"
          alt="Myanmar Culture"
          className="absolute w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Myanmar Culture
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            A journey through tradition, education, and innovation — from
            ancient manuscripts to AI-powered future.
          </motion.p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 animate-bounce text-gray-400 text-sm">
            ↓ Scroll
          </div>
        </div>
      </div>
      {/* 📚 CONTENT SECTION */}
      <div className="px-6 md:px-16 py-20">
        {Object.entries(grouped).map(([category, items], i) => (
          <motion.div
            key={category}
            className="mb-24"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {/* Category Title */}
            <h2 className="text-3xl font-semibold text-yellow-400 mb-10 border-l-4 border-yellow-400 pl-4">
              {category}
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {items.map((item) => (
                <Link key={item.id} to={`/info/${item.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative h-72 rounded-2xl overflow-hidden group"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 p-5">
                      <h3 className="text-xl font-semibold text-yellow-400">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 border border-white/10 group-hover:border-yellow-400/40 transition rounded-2xl" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
