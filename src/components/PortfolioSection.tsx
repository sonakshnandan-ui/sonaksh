import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Web Design", "App", "Branding"];

const portfolioItems = [
  { title: "Modern Website", category: "Web Design", color: "174 72% 50%" },
  { title: "Mobile App UI", category: "App", color: "210 60% 50%" },
  { title: "Brand Identity", category: "Branding", color: "340 70% 55%" },
  { title: "Dashboard Design", category: "Web Design", color: "250 60% 55%" },
  { title: "E-Commerce App", category: "App", color: "30 80% 55%" },
  { title: "Logo Design", category: "Branding", color: "140 55% 45%" },
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="py-20 px-6 bg-section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">My creative showcase</p>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-lg overflow-hidden aspect-[4/3] cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, hsl(${item.color} / 0.3), hsl(${item.color} / 0.1))`,
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-foreground font-heading font-semibold mb-1">
                    {item.title}
                  </h3>
                  <span className="text-muted-foreground text-xs">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
