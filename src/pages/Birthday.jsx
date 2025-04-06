import { useNavigate } from "react-router-dom";

export default function Birthday() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen bg-[#cdd5b1] flex flex-col justify-center items-center text-center px-4">
      {/* Top-left icon for mobile */}
      <img
        src="/icon8.png" 
        alt="decor-top-left"
        className="absolute top-2 left-2 w-48 h-48 md:left-24 md:w-60 md:h-56"
      />

      {/* Right-side icon beside heading on mobile */}
      <img
        src="/icon4bal.png" 
        alt="decor-right"
        className="absolute top-[90px] right-1 w-40 h-48 md:right-64 md:w-52 md:h-56"
      />

      {/* Title for mobile (stacked) */}
      <div className="md:hidden text-[#5b3b3b] text-4xl  font-[prata] font-bold mb-12 mr-24 space-y-2">
        <div>HAPPY</div>
        <div>BIRTHDAY</div>
        <div>SANA</div>
      </div>

      {/* Title for desktop (inline) */}
      <h1 className="hidden md:block text-6xl  font-[prata] text-[#5b3b3b] mb-14">
        HAPPY BIRTHDAY SANA
      </h1>


      {/* Buttons */}
      <button
        onClick={() => navigate("/message")}
        className="bg-[#fef6d2] px-6 py-2 rounded-lg text-[rgb(83,46,63)] font-medium mb-4 hover:scale-105 transition flex gap-2">
            <img src="/icon2.png" alt="" className="w-8 h-8" />
        Special Message for you
      </button>

      <button
        onClick={() => navigate("/memory")}
        className="bg-[#fef6d2] px-6 py-1 rounded-lg text-[rgb(83,46,63)] font-medium hover:scale-105 items-center  transition flex gap-2 ">
         <img src="/icons2.png" alt="" className="w-10 h-10" />
         Memory Lane
      </button>
    </div>
  );
}
