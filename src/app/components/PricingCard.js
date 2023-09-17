import React from "react";

const PricingCard = () => {
  const text = "LEADING-EDGE PRODUCT PRICING";
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen p-10 text-black md:p-20">
        <h2 className="text-5xl text-black hite font-bold">
          LEADING-EDGE PRODUCT PRICING
        </h2>

        {/* <!-- Component Start --> */}
        <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
          <div className="flex flex-col flex-grow mt-8 overflow-hidden bg-slate-300 rounded-lg shadow-lg">
            <div className="flex flex-col items-center p-10 bg-custom-bg-1">
              <span className="font-semibold uppercase">
                Responsive Weibsites
              </span>
              <div className="flex items-center">
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold">20</span>
                <span className="text-2xl text-white">/mo</span>
              </div>
            </div>
            <div className="p-10">
              <ul>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 font-semibold">React js</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 font-semibold">Tailwind CSS</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 font-semibold">Node js</span>
                </li>
              </ul>
            </div>
            <div className="flex px-10 pb-10 justfy-center">
              <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 hover:bg-black hover:text-white duration-700 rounded-lg font-bold">
                Join now
              </button>
            </div>
          </div>

          {/* <!-- Tile 2 --> */}
          <div className="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-slate-300 rounded-lg shadow-lg md:scale-110">
            <div className="flex flex-col items-center p-10 bg-custom-bg-2">
              <span className="font-semibold uppercase">Python</span>
              <div className="flex items-center">
                <span className="text-3xl">$</span>
                <span className="text-6xl font-bold">50</span>
                <span className="text-2xl text-white">/mo</span>
              </div>
            </div>
            <div className="p-10">
              <ul>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 font-semibold">Chatbots</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 font-semibold">Python Tools</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 font-semibold">Paraphrasing Apps</span>
                </li>
              </ul>
            </div>
            <div className="flex px-10 pb-10 justfy-center">
              <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 hover:bg-black hover:text-white duration-700 rounded-lg font-bold">
                Join now
              </button>
            </div>
          </div>

          {/* <!-- Tile 3 --> */}
          <div className="flex flex-col flex-grow mt-8 overflow-hidden bg-slate-300 rounded-lg shadow-lg">
            <div className="flex flex-col items-center p-10 bg-gradient-to-l bg-custom-bg-1">
              <span className="font-semibold uppercase">Weibsites Design</span>
              <div className="flex items-center">
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold">99</span>
                <span className="text-2xl text-white">/mo</span>
              </div>
            </div>
            <div className="p-10">
              <ul>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 font-semibold">Html</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 font-semibold">Tailwind CSS</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 font-semibold">JavaScript</span>
                </li>
              </ul>
            </div>
            <div className="flex px-10 pb-10 justfy-center">
              <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 hover:bg-black hover:text-white duration-700 rounded-lg font-bold">
                Join now
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Component End  --> */}
      </div>
    </div>
  );
};

export default PricingCard;
