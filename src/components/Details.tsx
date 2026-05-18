import { motion } from "motion/react";
import { Phone, CheckCircle } from "lucide-react";

export default function Details() {
  const rsvpContacts = [
    { name: "Bolaji", phone: "0703 367 7593" },
    { name: "Lukman", phone: "0902 620 2876" },
    { name: "Jeje", phone: "0802 569 5731" }
  ];

  return (
    <section id="details" className="py-24 bg-wedding-teal/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Dress Code */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-4 font-classic-script text-wedding-teal">Dress Code</h2>
              <div className="h-[1px] w-24 bg-wedding-orange mb-6" />
              <p className="text-stone-600 text-lg">
                We would love to see you in our chosen colors for the day:
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white border border-stone-200 shadow-sm" />
                <span className="text-xl font-serif">White</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-wedding-orange shadow-sm" />
                <span className="text-xl font-serif">Burnt Orange</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-wedding-teal shadow-sm" />
                <span className="text-xl font-serif">Teal Green</span>
              </div>
            </div>

            <p className="text-stone-500 italic mt-8 bg-white/50 p-6 rounded-2xl border border-wedding-teal/10">
              "Your presence in our colors will add a special touch to our celebration."
            </p>
          </motion.div>

          {/* RSVP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-stone-200/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-wedding-teal/10">
              <CheckCircle size={120} strokeWidth={0.5} />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-classic-script text-wedding-teal mb-2">RSVP</h2>
              <p className="text-stone-400 font-serif uppercase tracking-widest text-xs mb-8">Kindly respond by June 10th</p>
              
              <div className="space-y-6">
                <p className="text-stone-600">Please reach out to any of the following for confirmation or enquiries:</p>
                
                <div className="space-y-4">
                  {rsvpContacts.map((contact, idx) => (
                    <a 
                      key={idx} 
                      href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                      className="flex items-center justify-between p-4 bg-stone-50 rounded-xl hover:bg-wedding-teal hover:text-white transition-all cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-white rounded-lg text-wedding-teal group-hover:bg-wedding-teal group-hover:text-white">
                          <Phone size={18} />
                        </div>
                        <span className="font-medium">{contact.name}</span>
                      </div>
                      <span className="font-mono text-sm">{contact.phone}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
