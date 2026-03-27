import { motion } from 'framer-motion';
import aboutVibe from '../assets/about-vibe.png';

const About = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white" id="about">
      {/* Premium Clean Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-stone-50/30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-kalika-cream/40 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-200/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Visual Element - Creative Project Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Glow Aura */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-kalika-red/20 to-kalika-blue/20 rounded-[4rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-premium ring-1 ring-stone-100/50 transform group-hover:rotate-1 transition-transform duration-700">
                <img
                  src={aboutVibe}
                  alt="Kalika Sphere Workshop"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-60"></div>

                {/* Elegant Floating Badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 right-8 bg-white/95 p-8 rounded-2xl shadow-premium backdrop-blur-md"
                >
                  <div className="flex flex-col gap-2">
                    <p className="font-display italic text-stone-900 text-2xl md:text-3xl leading-tight">
                      Experience, Express, & Build.
                    </p>
                    <p className="font-sans text-stone-500 text-xs md:text-sm uppercase tracking-[0.2em] font-medium mt-1">Real-life skills, interactive way.</p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Floating Shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-kalika-orange/20 rounded-full blur-xl"
              ></motion.div>
            </div>
          </motion.div>

          {/* Content Element - Highly Attractive Typography */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <h4 className="font-sans text-stone-400 uppercase tracking-[0.3em] text-sm font-semibold mb-6">About Kalika Sphere</h4>

            <h2 className="mb-10">
              <span className="font-sans text-2xl md:text-3xl text-stone-900 font-bold uppercase tracking-[0.15em] block mb-4">
                A World Where
              </span>
              <span className="font-display text-5xl md:text-7xl text-stone-800 italic block leading-[1.15]">
                Kids Learn,<br />Create, and Shine.
              </span>
            </h2>

            <div className="font-sans space-y-6 text-lg text-stone-600 leading-[1.8] font-light">
              <p>
                <strong className="text-stone-900 font-medium">Kalika Sphere</strong> is a vibrant 360° learning space where kids explore, create, and grow with confidence. Inspired by the idea of a “budding beginning,” we provide a nurturing environment where every child’s curiosity is encouraged and their unique talents are discovered.
              </p>

              <div className="pl-8 border-l-[3px] border-kalika-red/40 py-2 my-10">
                <p className="font-display italic text-stone-800 text-2xl md:text-3xl leading-[1.4]">
                  Through fun, hands-on workshops and guided training, children engage in activities that go beyond classroom learning.
                </p>
              </div>

              <p>
                Here, they don’t just learn — they <span className="text-stone-900 font-medium tracking-wide">experience, express, and build</span> real-life skills in an interactive and joyful way. At Kalika Sphere, we focus on developing creativity, confidence, and practical abilities, helping every child evolve into their best self in a safe and inspiring space.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
