import { motion, AnimatePresence } from "motion/react";
import { Camera, X } from "lucide-react";
import { useState, useRef } from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "image" | "video";
  url: string;
  thumbnail?: string;
}

const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "The Beginning",
    title: "Where it all started",
    description:
      "Every great story has a prologue. These are the moments before we knew 'us' would become 'forever'.",
    type: "image",
    url: "https://res.cloudinary.com/duifc9pn2/image/upload/v1779130237/F_B_1_gnfhqj.jpg",
  },
  {
    year: "Adventures",
    title: "Side by Side",
    description:
      "Exploring the world is better when I'm holding your hand. Random days turned into our favorite memories.",
    type: "image",
    url: "https://res.cloudinary.com/duifc9pn2/image/upload/v1779131047/F_B_4_q8zdnx.jpg",
  },
  {
    year: "Little Things",
    title: "Quiet Moments",
    description:
      "It wasn't just the big events, but the simple laughs and the way you look at me when no one is watching.",
    type: "image",
    url: "https://res.cloudinary.com/duifc9pn2/image/upload/v1779132284/F_B_6_xp3mv1.jpg",
  },
  {
    year: "The Bond",
    title: "Two Hearts, One Soul",
    description:
      "Building a life together, one smile at a time. This is the rhythm of our shared journey.",
    type: "video",
    url: "https://res.cloudinary.com/duifc9pn2/video/upload/v1779130499/F_B_2_iersex.mp4",
    thumbnail: "https://res.cloudinary.com/duifc9pn2/image/upload/v1779131357/F_B_5_whnnbj.jpg",
  },
  {
    year: "The Promise",
    title: "Yes to Forever",
    description:
      "The moment that changed everything. A simple question, an ecstatic answer, and the start of our countdown.",
    type: "video",
    url: "https://res.cloudinary.com/duifc9pn2/video/upload/v1779132844/F_B_7_kwg44x.mp4",
    thumbnail: "https://res.cloudinary.com/duifc9pn2/image/upload/v1779131357/F_B_5_whnnbj.jpg",
  },
];

// Inline video card — autoplays, muted, loops, stays inside its frame
function VideoCard({
  event,
  onClick,
}: {
  event: TimelineEvent;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer aspect-video"
      onClick={onClick}
    >
      {/* The video itself — fills the frame, never overflows */}
      <video
        ref={videoRef}
        src={event.url}
        poster={event.thumbnail}
        autoPlay
        muted
        loop
        playsInline          // required on iOS so it doesn't go fullscreen automatically
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Subtle dark gradient at bottom so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* "Click to watch fullscreen" hint on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="px-5 py-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-sm font-serif italic">
          Watch fullscreen
        </div>
      </div>

      {/* Camera icon top-right */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <Camera size={16} className="text-wedding-teal" />
      </div>
    </motion.div>
  );
}

// Image card — same shape and size as the video card
function ImageCard({
  event,
  onClick,
}: {
  event: TimelineEvent;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer aspect-video"
      onClick={onClick}
    >
      <img
        src={event.url}
        alt={event.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <Camera size={16} className="text-wedding-teal" />
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const [activeMedia, setActiveMedia] = useState<TimelineEvent | null>(null);

  return (
    <section id="journey" className="py-24 px-6 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-4 font-classic-script text-wedding-teal text-balance">
            The Scrapbook of Us
          </h2>
          <div className="h-[1px] w-24 bg-wedding-orange mx-auto mb-6" />
          <p className="text-stone-500 font-serif italic max-w-2xl mx-auto leading-relaxed">
            A collection of random moments, laughs, and memories that tell the
            story of how we became Fakdan & Bisola.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-stone-200 hidden md:block" />

          <div className="space-y-16 md:space-y-32">
            {TIMELINE_DATA.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content */}
                <div className="w-full md:w-[42%] text-center md:text-left space-y-4">
                  <div
                    className={`flex items-center justify-center md:justify-start space-x-3 mb-2 text-wedding-orange ${
                      idx % 2 === 0
                        ? "md:flex-row-reverse md:space-x-reverse"
                        : ""
                    }`}
                  >
                    <span className="text-xs uppercase tracking-[0.4em] font-sans font-semibold">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-3xl font-serif text-stone-800">
                    {event.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed font-body italic text-lg">
                    "{event.description}"
                  </p>
                </div>

                {/* Center Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-wedding-orange z-10 shadow-[0_0_15px_rgba(234,179,8,0.3)]" />
                </div>

                {/* Media Card */}
                <div className="w-full md:w-[45%]">
                  {event.type === "video" ? (
                    <VideoCard
                      event={event}
                      onClick={() => setActiveMedia(event)}
                    />
                  ) : (
                    <ImageCard
                      event={event}
                      onClick={() => setActiveMedia(event)}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fullscreen Modal — opens when you click any card */}
        <AnimatePresence>
          {activeMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] bg-black/98 flex items-center justify-center p-4 md:p-12 backdrop-blur-lg"
              onClick={() => setActiveMedia(null)}
            >
              <button
                className="absolute top-6 right-6 md:top-12 md:right-12 text-white/70 hover:text-white p-3 z-[1010] bg-white/10 hover:bg-white/20 rounded-full transition-all"
                onClick={() => setActiveMedia(null)}
              >
                <X size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {activeMedia.type === "video" ? (
                  <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
                    <video
                      src={activeMedia.url}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src={activeMedia.url}
                    alt={activeMedia.title}
                    className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/5"
                    referrerPolicy="no-referrer"
                  />
                )}

                <div className="mt-10 text-center text-white max-w-2xl px-6">
                  <span className="text-wedding-orange tracking-[0.4em] uppercase text-xs mb-3 block font-sans font-bold">
                    {activeMedia.year}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif mb-4 italic">
                    {activeMedia.title}
                  </h3>
                  <p className="text-stone-400 font-body italic text-lg leading-relaxed">
                    "{activeMedia.description}"
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
