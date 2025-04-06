import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const floatingIcons = [
  {
    src: "/icons6.png",
    mobile: { top: "5%", left: "10%" },
    desktop: { top: "10%", left: "5%" },
  },
  {
    src: "/icons7.png",
    mobile: { top: "15%", left: "75%" },
    desktop: { top: "30%", left: "80%" },
  },
  {
    src: "/icon9.png",
    mobile: { top: "65%", left: "15%" },
    desktop: { top: "70%", left: "20%" },
  },
  {
    src: "/icon10.png",
    mobile: { top: "80%", left: "6 0%" },
    desktop: { top: "70%", left: "60%" },
  },
  {
    src: "/icons3.png",
    mobile: { top: "25%", left: "35%" },
    desktop: { top: "20%", left: "40%" },
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative overflow-hidden h-screen w-screen bg-[#cdd5b1] flex flex-col justify-center items-center text-center px-4"
    >
      {/* Floating icons */}
      {floatingIcons.map((icon, idx) => (
        <Motion.img
          key={idx}
          src={icon.src}
          alt=""
          className="w-10 h-10 absolute"
          style={{
            top: window.innerWidth < 768 ? icon.mobile.top : icon.desktop.top,
            left: window.innerWidth < 768 ? icon.mobile.left : icon.desktop.left,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4 + idx,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content */}
      <h1 className="mb-4 font-[prata] text-[rgb(83,46,63)] text-3xl md:text-5xl">
        HELLOO SANA,
      </h1>
      <p className="mb-6 text-[rgb(83,46,63)] font-[prata] text-lg md:text-xl">
        Guess what, I have a surprise for you, are you ready?
      </p>
      <Motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/birthday")}
        className="bg-[#fffecd] px-10 py-2 text-lg font-[prata] rounded-lg text-[rgb(83,46,63)] font-medium transition"
      >
        Surprise 👀
      </Motion.button>
    </Motion.div>
  );
}
