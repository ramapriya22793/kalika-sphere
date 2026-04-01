import { motion } from 'framer-motion';
import kidsLabImg from '../assets/kids-lab.png';
import proLabsImg from '../assets/pro-labs.png';

interface LabsSectionProps {
  setCurrentView?: (view: 'home' | 'programs' | 'pro-programs' | 'gallery' | 'enroll' | 'summer-workshop') => void;
}

const LabsSection = ({ setCurrentView }: LabsSectionProps) => {
  const labs = [
    {
      id: 'kids-lab',
      title: 'Kids Lab',
      subtitle: 'Exploration & Play',
      description: 'A magical space for early learners to discover science, art, and nature through joyful sensory experiences.',
      image: kidsLabImg,
      color: 'bg-kalika-orange',
      age: '4-10 Years',
      features: ['Sensory Play', 'Mini Science', 'Creative Arts']
    },
    {
      id: 'pro-labs',
      title: 'Pro Lab',
      subtitle: 'Skill & Innovation',
      description: 'Advanced workshops designed to build real-world skills in technology, robotics, and advanced craftsmanship.',
      image: proLabsImg,
      color: 'bg-kalika-red',
      age: '11-14 Years',
      features: ['Tech & Coding', '3D Building', 'Leadership']
    }
  ];

  return (
    <section className="py-24 bg-kalika-cream/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Our Learning Labs</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">Different stages of growth, tailored experiences that inspire every age group.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {labs.map((lab, index) => (
            <motion.div
              key={lab.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card rounded-[2.5rem] overflow-hidden hover-lift h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={lab.image} alt={lab.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute top-6 left-6 ${lab.color} text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg`}>
                    {lab.age}
                  </div>
                </div>
                
                <div className="p-10 flex-grow">
                  <h4 className="text-kalika-red font-bold uppercase tracking-widest text-xs mb-2">{lab.subtitle}</h4>
                  <h3 className="text-3xl font-bold text-stone-900 mb-4 group-hover:text-kalika-red transition-colors">{lab.title}</h3>
                  <p className="text-stone-600 text-lg mb-8 leading-relaxed">{lab.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {lab.features.map(feature => (
                      <span key={feature} className="bg-stone-100 text-stone-600 px-3 py-1 rounded-lg text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => {
                      if (setCurrentView) {
                        if (lab.id === 'kids-lab') {
                          setCurrentView('programs');
                          window.scrollTo(0, 0);
                        } else if (lab.id === 'pro-labs') {
                          setCurrentView('pro-programs');
                          window.scrollTo(0, 0);
                        }
                      }
                    }}
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all border-2 ${lab.id === 'pro-labs' ? 'bg-kalika-red text-white border-kalika-red hover:bg-transparent hover:text-kalika-red' : 'bg-transparent text-kalika-orange border-kalika-orange hover:bg-kalika-orange hover:text-white'}`}
                  >
                    View Programs
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabsSection;
