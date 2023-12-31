import React, { useEffect } from "react";

const My_Animated_Btn = () => {
  useEffect(() => {
    const button = document.getElementById("button10");
    const textButton = button.textContent;
    button.textContent = "";

    [...textButton].map((letter, index) => {
      let duration;
      index === 0
        ? (duration = "0.05s")
        : (duration = `${(index + 1) * 0.05}s`);
      let newSpan = document.createElement("span");
      newSpan.classList.add(
        "backface-hidden",
        "not-italic",
        "transition-all",
        "duration-150",
        "ease-linear",
        "transform",
        "group-hover:animate-jump"
      );
      newSpan.style.animationDelay = `${duration}`; // Animation delay
      newSpan.setAttribute("aria-hidden", "true");
      newSpan.innerHTML = `${letter === " " ? "&nbsp;" : letter}`; // Keep space between words

      return button.appendChild(newSpan);
    });
  }, []);

  return (
    <button
      id="button10"
      className="group relative px-5 py-2.5 flex justify-center  rounded-full shadow-lg bg-gradient-to-tr from-stone-600 to-stone-700 hover:from-black hover:to-yellow text-base text-white font-bold tracking-wide transition duration-500 transform hover:-translate-y-1 hover:shadow-2xl active:top-0.5 hover:text-yellow-50 border-4 border-opacity-40 border-black hover:border-white hover:border-4 hover:border-opacity-20 ">
      TALK TO US
    </button>
  );
};

export default My_Animated_Btn;
