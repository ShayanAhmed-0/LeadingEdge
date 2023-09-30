const page = () => {
  return (
    <div> 
    <div className="flex items-center justify-center min-h-screen">
      <section
        // style={{ background: "linear-gradient(to bottom, #685b50, #685b50);" }}
        class="w-4/5 bg-stone-700/90 rounded-xl shadow-xl text-black ">
        <div class="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 class="text-xl font-bold sm:text-4xl lg:text-3xl ">
            Frequently Asked Questions
          </h2>
          <p class="mt-14 mb-8 text-white text-center">
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
    </div>
  );
};

export default page;
