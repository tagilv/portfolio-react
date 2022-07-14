import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */ }
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#A8A4CE]'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#FFFFFF]'>Viktor Tägil</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#A8A4CE]'>I am a Full Stack Web Developer</h2>
        <p className='text-[#A8A4CE] py-4 max-w-[700px]'>and after 7 years in San Francisco and Beijing I have finally landed in Berlin. I am working currently freelancing, volonteering and building my coding skills. I am well versed in Ruby on Rails, HTML, CSS, JS ES6 and currently learning React which I built this website with.</p>
        <div>
          <button className='text-[#FFFFFF] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#A8A4CE] hover:border-[#A8A4CE]'>View My Work
          <span className='group-hover:rotate-90 duration-500'>
          <HiArrowNarrowRight className='ml-2'/>
          </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
