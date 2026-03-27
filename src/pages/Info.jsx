import { useParams } from "react-router-dom";
import { content } from "../data/content";
import { motion } from "framer-motion";

const Info = () => {
  const { topic } = useParams();
  const data = content[topic];

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl">
        Not Found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={data.heroImage}
          className="w-full h-full object-cover opacity-70"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-yellow-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {data.title}
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl mt-4 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {data.subtitle}
          </motion.p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {data.sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              {section.heading}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {section.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Info;
