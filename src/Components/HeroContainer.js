import React from 'react'
import { Link } from 'react-router-dom'

const HeroContainer = () => {
  return (
    <section className='sm:h-auto bg-[url("https://zuri.team/img/hero-bg.svg")] bg-cover bg-center bg-no-repeat h-[800px]'>
        <div className='m-auto flex pt-[69px] mb-[69px]'>
            <img className='sm:block sm:pt-[50px] sm:m-auto sm:mb-[20px] m-auto' src='https://zuri.team/img/zuri-logo-full.svg' alt='logo' />
        </div>
        <div className='p-[10px] max-w-[700px] my-0 mx-auto text-center '>
            <h2 className='sm:text-[28px] sm:leading-[34px] sm:text-center font-extrabold text-[#514949] mb-9 text-[32px] leading-[48px] text-center'>Learn, Build, Grow.</h2>
            <p className='text-base text-[#514949] opacity-90 mt-0 mb-4'>Unlock your Brilliance with our hands-on 
                <Link className='text-[#E7332B] no-underline bg-transparent hover:text-[#eb5850] hover:no-underline' to='/training'> beginner </Link>
                  and 
                <a className='text-[#E7332B] no-underline bg-transparent hover:text-[#eb5850] hover:no-underline' href="https://internship.zuri.team"> expert training</a>
                . Zuri Team has been immensely successful in creating a global network of a highly adept intelligent workforce that
                 can help your company achieve their mission-critical 
                <Link className='text-[#E7332B] no-underline bg-transparent hover:text-[#eb5850] hover:no-underline' to='/talent'> projects and goals</Link>
            </p>
            <div className='mt-[92px] sm:mb-[50px]'>
                <Link className='text-[#E7332B] no-underline bg-transparent hover:text-[#eb5850] hover:no-underline' to='/training'>
                    <button className='sm:block sm:m-auto sm:justify-center bg-[#E7332B] text-white py-[11px] px-7 border-solid border border-[#E7332B] hover:bg-white hover:text-[#E7332B] mr-6'>
                        I'm new to the industry
                    </button>
                </Link>
                <br className='block lg:hidden' />
                <Link className='text-[#E7332B] no-underline bg-transparent hover:text-[#eb5850] hover:no-underline' to='/talent'>
                    <button className='sm:block sm:m-auto sm:justify-center bg-white text-[#E7332B] py-[11px] px-7 border-solid border border-[#E7332B] hover:bg-[#E7332B] hover:text-white'>
                        I need industry experience
                    </button>
                </Link>
            </div>
            
        </div>
    </section>
  )
}

export default HeroContainer