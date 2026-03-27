import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 px-8" id="register">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-kalika-red via-kalika-red to-[#FF8E8E] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-black/5 rounded-full -mr-24 -mb-24"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Start Your Child’s Learning <br className="hidden md:block" /> Journey Today
          </h2>
          <p className="text-xl text-red-50 mb-12 max-w-2xl mx-auto opacity-90">
            Join the Kalika Sphere family and watch your child explore their creative potential in a nurturing environment.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-white text-kalika-red px-10 py-5 rounded-full font-extrabold text-xl hover:bg-kalika-cream transition-all shadow-xl hover:scale-105 active:scale-95">
              Register Now
            </button>
            <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
