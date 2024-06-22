import React from 'react'

function Cta() {
  return (
    <>
    <div className='flex justify-end'>
    <a
    href="#"
    className="schedule-button inline-flex items-center px-5 py-2.5 bg-[#8c5bcd] text-white text-lg no-underline rounded-full transition-all duration-500 ease-in-out transform hover:bg-[#6d21f2] hover:translate-x-[-5px] font-poppins ml-auto "
  >
    Schedule a Call
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow ml-2 w-5 h-5 fill-current text-white transition-all duration-300 transform opacity-0 translate-x-[-5px] rotate-[-45deg] group-hover:opacity-100 group-hover:translate-x-0 hover:opacity-1"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
    </svg>
  </a>
  </div>
    </>
  )
}

export default Cta