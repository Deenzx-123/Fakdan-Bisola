import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Story() {
  return (
    <section id="story" className="py-32 bg-white px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl mb-6 font-classic-script text-wedding-teal">Our Love Story</h2>
          <div className="h-[1px] w-24 bg-wedding-orange mx-auto mb-8" />
          <p className="text-stone-500 font-serif italic text-lg lg:text-lg">
            "A journey written by God, beautifully crafted in His perfect timing."
          </p>
        </motion.div>

        <div className="space-y-16 relative">
          {/* Decorative element */}
          <div className="absolute -left-12 -top-12 text-wedding-cream opacity-50 pointer-events-none hidden lg:block">
            <Heart size={200} strokeWidth={0.5} />
          </div>

            <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-stone-700 leading-relaxed font-body text-base md:text-lg"
          >
            <p className="first-letter:text-7xl first-letter:font-fancy first-letter:text-wedding-teal first-letter:float-left first-letter:mr-4 first-letter:mt-2">
              For years, we attended church together, and little did I know that the man I would spend the rest of my life with was someone I had seen so many times within those walls. There was always this unexplainable connection whenever I passed by him — something that quietly drew me closer, even before either of us understood what it meant.
            </p>
            
            <p>
              Then came <span className="text-wedding-teal font-serif italic font-semibold">December 31st</span>, the day we exchanged contacts during the New Year festivities. What began as simple check-ins and casual conversations slowly became something deeper. Day by day, the connection grew stronger, and before we knew it, what started as friendship blossomed into a beautiful love story.
            </p>

            <blockquote className="border-l border-wedding-orange/30 pl-8 md:pl-12 py-6 my-16 bg-wedding-cream/20 italic font-serif text-xl md:text-2xl text-stone-800 relative">
              <span className="absolute -left-4 -top-6 text-6xl text-wedding-orange/20 font-serif">“</span>
              There was always something special about him. His calmness, kindness, sincerity, and the way he carries himself stood out.
            </blockquote>

            <p className="text-stone-700 leading-relaxed">
              As time passed, the love kept growing — from days, to months, and now years. Today, I am blessed to be marrying my handsome <span className="font-serif italic font-bold text-wedding-teal text-xl md:text-2xl mx-1">Fakdan</span>, the man who came into my life and changed so many things for the better.
            </p>

            <p>
              He brought peace, growth, and love into my life. He has taught me so much — how to take better care of my health, how to carry myself with confidence like <span className="italic font-serif">Odogwu’s wife</span>, and how learning a skill is one of life’s greatest opportunities. He has helped shape me into a better version of myself.
            </p>

            <div className="grid md:grid-cols-2 gap-12 py-12 items-center">
              <div className="space-y-6">
                <p>
                  One of the sweetest parts of our journey is how beautifully he learned to adapt. I taught him how to be more romantic, and today, seeing the beautiful man he has become in love makes my heart so full.
                </p>
                <p className="text-wedding-orange font-sans font-bold uppercase tracking-[0.2em] text-[10px]">He has been my greatest gift from God.</p>
              </div>
              <div className="bg-wedding-cream/40 p-10 rounded-[2rem] border border-stone-100 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-wedding-teal/5 rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-500" />
                <p className="text-stone-600 font-serif italic text-center text-xl md:text-xl relative z-10">
                  "Anike pele, sorry babe."
                  <span className="block mt-4 text-xs font-sans not-italic uppercase tracking-widest opacity-50">— His gentle words</span>
                </p>
              </div>
            </div>

            <p>
              He stays by me whenever I am sick, down, or going through difficult moments. He makes sure I am okay, stands by me through every season, and always creates beautiful moments for us, even through simple night outings and quiet conversations.
            </p>

            <p>
              He is not just my partner; he is my safe place, my greatest supporter, my confidant, and a constant reminder that true love still exists. I love him for who he is. I cherish every part of this journey and every beautiful name he calls me — <span className="text-wedding-teal font-serif italic font-semibold">Anike, Annie, Afin 1, My Own Fine Egun, and My Charming Pelebe</span>. Each name carries a piece of our story and reminds me of the love we share.
            </p>

            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center space-x-6 mb-6">
                <div className="h-[1px] w-12 bg-stone-200" />
                <Heart className="text-wedding-orange animate-pulse" size={24} fill="currentColor" />
                <div className="h-[1px] w-12 bg-stone-200" />
              </div>
              <p className="text-2xl md:text-3xl font-serif text-stone-800 italic leading-tight">
                "I already see a beautiful future in him."
              </p>
            </div>

            <p>
              I believe our unborn children are smiling from heaven, saying, “Dad made the best decision with Aunty Bisola.” Thank you, my love, for being the man of my dreams, the one I can laugh with, disturb endlessly, and stay on calls with for hours without getting tired.
            </p>

            <p>
              Together, we have built a foundation rooted in friendship, understanding, patience, faith, and genuine love. Our journey has brought us closer to each other and even closer to God.
            </p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-20 p-12 bg-stone-50 rounded-[3rem] text-center border border-stone-200 shadow-sm"
            >
              <h4 className="text-wedding-teal font-classic-script text-4xl mb-6">Our Forever Prayer</h4>
              <p className="italic text-stone-600 mb-8 font-serif text-xl">
                "I pray our home will be filled with peace, joy, laughter, growth, and endless love. Thank you for choosing me and for loving me wholeheartedly."
              </p>
              <div className="space-y-2">
                <p className="text-stone-800 font-serif text-2xl uppercase tracking-widest">Fakdan & Bisola 2026</p>
                <p className="text-wedding-orange tracking-[0.4em] text-xs font-bold">HERE WE GO</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
