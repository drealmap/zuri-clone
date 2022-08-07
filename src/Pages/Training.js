import React from 'react'
import { Link } from 'react-router-dom'

const Training = () => {
  return (
    <>
    <div className='bg-[rgb(255, 253, 245)]'>
      <div>
        <header className='py-[15px] flex flex-col w-full box-border flex-shrink-0 fixed z-[1100] top-0 left-auto right-0 bg-[#fffdf5] shadow-none'>
          <div className='m-auto w-[92%]'>
            <div className='relative flex items-center min-h-[56px] p-0'>
              <div className='flex justify-between w-full items-center'>
                <Link className='inline-flex mr-8 items-center justify-center relative outline-0 m-0 border-none no-underline tracking-[0.02857em] uppercase min-w-[64px] py-[6px] px-2 rounded bg-transparent text-lg' to='/'>
                  <img className='md:w-[140px] sm:w-[180px] w-[308px]' src='https://training.zuri.team/logo.svg' alt='logo' />
                  <span className='overflow-hidden absolute z-0 inset-0'></span>
                </Link>
                <div className='flex items-center'>
                  <img className='bg-[#e7332b] rounded-[100px] p-[10px] absolute w-[55px] -ml-[50px] sm:-ml-[42px] md:-ml-[34px]' src='https://training.zuri.team/thumbs.png' alt='thumbs' />
                  <Link className='inline-flex sm:py-[10px] sm:px-[20px] bg-[#e7332b] rounded-[71px] text-white no-underline text-lg font-normal' style={{position: 'initial'}} to='/enroll'>
                    Enroll Now
                    <span className='overflow-hidden absolute z-0 inset-0'></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
    </>
  )
}

export default Training