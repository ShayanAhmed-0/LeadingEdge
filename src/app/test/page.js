import React from "react";

const page = () => {
  const stats = [
    {
      data: "35K",
      title: "Customers",
    },
    {
      data: "10K+",
      title: "Downloads",
    },
    {
      data: "40+",
      title: "Countries",
    },
    {
      data: "30M+",
      title: "Total revenue",
    },
  ];
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      name: "Martiana dialan",
      title: "Product designer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      name: "Micheal colorand",
      title: "Software engineer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Daniel martin",
      title: "Product designer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "Vicky tanson",
      title: "Product manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="hello md:max-w-lg sm:rounded-lg"
          alt=""
        />
        <div className="flex items-center">
        <div className=" space-y-8 items-center">
          <h2 className="text-red-600 font-bold">About Us</h2>
          <h1 className="font-bold text-4xl">Our Services</h1>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum, sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium
          </p>
          <h2 className="text-red-600 font-bold">Learn more</h2>
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;
