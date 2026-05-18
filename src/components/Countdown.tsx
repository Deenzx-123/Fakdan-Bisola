import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Countdown() {
  const targetDate = new Date("2026-06-27T08:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div 
        key={value}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-6xl font-serif text-wedding-teal"
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <span className="text-[10px] md:text-sm uppercase tracking-[0.2em] text-stone-400 mt-2">{label}</span>
    </div>
  );

  return (
    <section className="py-16 bg-white border-y border-stone-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-xl md:text-2xl font-serif italic mb-10 text-stone-600">Counting down to the big day</h3>
        <div className="flex justify-center items-center space-x-6 md:space-x-12">
          <TimeBlock value={timeLeft.days} label="Days" />
          <div className="h-12 w-[1px] bg-wedding-orange/30 self-center hidden md:block" />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <div className="h-12 w-[1px] bg-wedding-orange/30 self-center hidden md:block" />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <div className="h-12 w-[1px] bg-wedding-orange/30 self-center hidden md:block" />
          <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}
