import { content } from "../data/content";
import { Link } from "react-router-dom";

const Home = () => {
  const grouped = Object.entries(content).reduce((acc, [id, item]) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push({ id, ...item });
    return acc;
  }, {});

  return (
    <div className="bg-black text-white px-6 py-16">
      <h1 className="text-4xl text-center mb-12">Myanmar Culture</h1>

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-16">
          <h2 className="text-2xl text-yellow-400 mb-6">{category}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link key={item.id} to={`/info/${item.id}`}>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl text-yellow-400">{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
