import React from 'react'

function Cta() {
  return (
    <>
    <div className='flex justify-center  mr-4 my-5'>
    <a
    href="https://clinikk.com/clinics-bangalore"
    className="schedule-button inline-flex items-center px-16  py-2.5 bg-[#7E3AF2] text-white text-md no-underline rounded-full font-poppins hover:border-black hover:border-2  "
  >
    Book Clinikk Visit
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow ml-2 w-5 h-4 fill-current text-white font-bold   opacity-1"
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