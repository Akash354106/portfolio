import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#fbfcfb] pt-0 md:pl-[119px] p-8 md:p-5 overflow-x-hidden">
        {/* Content - 40% on desktop */}
        <div className="md:w-[40%] w-full text-center md:text-left md:mb-[50px] lg:mb-[70px] md:mt-[100px] lg:mt-[150px]">
          <div>
            <h1 className="text-4xl md:text-[39px] lg:text-[55px] font-bold">
              Hi, I'm Akash
            </h1>

            <TypeAnimation
              sequence={[
                'Front-End Developer', 2000,
                'React Enthusiast', 2000,
                'UI/UX Explorer', 2000,
                '',
              ]}
              speed={60}
              deletionSpeed={40}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className="text-xl md:text-[20px] lg:text-[30px] md:mt-[10px] lg:mt-[24px] md:ml-4 lg:ml-5"
            />
          </div>
          <div className='mt-[30px] lg:mt-[60px] md:mt-[40px] md:ml-8 lg:ml-12'>
            <button className='bg-blue-600 text-white hover:bg-blue-700 p-[5px] md:p-[9px] lg:p-[12px] m-1 rounded-md text-[8px] w-[90px] md:text-[13px] md:w-[140px] lg:w-[180px]'>
              Download Resume
            </button>
            <br className='hidden md:block'/>
            <button className='bg-slate-100 text-black hover:bg-slate-200 font-semibold p-[5px] text-[8px] w-[90px] md:p-[9px] lg:p-[12px] m-1 rounded-md md:text-[13px] md:w-[140px] lg:w-[180px] border border-black '>
              Contact Me
            </button>
          </div>

        </div>

        {/* Image - 60% on desktop */}
        <div className="md:w-[60%] w-[400px] p-[20px] md:p-0 mb-4 md:mb-0">
          <img
            src="herohumen.jpg"
            alt="herohumen"
            className="lg:h-[500px] object-cover rounded-xl"
          />
        </div>
      </div>
    </>
  )
}
