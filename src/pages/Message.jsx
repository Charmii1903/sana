import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Message() {
  const navigate = useNavigate();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = "MySnipperhehe"; // change this to your actual password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-[#cdd5b1] flex flex-col justify-center items-center text-center px-6 py-8 relative">
      {/* Icons */}
      <img
        src="/icons6.png"
        alt="decor-top-left"
        className="absolute top-2 left-9 w-20 h-20 md:left-44 md:w-32 md:h-32"
      />
      <img
        src="/icon7.png"
        alt="decor-right"
        className="absolute top-[100px] right-1 w-20 h-20 md:right-125 md:top-[188px] md:w-24 md:h-24"
      />

      {/* Password prompt */}
      {!isAuthenticated ? (
        <form
          onSubmit={handleSubmit}
          className="bg-[#fef6d2] p-6 rounded-lg shadow-md max-w-sm"
        >
          <h2 className="mb-4 text-lg font-semibold text-[rgb(83,46,63)] font-[prata]">
            Enter the secret password 💌
          </h2>
          <input
            type="password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            placeholder="Password"
            className="p-2 rounded-md border w-full mb-4"
            required
          />
          <button
            type="submit"
            className="bg-[rgb(83,46,63)] text-[#fef6d2] px-4 py-2 rounded-md hover:scale-105 transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <>
          {/* Message content after password is verified */}
          <div className="bg-[#fef6d2] p-4 rounded-lg shadow-md max-w-md mt-12">
            <p className="mb-4 text-lg py-4 text-[rgb(83,46,63)] font-[prata]">
              Happiest Birthday my loveee ❤️. Thank you for always being by my side,
              supporting me, and inspiring me in every way. You deserve all the
              happiness in the world, and I hope this year brings you endless joy
              and success. And remember, I’m always just a call away whenever you
              need me. Love you to the moon and back 🫂❤️
            </p>
          </div>

          <img
            src="/icon1.png"
            alt="decor-bottom-left"
            className="absolute bottom-6 left-9 w-24 h-24 md:left-96 md:w-44 md:h-44"
          />

          <button
            onClick={() => navigate("/birthday")}
            className="bg-[#fef6d2] px-6 py-3 rounded-lg text-[rgb(83,46,63)] mt-4 font-[prata] text-md hover:scale-105 transition"
          >
            Go back
          </button>
        </>
      )}
    </div>
  );
}
