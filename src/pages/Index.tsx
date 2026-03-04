import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { featuredItems, openingHours } from "@/data/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&h=900&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative container mx-auto px-4 md:px-6 py-32 md:py-48 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4"
          >
            The Flour Jar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto"
          >
            A family café on Primrose Hill. Baked fresh every morning, open every day except when we're not.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/menu"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              See the Menu
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md border-2 border-primary-foreground/60 text-primary-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
            >
              Find Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6"
          >
            Just a good local café
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="font-body text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            We're a family who started baking on weekends and somehow ended up with a café.
            Everything on the menu is made here, that morning. We know where our ingredients
            come from because we chose them. And we keep the music low enough that you can
            actually hear the person sitting across from you.
          </motion.p>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="font-display text-3xl md:text-4xl font-semibold text-center mb-4"
          >
            A few things worth ordering
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="font-body text-base text-muted-foreground text-center mb-12 max-w-md mx-auto"
          >
            These are the ones people come back for. Full menu's inside.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, i) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                className="group rounded-lg overflow-hidden bg-background shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-1">{item.name}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours & Find Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Hours */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <h2 className="font-display text-2xl font-semibold">When we're open</h2>
              </div>
              <div className="space-y-3">
                {openingHours.map((row) => (
                  <div key={row.day} className="flex justify-between font-body text-base border-b border-border pb-3">
                    <span className="font-medium">{row.day}</span>
                    <span className="text-muted-foreground">{row.hours}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground mt-4">
                Kitchen closes 30 minutes before closing. We close on bank holidays — check our door for notices.
              </p>
            </motion.div>

            {/* Find Us */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <h2 className="font-display text-2xl font-semibold">Where we are</h2>
              </div>
              <address className="font-body text-base not-italic text-muted-foreground leading-relaxed mb-4">
                14 Fitzroy Road<br />
                Primrose Hill, London NW1 8TX
              </address>
              <div className="flex items-center gap-2 font-body text-base text-muted-foreground mb-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+442071234567" className="hover:text-primary transition-colors">020 7123 4567</a>
              </div>
              <div className="mt-6 rounded-lg overflow-hidden border aspect-video bg-muted flex items-center justify-center">
                <iframe
                  title="The Flour Jar location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.7!2d-0.1631!3d51.5393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMyJzIxLjUiTiAwwrAwOSc0Ny4yIlc!5e0!3m2!1sen!2suk!4v1"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;