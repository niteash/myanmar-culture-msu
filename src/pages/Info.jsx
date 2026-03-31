import { useParams } from "react-router-dom";
import { content } from "../data/content";
import { motion } from "framer-motion";

const Info = () => {
  const { id } = useParams();
  const data = content[id];

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        Not Found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* 🔥 HERO SECTION */}
      <div className="relative h-[80vh] overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

        {/* Title */}
        <div className="absolute bottom-20 left-6 md:left-20 max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-yellow-400"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {data.title}
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {data.subtitle}
          </motion.p>
        </div>
      </div>

      {/* 📜 CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Accent line */}
        <div className="w-20 h-1 bg-yellow-400 mb-10" />

        {/* Description */}
        <motion.div
          className="text-lg md:text-xl leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          dangerouslySetInnerHTML={{ __html: data.description }}
        />

        <ul className="mt-6 list-disc pl-6 text-gray-300 space-y-2">
          {data.points?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {/* multple images */}
        {/* 🖼️ Images Section */}
        <div className="mt-16 space-y-10">
          {/* ✅ Single Image */}
          {data.detailed_image && (
            <motion.img
              src={data.detailed_image}
              alt={data.title}
              className="w-full max-h-[900px] object-cover rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            />
          )}

          {/* ✅ Multiple Images */}
          {data.detailed_images && data.detailed_images.length > 0 && (
            <div className="grid grid-cols-1  gap-6">
              {data.detailed_images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`${data.title}-${index}`}
                  className="w-full h-full object-contain rounded-xl shadow-lg hover:scale-105 transition"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                />
              ))}
            </div>
          )}
        </div>
        {/* Highlight Section */}
        <motion.div
          className="mt-16 p-6 border border-yellow-400 rounded-xl bg-white/5 backdrop-blur-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h3 className="text-yellow-400 text-xl mb-2">Cultural Importance</h3>

          <p className="text-gray-300">
            This element represents an important part of Myanmar’s heritage,
            connecting knowledge, tradition, and identity across generations.
          </p>
        </motion.div>
      </div>

      {/* 🔙 BACK BUTTON */}
      <div className="fixed top-6 left-6">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-black/50 border border-white/20 rounded-full text-sm backdrop-blur-md hover:scale-105 transition"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default Info;
