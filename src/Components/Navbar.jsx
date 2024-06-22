import React, { useState } from "react";
import logo from "../../public/Group.svg";
import menu from "../../public/menu.svg";
import translate from "../../public/Vector (1).svg";
import down from "../../public/down.svg";
import { useEffect } from "react";
const Navbar = () => {
  const [showBox, setShowBox] = useState(false);
  const [showBox2, setShowBox2] = useState(false);

  const handleShow = () => {
    setShowBox(!showBox);
  };

 

  return (
    <nav className={ `fixed m-0 px-6 py-5 top-0 left-0  w-full bg-primary flex items-center justify-between text-black border-b-2 border-gray-200 bg-white z-30`}>
      <div className="mx-2 flex gap-6 items-center">
        {/* hamburger */}
        <div className="flex lg:hidden items-center bg-[#E5E5E5] p-2 rounded-xl">
          <img
            src={menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />
        </div>


        {/* logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" />
          <p className="text-[18px] font-bold cursor-pointer sm:block logo">
            CLINIKK
          </p>
        </a>
      </div>

      <div className="mx-2 flex gap-6  relative space-evenly items-center font-medium ">
        <div className="lg:flex  hidden gap-2">
          <span>Experience Clinikk</span>
          <img
            src={down}
            alt="Toggle Experience Clinikk"
            onClick={handleShow}
            className="cursor-pointer"
          />
        </div>
        
        {showBox && (
          <div className="absolute top-20 left-0 bg-white shadow-lg p-4 rounded-xl">
            <div className="p-3">Become a member</div>
            <div className="p-3">Visit our Clinikk Health Hub</div>
          </div>
        )}
        <div className="lg:flex  hidden">For Companies</div>
        <div className="lg:flex  hidden">Who we are</div>
        <div className="lg:flex  hidden">|</div>
        <div className="lg:flex  hidden">Need Help?</div>
        <div className="language flex gap-2 relative ">
          <img
            src={translate}
            alt="Change Language"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />
          <div className="md:flex  hidden gap-2">
          <span>English</span>
          <img
            src={down}
            alt="Toggle Experience Clinikk"
            onClick={()=>setShowBox2(!showBox2)}
            className="cursor-pointer"
          />
        </div>
        {showBox2 && (
          <div className="absolute top-20 left-0 bg-white shadow-lg w-full rounded-xl">
            <div className="p-3">English</div>
            <div className="p-3">Hindi</div>
            <div className="p-3">Urdu</div>
          </div>
        )}
        </div>

    
        <div className="login">
          <button className="bg-[#E5E5E5] px-4 py-3 rounded-3xl primary-color">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
