"use client"
import Image from "next/image";
import Navbar from "@/layout/navbar/Navbar";
import Footer from "@/layout/footer/Footer";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment, useEffect } from "react";
// import ScrollReveal from "scrollreveal";
import pic1 from "../../public/Avatars/Shayan.jpg"
import pic2 from "../../public/Avatars/haris.jpg"
import pic3 from "../../public/Avatars/Billo.jpg"
import pic4 from "../../public/Avatars/wajid.jpg"
import pic5 from "../../public/Avatars/azlan.jpg"

// const revealConfig = {
//   origin: "left",
//   distance: "120px",
//   duration: 1500,
//   delay: 100,
//   reset: true,
// };
// const revealConfig1 = {
//   origin: "right",
//   distance: "120px",
//   duration: 1500,
//   delay: 100,
//   reset: true,
// };

function Aboutcom() {
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const scrollReveal = ScrollReveal();
  //     scrollReveal.reveal(".hello", revealConfig);
  //     scrollReveal.reveal(".hello1", revealConfig1);
  //   }
  // }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((module) => {
        const ScrollReveal = module.default;
        const scrollReveal = ScrollReveal();

        // Configure your ScrollReveal animations
        const revealConfig = {
          origin: "left",
          distance: "120px",
          duration: 1500,
          delay: 100,
          reset: true,
        };

        const revealConfig1 = {
          origin: "right",
          distance: "120px",
          duration: 1500,
          delay: 100,
          reset: true,
        };

        // Apply ScrollReveal to your elements
        scrollReveal.reveal(".hello", revealConfig);
        scrollReveal.reveal(".hello1", revealConfig1);
      });
    }
  }, []);
  const stats = [
    {
      data: "2K+",
      title: "Customers",
    },
    {
      data: "280",
      title: "Projects Delivered",
    },
    {
      data: "20+",
      title: "Countries",
    },
    {
      data: "20+",
      title: "Team Members",
    },
  ];

  const team = [
    {
      avatar:
     //   "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    pic1, 
     name: "Shayan Ahmed",
      title: "Mern Stack Developer",
      desc: "Meet the backbone of our web development prowess: Shayan Ahmed, our Senior Web Developer, turning ideas into digital excellence.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar: pic2,
        // "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      name: "M. Haris Nadeem",
      title: "Software engineer",
      desc: "Introducing Haris Nadeem, our Software Engineer extraordinaire, crafting innovation one line of code at a time.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:pic3,
        // "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Bilal Hashmi",
      title: "Frontend designer",
      desc: "Meet Bilal Hashmi, our Front-End Developer, shaping stunning user experiences, pixel by pixel.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:pic4,
        // "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "Wajid Ahmed",
      title: "Backend Developer",
      desc: "Say hello to Wajid Ahmed, our Backend Developer, architecting the digital backbone of excellence.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:pic5,
        // "https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1hbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: "Azlan",
      title: "Marketing Manager",
      desc: "Meet Azlan, our Marketing Maestro, shaping our digital presence and amplifying our reach.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
  ];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    // <Image src={team[0].avatar}/>
    <div>
      <div className="overflow-x-hidden overflow-y-hidden ">
        <section className="py-14">
          <div className="max-w-screen-xl mx-auto md:px-8">
            <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
              <div className="flex-1 sm:hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80"
                  className="hello md:max-w-lg sm:rounded-lg"
                  alt=""
                />
              </div>
              <div className="max-w-xl px-4 mt-6 space-y-3 sm:px-0 md:mt-0 ">
                <h3 className="font-semibold text-cyan-300 text-xxl">About Us</h3>
                <p className="font-semibold text-white text-xxl sm:text-4xl">
                  Our Services
                </p>
                <p className="mt-3 text-white/70">
                  Welcome to Leading Edge Web Development Collective, our corner of the digital universe! 
                </p>
                <a
                  onClick={openModal}
                  href="javascript:void(0)"
                  className="inline-flex items-center font-bold duration-150 text-cyan-300 gap-x-1 hover:text-stone-400">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog as="div" className="relative z-10"
                    onClose={closeModal}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex items-center justify-center min-h-full p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95">
                          <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-500 to-stone-800 shadow-2xl rounded-2xl">
                            <Dialog.Title
                              as="h3"
                              className="font-semibold leading-6 text-x text-cyan-300">
                              Our Services
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="mt-8 text-sm text-white">
                                Our journey began as a shared dream, one that envisioned a collaborative space where creativity knows no bounds and innovation thrives. As a diverse group of talented individuals, we have come together under the banner of Leading Edge to offer you a symphony of skills, each note harmonizing to craft unique, tailor-made solutions for your web-related needs.
                              </p>
                            </div>

                            <div className="flex justify-center mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-bold text-black border border-transparent rounded-md shadow-xl bg-cyan-300 hover:bg-black/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 "
                                onClick={closeModal}
                              >
                                Got it, thanks!
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </div>
            </div>
          </div>
        </section>
        <hr className="w-4/5 mx-auto" />
        <section className="py-14">
          <div className="justify-between max-w-screen-xl px-4 mx-auto text-gray-600 gap-x-12 md:px-8 lg:flex">
            <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
              <h3 className="text-xl font-semibold text-white sm:text-4xl">
                Delighting Customers is Our Passion
              </h3>
              <p className="max-w-xl mx-auto mt-16 text-white/70 lg:mx-0">
                At Leading Edge Web Development Collective, our unwavering commitment is to ensure that every interaction with us leaves our customers not just satisfied, but absolutely delighted. We thrive on going above and beyond, constantly pushing the boundaries of excellence to make your experience with us a truly exceptional one. Your happiness is our driving force, and we take immense pride in delivering web development solutions that not only meet your expectations but surpass them. Join us on a journey where satisfaction is not enough – we are here to make you genuinely happy.


              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <ul className="flex flex-col items-start justify-center divide-y hello1 gap-x-12 sm:divide-y-0 sm:flex-row lg:grid lg:grid-cols-2">
                {stats.map((item, idx) => (
                  <li
                    key={idx}
                    className="w-full px-4 py-6 text-center sm:w-auto lg:py-4">
                    <h4 className="font-semibold text-cyan-300 text-xxl">
                      {item.data}
                    </h4>
                    <p className="mt-3 font-medium text-white/70">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <hr className="w-4/5 mx-auto" />
        <section className="overflow-y-hidden py-14 ">
          <div className="px-4 mx-auto md:px-8">
            <div className="">
              <h3 className="text-xl font-semibold text-center text-white sm:text-4xl">
                Meet our talent team
              </h3>
              <p className="mt-12 text-center text-white/70 ">
                Discover our remarkable web development squad, a fusion of creativity and unwavering commitment:
              </p>
            </div>
            <div className="mt-24 ">
              <ul className="grid gap-8 hello lg:grid-cols-2">
                {team.map((item, idx) => (
                  <li key={idx} className="gap-8 sm:flex">
                    <div className="w-3/5 h-50">
                      <Image
                      width={400}
                      height={400}
                        src={item.avatar}
                        className="object-cover object-center w-full h-full shadow-md rounded-xl"
                        alt=""
                      />
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <h4 className="font-semibold text-white text-h_1">
                        {item.name}
                      </h4>
                      <p className="mt-2 text-cyan-300">{item.title}</p>
                      <p className="mt-8 text-white/70">{item.desc}</p>
                      <div className="flex gap-4 mt-3 text-gray-400">
                        {/* <a href={item.twitter}>
                          <svg
                            className="w-5 h-5 duration-150 hover:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 48 48">
                            <g clip-path="url(#clip0_17_80)">
                              <path
                                fill="currentColor"
                                d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_17_80">
                                <path fill="currentColor" d="M0 0h48v48H0z" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                        <a href={item.github}>
                          <svg
                            className="w-5 h-5 duration-150 hover:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 48 48">
                            <g fill="currentColor" clip-path="url(#clip0_910_44)">
                              <path
                                fill-rule="evenodd"
                                d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                                clip-rule="evenodd"
                              />
                              <path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" />
                            </g>
                            <defs>
                              <clipPath id="clip0_910_44">
                                <path fill="currentColor" d="M0 0h48v48H0z" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                        <a href={item.linkedin}>
                          <svg
                            className="w-5 h-5 duration-150 hover:text-gray-500"
                            fill="none"
                            viewBox="0 0 48 48">
                            <g clip-path="url(#clip0_17_68)">
                              <path
                                fill="currentColor"
                                d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_17_68">
                                <path fill="currentColor" d="M0 0h48v48H0z" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a> */}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Aboutcom;
