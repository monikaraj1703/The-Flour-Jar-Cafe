import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { openingHours } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Got it — thanks!", description: "We'll get back to you within a day or two." });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Come Find Us</h1>
          <p className="font-body text-base md:text-lg text-muted-foreground">
            We're on Fitzroy Road in Primrose Hill — between the bookshop and the florist.
            On a good morning, you'll smell the baking before you see the sign.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h2 className="font-display text-xl font-semibold">Address</h2>
                  </div>
                  <address className="font-body text-base not-italic text-muted-foreground leading-relaxed pl-8">
                    14 Fitzroy Road<br />
                    Primrose Hill, London NW1 8TX
                  </address>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <h2 className="font-display text-xl font-semibold">Phone</h2>
                  </div>
                  <a href="tel:+442071234567" className="font-body text-base text-muted-foreground pl-8 hover:text-primary transition-colors">
                    020 7123 4567
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <h2 className="font-display text-xl font-semibold">Email</h2>
                  </div>
                  <a href="mailto:hello@theflourjar.co.uk" className="font-body text-base text-muted-foreground pl-8 hover:text-primary transition-colors">
                    hello@theflourjar.co.uk
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <h2 className="font-display text-xl font-semibold">Opening Hours</h2>
                  </div>
                  <div className="space-y-2 pl-8">
                    {openingHours.map((row) => (
                      <div key={row.day} className="flex justify-between font-body text-base max-w-xs">
                        <span className="font-medium text-foreground">{row.day}</span>
                        <span className="text-muted-foreground">{row.hours}</span>
                      </div>
                    ))}
                    <p className="font-body text-sm text-muted-foreground pt-2">
                      Kitchen closes 30 minutes before we do. Last coffee is always on time though.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 rounded-lg overflow-hidden border aspect-video bg-muted">
                <iframe
                  title="The Flour Jar location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.7!2d-0.1631!3d51.5393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMyJzIxLjUiTiAwwrAwOSc0Ny4yIlc!5e0!3m2!1sen!2suk!4v1"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-display text-2xl font-semibold mb-2">Drop Us a Line</h2>
              <p className="font-body text-sm text-muted-foreground mb-8">
                Planning an event, need catering, or want to order in bulk? Fill this in and someone from the family will get back to you — usually within a day.
                For quick questions, calling is faster.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="font-body">Your name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-body">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="font-body">What's it about?</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Catering, a private event, something else..."
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="font-body">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Tell us what you need and we'll go from there..."
                    className="mt-1.5"
                  />
                </div>
                <Button type="submit" className="w-full uppercase tracking-wider font-body">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;