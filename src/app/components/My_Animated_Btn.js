
import React, { useEffect } from 'react'


const My_Animated_Btn = () => {
  
  useEffect(() => {
    const button = document.getElementById("button10")
    const textButton = button.textContent
    button.textContent = "";
    
    [...textButton].map((letter, index) => {
      let duration
      index === 0 ? duration = "0.05s" : duration = `${(index + 1) * 0.05}s`
      let newSpan = document.createElement("span")
      newSpan.classList.add("backface-hidden", "not-italic", "transition-all", "duration-150", "ease-linear", "transform", "group-hover:animate-jump")
      newSpan.style.animationDelay = `${duration}` // Animation delay
      newSpan.setAttribute("aria-hidden", "true")
      newSpan.innerHTML = `${letter === " " ? "&nbsp;" : letter}` // Keep space between words

      return button.appendChild(newSpan)
    })
  }, [])

  return (
    <button id="button10" className="group relative px-5 py-2.5 flex justify-center outline-none border-none rounded shadow-lg bg-gradient-to-br from-gray-500 to-blue-800 hover:from-blue-600 hover:to-gray-400 text-base text-white tracking-wide transition duration-500 transform hover:-translate-y-1 hover:shadow-2xl active:top-0.5">
      Bouton 10
    </button>
  )
}

export default My_Animated_Btn
