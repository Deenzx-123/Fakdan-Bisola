import { motion } from "motion/react";
import { MapPin, Calendar, Clock } from "lucide-react";

export default function Venue() {
  return (
    <section id="venue" className="py-24 bg-stone-100 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 font-classic-script text-wedding-teal">The Wedding Ceremony</h2>
          <div className="h-[1px] w-48 bg-wedding-orange mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Church Ceremony */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-wedding-teal flex flex-col h-full"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-wedding-teal/10 rounded-full text-wedding-teal">
                <MapPin size={24} />
              </div>
              <h3 className="text-2xl font-serif">Church Ceremony</h3>
            </div>
            
            <div className="space-y-4 text-stone-600 flex-grow">
              <p className="text-xl font-medium text-stone-900 italic">CAC OKE ARAROMI</p>
              <p>2/4 Ogundairo street, Oworoshoki, Lagos.</p>
              
              <div className="flex items-center space-x-3 pt-4 border-t border-stone-100">
                <Clock size={18} className="text-wedding-teal" />
                <p className="font-semibold">8:00 AM - 10:00 AM</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar size={18} className="text-wedding-teal" />
                <p>Saturday, 27th June 2026</p>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://www.google.com/maps/place/2,+No+4+Ogundairo+St,+Mushin,+Lagos+105102,+Lagos/@6.5525963,3.3967838,17z/data=!4m5!3m4!1s0x103b8d69d8a66ccd:0x786be4fec70a2fc5!8m2!3d6.552591!4d3.3993587?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-wedding-teal text-white rounded-full hover:bg-wedding-teal/90 transition-all text-sm font-medium w-full text-center"
              >
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Engagement & Reception */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-wedding-orange flex flex-col h-full"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-wedding-orange/10 rounded-full text-wedding-orange">
                <MapPin size={24} />
              </div>
              <h3 className="text-2xl font-serif">Engagement & Reception</h3>
            </div>
            
            <div className="space-y-4 text-stone-600 flex-grow">
              <p className="text-xl font-medium text-stone-900 italic">TA Lagbaja Cantonment Officers Mess</p>
              <p>Via Arena Gate, Barracks Bus Stop (Anthony), and Leventis Bus Stop. Maryland/Ikeja, Lagos.</p>
              
              <div className="flex items-center space-x-3 pt-4 border-t border-stone-100">
                <Clock size={18} className="text-wedding-orange" />
                <p className="font-semibold">10:30 AM - 12:00 Noon</p>
              </div>
              
              <p className="text-sm italic text-stone-400">Reception follows immediately</p>
            </div>

            <div className="mt-8">
              <a 
                href="https://www.google.com/maps/place/TA+Lagbaja+Cantonment/@6.5733437,3.2184951,12z/data=!4m10!1m2!2m1!1sTA+Lagbaja+Cantonment+Officers+Mess!3m6!1s0x103b93004723af03:0xc68962c581172209!8m2!3d6.5733437!4d3.3626907!15sCiNUQSBMYWdiYWphIENhbnRvbm1lbnQgT2ZmaWNlcnMgTWVzc1olIiN0YSBsYWdiYWphIGNhbnRvbm1lbnQgb2ZmaWNlcnMgbWVzc5IBD2hvdXNpbmdfc29jaWV0eZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVOSmIyTjZZMEZSRUFF4AEA-gEFCO4BEDk!16s%2Fg%2F11m6z369dr?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-wedding-orange text-white rounded-full hover:bg-wedding-orange/90 transition-all text-sm font-medium w-full text-center"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-500 font-serif italic">We can't wait to see you there!</p>
        </div>
      </div>
    </section>
  );
}
