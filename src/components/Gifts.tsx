import { motion } from "motion/react";
import { Landmark, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Gifts() {
  const [copied, setCopied] = useState(false);
  const accountNumber = "0123456789";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="gifts" className="py-24 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 font-classic-script text-wedding-teal">Registry & Gifts</h2>
          <div className="h-[1px] w-24 bg-wedding-orange mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif text-stone-800 italic">With Gratitude</h3>
            <p className="text-stone-600 text-lg leading-relaxed">
              Your presence at our wedding is the most meaningful gift we could receive. We are truly honored that you are traveling from near and far to celebrate this special day with us.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              However, if you feel inclined to bless our new union with a gift, we would be incredibly grateful for a contribution towards our new home and future together.
            </p>
            <div className="pt-4">
              <p className="text-wedding-teal font-serif italic text-xl">"A gift opens the way and ushers the giver into the presence of the great."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-wedding-orange/5">
              <Landmark size={150} strokeWidth={0.5} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-wedding-orange/10 rounded-xl text-wedding-orange">
                  <Landmark size={24} />
                </div>
                <h4 className="text-2xl font-serif">Account Details</h4>
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-stone-400">Bank Name</span>
                  <p className="text-xl font-medium text-stone-800">GTBank (Guaranty Trust Bank)</p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-stone-400">Account Name</span>
                  <p className="text-xl font-medium text-stone-800">FAKDAN DANIEL & AKANDE BISOLA</p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-stone-400">Account Number</span>
                  <div className="flex items-center justify-between p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <p className="text-2xl font-mono tracking-wider font-semibold text-wedding-teal">{accountNumber}</p>
                    <button 
                      onClick={handleCopy}
                      className="p-2 hover:bg-stone-200 rounded-lg transition-colors text-stone-500"
                      title="Copy to clipboard"
                    >
                      {copied ? <CheckCircle2 size={20} className="text-green-500" /> : <Copy size={20} />}
                    </button>
                  </div>
                  {copied && <p className="text-[10px] text-green-500 font-medium">Copied to clipboard!</p>}
                </div>
              </div>

              <div className="mt-10 p-4 bg-wedding-teal/5 rounded-xl border border-wedding-teal/10">
                <p className="text-sm text-stone-500 italic text-center">
                  Thank you for your love and generosity!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
