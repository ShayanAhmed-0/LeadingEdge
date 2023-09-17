import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <section
        style={{ background: "linear-gradient(to bottom, #988276, #8a645f);" }}
        class="w-4/5 rounded-xl shadow-xl text-gray-800">
        <div class="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 class="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p class="mt-4 mb-8 text-white text-center">
            <strong>Unleash the Power of Technology:</strong> Your Comprehensive
            Guide to Software Solutions and Beyond
          </p>
          <div class="space-y-4">
            <details class="w-full border-4 border-black rounded-lg">
              <summary class="font-semibold px-4 py-6 focus:outline-none focus-visible:ri hover:cursor-pointer text-slate-100">
                What services does your software company provide?
              </summary>
              <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                We provide a wide range of services, including web development,
                mobile app development, cloud solutions, software integration,
                legacy system modernization, and more. Our goal is to offer
                comprehensive software solutions tailored to your needs.{" "}
              </p>
            </details>
            <details class="w-full border-4 border-black rounded-lg">
              <summary class="text-slate-100 hover:cursor-pointer px-4 py-6 focus:outline-none focus-visible:ri font-semibold">
                Do you offer both web and mobile app development services?
              </summary>
              <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                Yes, we offer comprehensive web and mobile app development
                services. Our teams excel in creating responsive web
                applications and native or cross-platform mobile apps.{" "}
              </p>
            </details>
            <details class="w-full border-4 border-black rounded-lg">
              <summary class="text-slate-100 hover:cursor-pointer px-4 py-6 focus:outline-none focus-visible:ri font-semibold">
                How can my business benefit from your software solutions?
              </summary>
              <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                Our software solutions are designed to improve efficiency,
                reduce costs, and drive growth. By leveraging cutting-edge
                technology and industry expertise, we help businesses streamline
                operations and achieve their goals.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
