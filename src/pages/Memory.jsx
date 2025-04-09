import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";

const images = [
  "/pic1.jpg",
  "/pic2.jpg",
  "/pic3.jpg",
  "/pic4.jpg",
  "/pic5.jpg",
  "/pic6.jpg",
  "/pic7.jpg",
  "/pic8.jpg",
  "/pic10.jpg",
  "/pic11.jpg",
  "/pic12.jpg",
  "/pic13.jpg",
  "/pic14.jpg",
  "/pic15.jpg",
  "/pic16.jpg",
  "/pic17.jpg",
  "/pic18.jpg",
];

export default function MemorySlider() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const prevIndex = (current - 1 + images.length) % images.length;
  const nextIndex = (current + 1) % images.length;

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <div className="h-screen bg-[#cdd5b1] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      <h1 className="text-lg md:text-xl font-[prata] text-[rgb(83,46,63)] bg-[#fef6d2] px-4 py-2 rounded-md mb-6">
        OUR BEST MOMENTS
      </h1>

      {/* Decorative icons */}
      <img
        src="/icon10.png"
        alt="icon-left"
        className="absolute top-10 left-4 w-10 h-10 md:left-96 md:top-36 animate-bounce"
      />
      
      {/* Image stack */}
      <div className="relative w-[280px] h-[320px] mb-8">
        {/* Previous photo */}
        <Motion.img
          key={`prev-${prevIndex}`}
          src={images[prevIndex]}
          alt="Previous"
          initial={{ opacity: 0, rotate: -4, scale: 0.95 }}
          animate={{ opacity: 0.6, rotate: -4, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 left-4 w-full h-full object-cover rounded-lg shadow-md z-0"
        />

        {/* Next photo */}
        <Motion.img
          key={`next-${nextIndex}`}
          src={images[nextIndex]}
          alt="Next"
          initial={{ opacity: 0, rotate: 4, scale: 0.95 }}
          animate={{ opacity: 0.6, rotate: 4, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 w-full h-full object-cover rounded-lg shadow-md z-0"
        />

        {/* Main image with animation */}
        <AnimatePresence custom={direction}>
          <Motion.img
            key={current}
            src={images[current]}
            alt="Current"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-xl z-10"
          />
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={handlePrev}
          className="bg-[#fef6d2] px-4 py-1 font-[prata] text-[rgb(83,46,63)] rounded-lg text-md hover:scale-105 transition flex gap-2 items-center"
        >
            <img src="prev.png" alt="" className="w-4 h-4"/>
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-[#fef6d2] px-4 py-1 font-[prata] text-[rgb(83,46,63)] rounded-lg text-md hover:scale-105 transition flex gap-2 items-center"
        >
          Next 
          <img src="next.png" alt="" className="w-4 h-4"/>
        </button>
      </div>

      {/* Home Button */}
      <button
        onClick={() => navigate("/birthday")}
        className="bg-[#fef6d2] px-6 py-2 font-[prata] text-[rgb(83,46,63)] rounded-lg hover:scale-105 transition"
      >
        Back to Home
      </button>
    </div>
  );
}
