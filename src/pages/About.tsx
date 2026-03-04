import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { teamMembers } from "@/data/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="font-body text-base md:text-lg text-muted-foreground">
            A little spot on Primrose Hill that started with too much flour and not enough shelf space.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6">How it started</h2>
            <div className="font-body text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                The Flour Jar didn't start as a business plan. It started as a Sunday habit —
                the Hargreaves family baking together every weekend, the kitchen always a bit
                floury, the neighbours always finding an excuse to pop round. When the old
                corner unit on Fitzroy Road came up in 2019, it felt less like a risk and
                more like the obvious next thing.
              </p>
              <p>
                Mum handles the baking. Dad handles the coffee — badly at first, brilliantly
                now. The kids grew up behind the counter, which they'll tell you was either
                character-building or mildly traumatic depending on the day. Five years on,
                we're still a family running a café, not a café that happens to be family-run.
                There's a difference, and our regulars feel it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="font-display text-2xl md:text-3xl font-semibold text-center mb-12"
          >
            What we care about
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Made here, not reheated.",
                desc: "Everything on the menu is made in our kitchen, that morning. If we've run out, we've run out — we'd rather that than serve you something that's been sitting around.",
              },
              {
                title: "We know where it's from.",
                desc: "Our flour is stoneground in Gloucestershire. Our eggs come from a small farm in Hertfordshire. We're not precious about it — we just think it tastes better when you know the source.",
              },
              {
                title: "Part of the street, not just on it.",
                desc: "We try to be a place people actually need — a spot to work from on a Tuesday, somewhere to take your mum on her birthday, a reason to leave the house on a grey afternoon.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                className="text-center"
              >
                <h3 className="font-display text-lg font-semibold mb-3">{value.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="font-display text-2xl md:text-3xl font-semibold text-center mb-12"
          >
            The people behind the counter
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                <p className="font-body text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;