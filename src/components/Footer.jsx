import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between sm:w-[90%] items-center my-4">
      <div className="flex flex-[0.5] justify-start items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-end items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a href="https://twitter.com/clickFoxBit"><img className="text-center mx-2 cursor-pointer" src="../../images/twitter.svg" alt="icon" /></a>
        <a href="https://t.me/clickFoxBit"><img className="text-center mx-2 cursor-pointer" src="../../images/telegram.svg" alt="icon" /></a>        
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      {/* <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@kryptomastery.com</p> */}
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">FoxBit 2023.</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
