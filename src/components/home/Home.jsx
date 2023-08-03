import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="mt-[100px] flex flex-col justify-center max-w-screen-lg min-h-[85vh] mx-auto max-xl:mx-8">
      <div className="w-3/4 max-md:w-full">
        <h1 className="text-8xl font-bold text-neutral-900 max-lg:text-7xl max-sm:text-6xl">
          ACEH DIGITAL CRAFT.
        </h1>
      </div>
      <div className="w-2/5 mt-2 text-xl max-sm:text-lg max-lg:w-3/4 max-sm:w-full">
        <p>Managing Social Media and Good Branding Design.</p>
      </div>
      <div className="mt-8 ml-4 animate-bounce text-2xl">
        <FaArrowDown />
      </div>
    </section>
  );
};

export default Home;
