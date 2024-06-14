import React from 'react';
import logo from '../../public/Group.svg'
import menu from '../../public/menu.svg'
import translate from '../../public/Vector (1).svg'
const Navbar = () => {
  return (
    <nav className="px-6 py-5 static w-full bg-primary flex items-center justify-between text-black border-b-2 border-gray-200 ">
      <div className="w-full max-w-7xl mx-2 flex gap-6 items-center">
        <div className="flex items-center bg-[#E5E5E5] p-2 rounded-xl">
          <img src={menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />
        </div>
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" />
          <p className=" text-[18px] font-bold cursor-pointer sm:block logo">
            CLINIKK
          </p>
        </a>
      </div>

      <div className='mx-2 flex gap-6 items-center'>
      <div className="language w-full ">
     
          <img src={translate} alt="Lang"  className="w-[28px] h-[28px] object-contain cursor-pointer" />
          
        
      </div>
      <div className='login'> 
      <button className='bg-[#E5E5E5] px-4 py-3 rounded-3xl primary-color'>Login</button>
      </div>
      </div>


      
    </nav>
  );
};

export default Navbar;
