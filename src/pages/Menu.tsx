import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { menuData } from "@/data/siteData";

const tagColors: Record<string, string> = {
  V: "bg-accent/20 text-accent",
  VE: "bg-accent/20 text-accent",
  GF: "bg-warm-terracotta/20 text-warm-terracotta",
};

const MenuPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="font-body text-base md:text-lg text-muted-foreground">
            Everything's made from scratch, every morning. If it's on the board, it's fresh today.
          </p>
          <div className="flex justify-center gap-4 mt-6 font-body text-xs uppercase tracking-wider text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" /> V — Vegetarian
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" /> VE — Vegan
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-warm-terracotta" /> GF — Gluten Free
            </span>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {menuData.map((category, ci) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.05, duration: 0.4 }}
              className="mb-14 last:mb-0"
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6 border-b border-border pb-3">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between gap-4 group">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display text-base font-semibold">{item.name}</h3>
                        {item.tags?.map((tag) => (
                          <span
                            key={tag}
                            className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-body font-semibold uppercase tracking-wider ${tagColors[tag] || ""}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-body text-sm font-semibold text-primary whitespace-nowrap pt-0.5">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
