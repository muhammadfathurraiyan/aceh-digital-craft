import React from "react";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center max-w-screen-lg h-60 mx-auto max-xl:mx-8">
      <img src={Logo} width="150px" className="-mt-8" alt="" />
      <span className="-mt-4">
        &#169; Aceh Digital Craft Ltd 2023, All rights reserved. Site Designed By:{" "}
        <a
          target="_blank"
          href="https://muhammadfathurraiyan.site/"
          className="text-neutral-800 font-bold"
        >
          Raiyan.
        </a>
      </span>
    </footer>
  );
};

export default Footer;
