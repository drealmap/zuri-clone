import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const Training = () => {
  const bigScreen = useMediaQuery({
    query: '(min-width: 1000px)'
  })
  const isMobile = useMediaQuery({ query: '(max-width: 999px)' })
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow(!show)
  }
  return (
    <>
    <div className='bg-[#FFFDF5]'>
      <div>
        <header className='py-[15px] flex flex-col w-full box-border flex-shrink-0 fixed z-[1100] top-0 left-auto right-0 bg-[#fffdf5] shadow-none'>
          <div className='m-auto w-[92%]'>
            <div className='relative flex items-center lg:min-h-[64px] min-h-[56px] p-0'>
              {bigScreen && 
              <div className='m-auto max-w-[1440px] h-10 flex justify-between w-full items-center'>
                <a href='/'>
                  <img className='w-[308px]' src='https://training.zuri.team/logo.svg' alt='logo' />
                </a>
                <div className='flex items-center'>
                  <a className='inline-flex mr-8 box-border no-underline tracking-[0.02857em] min-w-[64px] py-[6px] px-2 text-[#585757] text-lg font-normal' href='/#about'>
                    About
                    <span className='overflow-hidden absolute z-0 inset-0'></span>
                  </a>
                  <a className='inline-flex mr-8 box-border no-underline tracking-[0.02857em] min-w-[64px] py-[6px] px-2 text-[#585757] text-lg font-normal' href='/#about'>
                    Why Us?
                    <span className='overflow-hidden absolute z-0 inset-0'></span>
                  </a>
                  <a className='inline-flex mr-8 box-border no-underline tracking-[0.02857em] min-w-[64px] py-[6px] px-2 text-[#585757] text-lg font-normal' href='/#about'>
                    Stacks Covered
                    <span className='overflow-hidden absolute z-0 inset-0'></span>
                  </a>
                  <a className='inline-flex mr-24 box-border no-underline tracking-[0.02857em] min-w-[64px] py-[6px] px-2 text-[#585757] text-lg font-normal' href='/#about'>
                    FAQs
                    <span className='overflow-hidden absolute z-0 inset-0'></span>
                  </a>
                  <div className='flex items-center'>
                    <a href='/enroll'>
                      <img className='bg-[#e7332b] -mt-[2.1rem] rounded-[100px] p-[10px] absolute w-[70px] -ml-[46px]' src='https://training.zuri.team/thumbs.png' alt='thumbs' />
                    </a>
                    <a style={{position: 'initial'}} href='/enroll' className='inline-flex no-underline tracking-[0.02857em] bg-[#e7332b] rounded-[71px] text-white py-[10px] px-8 text-lg font-normal'>
                      Enroll Now
                      <span className='overflow-hidden absolute z-0 inset-0'></span>
                    </a>
                  </div>
                </div>
              </div>}
              {isMobile &&
              <div className='flex justify-between w-full items-center'>
                <Link className='inline-flex mr-8 items-center justify-center relative outline-0 m-0 border-none no-underline tracking-[0.02857em] uppercase min-w-[64px] py-[6px] px-2 rounded bg-transparent text-lg' to='/'>
                  <img className='md:w-[140px] sm:w-[180px] w-[308px]' src='https://training.zuri.team/logo.svg' alt='logo' />
                  <span className='overflow-hidden absolute z-0 inset-0'></span>
                </Link>
                <div className='flex items-center'>
                  <img className='bg-[#e7332b] rounded-[100px] p-[10px] absolute w-[55px] -ml-[50px] sm:-ml-[42px] md:-ml-[34px]' src='https://training.zuri.team/thumbs.png' alt='thumbs' />
                  <Link className='inline-flex py-[10px] px-8 sm:px-[20px] bg-[#e7332b] rounded-[71px] text-white no-underline text-lg font-normal' style={{position: 'initial'}} to='/enroll'>
                    Enroll Now
                    <span className='overflow-hidden absolute z-0 inset-0'></span>
                  </Link>
                </div>
              </div>}
            </div>
          </div>
        </header>
      </div>
      <div className='flex items-center max-w-[1440px] 2xl:pt-[100px] w-[90%] m-auto pt-[200px]'>
        <div style={{flexFlow: 'row wrap'}} className='flex box-border -mt-4 -ml-4'>
          <div className='flex items-center pl-4 pt-4 m-0 box-border bxg:basis-[25%] bxg:max-w-[25%] flex-row basis-[100%] flex-grow-0 max-w-full'>
            <div>
              <img className='2xl:flex 2xl:m-auto 2xl:w-[76%] sm:w-full mix-blend-darken w-[125%] max-w-[125%]' src='https://training.zuri.team/lady1.jpg' alt='lady' />
            </div>
          </div>
          <div className='pl-4 pt-4 box-border m-0 flex-row basis-[100%] bxg:basis-[50%] bxg:max-w-[50%] flex-grow-0 max-w-full'>
            <p className='m-0 tracking-[0.00938em] font-normal sm:-mt-[33px] 2xl:-mt-[75px] text-[#e7332b] text-lg leading-[130%] text-center'>And now your search has ended...</p>
            <p className='m-0 sm:text-[28px] tracking-[0.00938em] text-[49px] text-[#1b1a20] font-bold pt-[10px] leading-[110%] text-center'>Gain knowledge to help you scale through the tech industry for free.</p>
            <div className='mr-[100px] flex justify-end -ml-5 mb-7 2xl:mr-8 '>
              <img className='w-[33%]' src='https://training.zuri.team/line.svg' alt='line' />
            </div>
            <p className='sm:text-base sm:w-full tracking-[0.00938em] text-lg w-[68%] text-[#1b1a20] leading-[130%] m-auto pb-10 text-center'>
              A basic introduction to software development and product design aimed at complete beginners, which anyone can join
            </p>
            <div className='flex justify-center'>
              <Link className='inline-flex items-center justify-center relative box-border outline-0 m-0 cursor-pointer no-underline tracking-[0.02857em] min-w-[64px] bg-[#e7332b] rounded-[71px] text-white py-[10px] sm:px-5 px-8 text-lg leading-6' to='/enroll'>
                Enroll Now
                <span className='overflow-hidden absolute z-0 inset-0'></span>
              </Link>
            </div>
            <div className='flex justify-end m-auto sm:w-[64%] 2xl:w-[50%] w-[40%]'>
              <img className='2xl:w-[22%] w-[35%]' src='https://training.zuri.team/section1wire.svg' alt='spiral' />
            </div>
          </div>
          <div className='flex items-center pl-4 pt-4 box-border m-0 flex-row basis-[100%] bxg:w-[25%] bxg:basis-[25%] flex-grow-0 max-w-full'>
            {bigScreen && 
            <div>
              <img className='-ml-[26px] mix-blend-darken w-[110%] max-w-[110%]' src='https://training.zuri.team/male1.jpg' alt='male' />
            </div>}
          </div>
        </div>
      </div>
      <div className='max-w-[1440px] 2xl:pt-[30px] w-[90%] m-auto pt-[49px]'>
        <hr className='m-0 flex-shrink-0  border-x-0 border-t-0 border-b' />
        <div className='box-border flex flex-row flex-wrap -mt-4 -ml-4'>
          <div className='flex items-center pl-4 box-border m-0 flex-row basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] flex-grow-0 max-w-full'>
            <p className='m-0 tracking-[0.00938em] text-[#1b1a20] 2xl:text-xl text-2xl bxg:text-left font-semibold leading-[130%] 2xl:pt-[30px] pt-0 text-center uppercase'>
              Ingressive for good was launched in  july 2020 with no dollar in donation...
            </p>
          </div>
          <div className='pt-4 box-border m-0 flex-row basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] flex-grow-0  max-w-full'>
            <div className='flex justify-center'>
              <img className='sm:w-[52%] 2xl:w-[76%] w-[55%] mix-blend-darken' src='https://training.zuri.team/ingresive.jpg' alt='logo' />
            </div>
          </div>
          <div className='flex items-center pl-4 pt-4 m-0 box-border flex-row basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] flex-grow-0 max-w-full'>
            <p className='m-0 text-[#1b1a20] tracking-[0.00938em] text-2xl leading-[130%] sm:text-center sm:text-lg pb-10 pt-[30px] text-right w-full 2xl:text-lg'>
            to help increase the earning power of African youths by providing them with tech skills, community, tools, resources, and jobs... 
            <span>
              <Link className='text-[#43b97f] cursor-pointer underline' to='https://ingressive.org/i4g-in-2021/'> Read More</Link>
            </span>
            </p>
          </div>
        </div>
        <hr className='m-0 flex-shrink-0  border-x-0 border-t-0 border-b' />
      </div>
      <div className='max-w-[1440px] 2xl:pt-[30px] pt-[49px] w-[89%] m-auto 2xl:w-[90%]'>
        <div className='flex box-border w-full flex-row flex-wrap'>
          <div className='box-border m-0 flex-row basis-[100%] bxg:basis-[58.3333%] bxg:max-w-[58.3333%] flex-grow-0 max-w-full'>
            <div className='flex justify-center'>
              <img className='w-[15%]' src='https://training.zuri.team/section3wire.svg' alt='spiral-arrow' />
            </div>
            <div>
              <p className='m-0 tracking-[0.00938em] text-[#e7332b] sm:text-lg leading-[130%] 2xl:text-xl text-2xl'>
                Why Zuri Training?
              </p>
              <p className='m-0 tracking-[0.00938em] text-[#1b1a20] sm:text-2xl font-bold leading-[130%] 2xl:text-[30px] text-[40px]'>
                Here at Zuri, you gain access to enough knowledge to introduce and aid your success in the tech industry.
              </p>
            </div>
          </div>
          {bigScreen && 
          <div className='flex items-center basis-[41.6667%] flex-grow-0 max-w-[41.6667%] box-border m-0 flex-row'>
            <div className='flex justify-end mt-[95px]'>
              <img className='w-[65%] mix-blend-darken' src='https://training.zuri.team/Star.jpg' alt='star' />
            </div>
          </div>}
        </div>
      </div>
      <div style={{background: 'linear-gradient(180deg,rgba(255,244,240,0),#fff4f0 17.19%,#fff4f0 84.37%,rgba(255,244,240,0))'}}>
        <div className='flex box-border flex-row flex-wrap max-w-[1440px] 2xl:pt-[30px] pt-[49px] 2xl:w-[90%] w-[92%] m-auto'>
          <div className='pt-6 box-border m-0 flex-row basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] flex-grow-0 max-w-full sm:pl-0 pl-6'>
            <div className='bg-[#e7332b] rounded-[18px] pt-[58px] hover:-translate-y-[15px] pr-12 sm:pb-[63px] pb-[93px] sm:pl-10 pl-[50px]'>
              <img className='flex float-right -mr-[49px] -mt-[58px] w-[42%]' src='https://training.zuri.team/curve1.png' alt='curve' />
              <p className='m-0 text-white sm:text-[44px] text-[60px] font-bold leading-[130%]'>01</p>
              <p className='m-0 tracking-[0.00938em] text-white text-[36px] sm:text-[28px] font-medium leading-[130%] sm:pb-[26px] pb-9 sm:pt-5 pt-8'>
                Fully
                <br />
                Remote
              </p>
              <p className='m-0 tracking-[0.00938em] text-white text-lg leading-[130%]'>
                100% online classes available to anyone in the world.
              </p>
            </div>
          </div>
          <div className='pt-6 box-border m-0 flex-row basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] flex-grow-0 max-w-full sm:pl-0 pl-6'>
            <div className='bg-white rounded-[18px] hover:-translate-y-[15px] pt-[58px] pr-12 sm:pb-[63px] pb-[93px] sm:pl-10 pl-[50px]'>
              <img className='flex float-right -mr-[49px] -mt-[58px] w-[42%]' src='https://training.zuri.team/curve.svg' alt='curve' />
              <p className='m-0 text-[#1b1a20] sm:text-[44px] text-[60px] font-bold leading-[130%]'>02</p>
              <p className='m-0 text-[#1b1a20] sm:text-[26px] text-[36px] font-medium sm:pb-[26px] pb-9 sm:pt-5 pt-8 leading-[130%]'>
                Hands-on
                <br />
                Experience
              </p>
              <p className='m-0 tracking-[0.00938em] text-[#1b1a20] text-lg leading-[130%]'>
                We don't just teach you theory, we show you how to build things.
              </p>
            </div>
          </div>
          <div className='pt-6 box-border m-0 flex-row basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] flex-grow-0 max-w-full sm:pl-0 pl-6'>
            <div className='bg-white rounded-[18px] pt-[58px] pr-12 sm:pb-[63px] hover:-translate-y-[15px] pb-[93px] sm:pl-10 pl-[50px]'>
              <img className='flex float-right -mr-[49px] -mt-[58px] w-[42%]' src='https://training.zuri.team/curve3.svg' alt='curve' />
              <p className='m-0 text-[#1b1a20] sm:text-[44px] text-[60px] font-bold leading-[130%]'>03</p>
              <p className='m-0 text-[#1b1a20] sm:text-[26px] text-[36px] font-medium sm:pb-[26px] pb-9 sm:pt-5 pt-8 leading-[130%]'>
                Collaborative 
                <br />
                Learning
              </p>
              <p className='m-0 tracking-[0.00938em] text-[#1b1a20] text-lg leading-[130%]'>
                We connect you with like minds to grow together.
              </p>
            </div>
          </div>
          <div className='pt-6 box-border m-0 flex-row basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] flex-grow-0 max-w-full sm:pl-0 pl-6'>
            <div className='bg-white rounded-[18px] pt-[58px] pr-12 sm:pb-[63px] pb-[93px] sm:pl-10 hover:-translate-y-[15px] pl-[50px]'>
              <img className='flex float-right -mr-[49px] -mt-[58px] w-[42%]' src='https://training.zuri.team/curve4.svg' alt='curve' />
              <p className='m-0 text-[#1b1a20] sm:text-[44px] text-[60px] font-bold leading-[130%]'>04</p>
              <p className='m-0 text-[#1b1a20] sm:text-[26px] text-[36px] font-medium sm:pb-[26px] pb-9 sm:pt-5 pt-8 leading-[130%]'>
                Real-life 
                <br />
                Projects
              </p>
              <p className='m-0 tracking-[0.00938em] text-[#1b1a20] text-lg leading-[130%]'>
                We give you CV worthy projects to help you hit the ground running.
              </p>
            </div>
          </div>
          <div className='pt-6 box-border m-0 flex-row basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] flex-grow-0 max-w-full sm:pl-0 pl-6'>
            <div className='bg-white rounded-[18px] pt-[58px] pr-12 sm:pb-[63px] hover:-translate-y-[15px] pb-[93px] sm:pl-10 pl-[50px]'>
              <img className='flex float-right -mr-[49px] -mt-[58px] w-[42%]' src='https://training.zuri.team/curve5.svg' alt='curve' />
              <p className='m-0 text-[#1b1a20] sm:text-[44px] text-[60px] font-bold leading-[130%]'>05</p>
              <p className='m-0 text-[#1b1a20] sm:text-[26px] text-[36px] font-medium sm:pb-[26px] pb-9 sm:pt-5 pt-8 leading-[130%]'>
                Beginner 
                <br />
                Friendly
              </p>
              <p className='m-0 tracking-[0.00938em] text-[#1b1a20] text-lg leading-[130%]'>
                We provide step-by-step procedures on how to get things done.
              </p>
            </div>
          </div>
          <div className='pt-6 box-border m-0 flex-row basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] flex-grow-0 max-w-full sm:pl-0 pl-6'>
            <div style={{boxShadow: '0 11px 22px rgba(231,51,43,.1)'}} className='bg-white rounded-[18px] hover:-translate-y-[15px] pt-[58px] pr-12 sm:pb-[63px] pb-[93px] sm:pl-10 pl-[50px]'>
              <img className='flex float-right -mr-[49px] -mt-[58px] w-[42%]' src='https://training.zuri.team/curve6.svg' alt='curve' />
              <p className='m-0 text-[#1b1a20] sm:text-[44px] text-[60px] font-bold leading-[130%]'>06</p>
              <p className='m-0 text-[#1b1a20] sm:text-[26px] text-[36px] font-medium sm:pb-[26px] pb-9 sm:pt-5 pt-8 leading-[130%]'>
                In-program 
                <br />
                Mentorship
              </p>
              <p className='m-0 tracking-[0.00938em] text-[#1b1a20] text-lg leading-[130%]'>
                During and after the program you have access to experience seniors.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#E7332B] mt-[149px]'>
        <div className='box-border flex flex-row flex-wrap m-auto max-w-[1440px] 2xl:pt-[30px] pt-[49px] 2xl:w-[90%] w-[89%]'>
          <div className='pt-6 box-border m-0 flex-row basis-[100%] bxg:basis-[41.6667%] bxg:max-w-[41.6667%] flex-grow-0 max-w-full sm:pl-0 pl-6'>
            <div className='flex justify-end mr-32'>
              <img className='w-[23%]' alt='arrow' src='https://training.zuri.team/section5wire.svg' />
            </div>
            <p className='m-0 tracking-[0.00938em] text-white leading-[130%] text-lg'>
              We will help you get started
            </p>
            <p className='m-0 tracking-[0.0256em] text-white leading-[130%] text-[40px] 2xl:text-[30px] font-bold'>
              High quality training with hands-on practice
            </p>
            <p className='m-0 tracking-[0.0256em] text-white text-lg leading-[130%] 2xl:pt-[35px] 2xl:w-full pt-[42px] w-[75%]'>
              We give you weekly tasks, ranging from easy to complex, as you progress from stage to stage; making it to the final stage means you are now ready to continue learning and growing independently.
            </p>
            <Link className='inline-flex items-center justify-center relative box-border m-0 cursor-pointer no-underline tracking-[0.02857em] min-w-[64px] bg-white rounded-[71px] text-[#e7332b] mb-10 mt-[30px] py-2 px-7 text-lg font-normal' to='/enroll'>
              Enroll Now
              <span className='absolute overflow-hidden z-0'></span>
            </Link>
            <div className='box-border flex flex-row flex-wrap -mt-6 -ml-6'>
              <div className='pl-6 pt-6 box-border m-0 flex-row basis-[50%] max-w-[50%]'>
                <button className='items-center relative m-0 no-underline tracking-[0.02857em] min-w-[64px] pl-[15px] border-[2px] border-solid border-white rounded-[79px] box-border text-white flex sm:text-sm justify-start py-[11px] 2xl:pr-2 pr-12 w-[235px] 2xl:w-full'>
                  <img className='pr-[9px] w-[25%]' src='https://training.zuri.team/hand.svg' alt='logo' />
                  <p className='m-0 leading-normal tracking-[0.00938em] sm:text-[13px] text-lg'>Teamwork</p>
                </button>
              </div>
              <div className='pl-6 pt-6 box-border m-0 flex-row basis-[50%] max-w-[50%]'>
                <button className='items-center relative m-0 no-underline tracking-[0.02857em] min-w-[64px] pl-[15px] border-[2px] border-solid border-white rounded-[79px] box-border text-white flex sm:text-sm justify-start py-[11px] 2xl:pr-2 pr-12 w-[235px] 2xl:w-full'>
                  <img className='pr-[9px] w-[25%]' src='https://training.zuri.team/mentor.svg' alt='logo' />
                  <p className='m-0 leading-normal tracking-[0.00938em] sm:text-[13px] text-lg'>Mentorship</p>
                </button>
              </div>
              <div className='pl-6 pt-6 box-border m-0 flex-row basis-[50%] max-w-[50%]'>
                <button className='items-center relative m-0 no-underline tracking-[0.02857em] min-w-[64px] pl-[15px] border-[2px] border-solid border-white rounded-[79px] box-border text-white flex sm:text-sm justify-start py-[11px] 2xl:pr-2 pr-12 w-[235px] 2xl:w-full'>
                  <img className='pr-[9px] w-[25%]' src='https://training.zuri.team/practice.svg' alt='logo' />
                  <p className='m-0 leading-normal tracking-[0.00938em] sm:text-[13px] text-lg'>Practice</p>
                </button>
              </div>
              <div className='pl-6 pt-6 box-border m-0 flex-row basis-[50%] max-w-[50%]'>
                <button className='items-center relative m-0 no-underline tracking-[0.02857em] min-w-[64px] pl-[15px] border-[2px] border-solid border-white rounded-[79px] box-border text-white flex sm:text-sm justify-start py-[11px] 2xl:pr-2 pr-12 w-[235px] 2xl:w-full'>
                  <img className='pr-[9px] w-[25%]' src='https://training.zuri.team/games.svg' alt='logo' />
                  <p className='m-0 leading-normal tracking-[0.00938em] sm:text-[13px] text-lg'>Fun & Games</p>
                </button>
              </div>
            </div>
          </div>
          <div className='pt-6 box-border bxg:basis[58.3333%] bxg:max-w-[58.3333%] m-0 flex-row basis-[100%] max-w-full sm:pl-0 pl-6'>
            <div>
              <img className='w-full' src='https://training.zuri.team/section5-image.png' alt='woman' />
            </div>
          </div>
        </div>
        <div>
          <img className='w-[10%] p-[35px] box-content' src='https://training.zuri.team/dotsection5.svg' alt='box' />
        </div>
      </div>
      <div className='m-auto max-w-[1440px] pt-[70px] w-[90%]'>
        <div className='box-border flex flex-row flex-wrap -mt-6 -ml-6'>
          <div className='pl-6 pt-6 box-border m-0 flex-row bxg:basis-[50%] bxg:max-w-[50%]'>
            <div>
              <p className='m-0 tracking-[0.00938em] text-[#e7332b] sm:text-lg 2xl:text-xl text-2xl leading-[130%]'>
                Scope Of Program
              </p>
              <p className='m-0 tracking-[0.00938em] text-[#1b1a20] sm:text-2xl 2xl:text-[30px] text-[40px] font-bold leading-[130%]'>
                Here is the list of areas that will be explored in the training.
              </p>
            </div>
          </div>
          <div className='pl-6 pt-6 box-border m-0 flex-row bxg:basis-[50%] bxg:max-w-[50%]'>
            <div></div>
          </div>
        </div>
        <div className='flex justify-center'>
          <img className='sm:-mt-[13px] sm:w-[43%] -mt-[37px w-[13%]' src='https://training.zuri.team/section6.svg' alt='spiral' />
        </div>
        <div className=' flex box-border -mt-6 flex-wrap flex-row -ml-6'>
          <div className='pl-6 pt-6 m-0 box-border basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] max-w-full'>
            <div className='bg-white rounded-[41px] shadow-[0_11px_22px_rgba(231,51,43,0.1)] lg:h-60 box-content p-10'>
              <p className='m-0 tracking-[0.00938em] text-[#1b1a20] text-xl font-bold leading-[130%] pb-5'>
                Frontend Development
              </p>
              <div className='flex box-content'>
                <img className='w-[35px] pr-[14px]' src='https://training.zuri.team/html.svg' alt='html' />
                <img className='w-[35px] pr-[14px]' src='https://training.zuri.team/css-3%20logo.svg' alt='html' />
                <img className='w-[46px] pr-[14px]' src='https://training.zuri.team/javascript%20logo.svg' alt='html' />
              </div>
              <p className='mb-[5px] m-0 tracking-[0.01em] leading-[140%] pb-[30px] pt-10 text-[#1b1a20]'>
                This track deals with the aspect of your application that the users interact with. A front-end developer will be able to correctly interpret a given design to the user interface.
              </p>
            </div>
          </div>
          <div className='pl-6 pt-6 m-0 box-border basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] max-w-full'>
            <div className='bg-white rounded-[41px] shadow-[0_11px_22px_rgba(231,51,43,0.1)] lg:h-60 box-content p-10'>
              <p className='m-0 tracking-[0.00938em] text-[#1b1a20] text-xl font-bold leading-[130%] pb-5'>
                Backend Development
              </p>
              <div className='flex box-content'>
                <img className='w-[62px] pr-[14px]' src='https://training.zuri.team/php2%20logo.svg' alt='html' />
                <img className='w-[50px] pr-[14px]' src='https://training.zuri.team/python-4%20logo.svg' alt='html' />
                <img className='w-[46px] pr-[14px]' src='https://training.zuri.team/javascript%20logo.svg' alt='html' />
              </div>
              <p className='mb-[5px] m-0 tracking-[0.01em] leading-[140%] pb-[30px] pt-10 text-[#1b1a20]'>
                This track deals with the aspect of the application the user does not directly interact with. It allows the frontend function either by running some back-end code or connecting to the database.
              </p>
            </div>
          </div>
          <div className='pl-6 pt-6 m-0 box-border basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] max-w-full'>
            <div className='bg-white rounded-[41px] shadow-[0_11px_22px_rgba(231,51,43,0.1)] lg:h-60 box-content p-10'>
              <p className='m-0 tracking-[0.00938em] text-[#1b1a20] text-xl font-bold leading-[130%] pb-5'>
                Product Design
              </p>
              <div className='flex box-content'>
                <img className='w-[50px] pr-[14px]' src='https://training.zuri.team/adobe-xd%20logo.svg' alt='html' />
                <img className='w-[97px] pr-[7px]' src='https://training.zuri.team/Figma%20logo.svg' alt='html' />
              </div>
              <p className='mb-[5px] m-0 tracking-[0.01em] leading-[140%] pb-[30px] pt-10 text-[#1b1a20]'>
                This track deals with creating a graphic plan for an application. You will learn to convert project documentation into viewable and understandable graphic design for the developers to work with.
              </p>
            </div>
          </div>
          <div className='pl-6 pt-6 m-0 box-border basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] max-w-full'>
            <div className='bg-white rounded-[41px] shadow-[0_11px_22px_rgba(231,51,43,0.1)] lg:h-60 box-content p-10'>
              <p className='m-0 tracking-[0.00938em] text-[#1b1a20] text-xl font-bold leading-[130%] pb-5'>
                DevOPS
              </p>
              <div className='flex box-content'>
                <img className='w-[100px] pr-[14px]' src='https://training.zuri.team/Ubuntu%20logo.svg' alt='html' />
                <img className='w-[75px] pr-[14px]' src='https://training.zuri.team/Bash%20logo.svg' alt='html' />
                <img className='w-[60px] pr-[14px]' src='https://training.zuri.team/aws%20logo.svg' alt='html' />
              </div>
              <p className='mb-[5px] m-0 tracking-[0.01em] leading-[140%] pb-[30px] pt-10 text-[#1b1a20]'>
                The DevOps track is an extension of the backend track. It involves tools that’ll allow the participant to deploy solutions for public use.
              </p>
            </div>
          </div>
          <div className='pl-6 pt-6 m-0 box-border basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] max-w-full'>
            <div className='bg-white rounded-[41px] shadow-[0_11px_22px_rgba(231,51,43,0.1)] lg:h-60 box-content p-10'>
              <p className='m-0 tracking-[0.00938em] text-[#1b1a20] text-xl font-bold leading-[130%] pb-5'>
                Fullstack Development
              </p>
              <div className='flex box-content'>
                <img className='w-[35px] pr-[14px]' src='https://training.zuri.team/html.svg' alt='html' />
                <img className='w-[35px] pr-[14px]' src='https://training.zuri.team/css-3%20logo.svg' alt='html' />
                <img className='w-[46px] pr-[14px]' src='https://training.zuri.team/javascript%20logo.svg' alt='html' />
                <img className='w-[50px] pr-[14px]' src='https://training.zuri.team/python-4%20logo.svg' alt='html' />
              </div>
              <p className='mb-[5px] m-0 tracking-[0.01em] leading-[140%] pb-[30px] pt-10 text-[#1b1a20]'>
                A combination of frontend, backend, and DevOps. This track will only be available to participants who have the time to dedicate to the training.
              </p>
            </div>
          </div>
          <div className='pl-6 pt-6 m-0 box-border basis-[100%] bxg:basis-[33.3333%] bxg:max-w-[33.3333%] max-w-full'>
            <div className='bg-white rounded-[41px] shadow-[0_11px_22px_rgba(231,51,43,0.1)] lg:h-60 p-10 box-content'>
              <p className='m-0 tracking-[0.00938em] text-[#1b1a20] text-xl font-bold leading-[130%] pb-5'>
                Frameworks
              </p>
              <div className='flex box-content'>
                <img className='w-[60px] pr-[14px]' src='https://training.zuri.team/Laravel%20logo.svg' alt='html' />
                <img className='w-[75px] pr-[14px]' src='https://training.zuri.team/React%20logo.svg' alt='html' />
                <img className='w-[75px] pr-[14px]' src='https://training.zuri.team/Django%20logo.svg' alt='html' />
              </div>
              <p className='mb-[5px] m-0 tracking-[0.01em] leading-[140%] pb-[30px] pt-10 text-[#1b1a20]'>
                During the program we will be exploring several useful frameworks to give you an edge in the industry and help you develop complex applications much faster.
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center mb-[85px] mt-[70px]'>
          <Link className='inline-flex items-center justify-center relative box-border m-0 no-underline tracking-[0.02857em] min-w-[64px] bg-[#e7332b] rounded-[71px] text-white py-[10px] sm:px-5 px-8 text-lg' to='/enroll'>
            Enroll Now
            <span className='absolute overflow-hidden z-0'></span>
          </Link>
        </div>
        <hr className='m-0 border-solid border-x-0 border-t-0 border-b border-[#000000] opacity-10' />
      </div>
      <div className='m-auto max-w-[1440px] 2xl:pt-[30px] pt-[49px] w-[90%]'>
        <div className='ml-[10%] mt-[10px]'>
          <img className='w-[13%] sm:w-[23%]' src='https://training.zuri.team/section7wire.svg' alt='wire' />
        </div>
        <div>
          <p className='text-center tracking-[0.00938em] sm:-mt-[13px] -mt-[50px] text-[#e7332b] sm:text-lg 2xl:text-xl text-2xl leading-[130%]'>
            Got Questions?
          </p>
          <p className='text-center pb-[100px] m-0 tracking-[0.00938em] text-[#1b1a20] sm:text-2xl 2xl:text-[30px] text-[40px] font-bold leading-[130%]'>
            Frequently Asked Questions
          </p>
        </div>
        <div className='m-auto sm:w-full w-[85%]'>
          <div>
            <section>
              <section className='relative flex-col flex justify-between bg-[#fffdf5] p-5 border border-solid border-[#472c6f] border-opacity-40'>
                <div className='py-[10px] px-0 flex justify-between items-center text-[#333] sm:text-base text-lg sm:font-medium font-semibold leading-[130%]'>
                  <div className='pr-[3em]'>
                    Would I have to pay to enroll for the training?
                  </div>
                  <span onClick={toggle} className='max-w-[25px] max-h-[25px] m-0 p-0 text-[#333] rotate-0 absolute right-3 top-[27px]'>
                    <svg className='w-full h-full fill-[#333] inline-block flex-shrink-0 text-[1.5rem]' focusable='false' aria-hidden viewBox='0 0 24 24'>
                      <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'></path>
                    </svg>
                  </span>
                </div>
                <div className={show ? 'h-[21px] visible overflow-hidden' : 'h-0 opacity-0 invisible overflow-hidden'}  aria-hidden>
                  <div className='p-0'>No, the program is completely free thanks to Ingressive For Good</div>
                </div>
              </section>
              <section className='relative flex-col flex justify-between bg-[#fffdf5] p-5 border border-solid border-[#472c6f] border-opacity-40'>
                <div className='py-[10px] px-0 flex justify-between items-center text-[#333] sm:text-base text-lg sm:font-medium font-semibold leading-[130%]'>
                  <div className='pr-[3em]'>
                    What are the things I would need to participate?
                  </div>
                  <span className='max-w-[25px] max-h-[25px] m-0 p-0 text-[#333] rotate-0 absolute right-3 top-[27px]'>
                    <svg className='w-full h-full fill-[#333] inline-block flex-shrink-0 text-[1.5rem]' focusable='false' aria-hidden viewBox='0 0 24 24'>
                      <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'></path>
                    </svg>
                  </span>
                </div>
                <div className={show ? 'h-[21px] visible overflow-hidden' : 'h-0 opacity-0 invisible overflow-hidden'} aria-hidden>
                  <div className='p-0'>You'll need a laptop, internet connection and the willingness to learn through collaboration and mentorship.</div>
                </div>
              </section>
              <section className='relative flex-col flex justify-between bg-[#fffdf5] p-5 border border-solid border-[#472c6f] border-opacity-40'>
                <div className='py-[10px] px-0 flex justify-between items-center text-[#333] sm:text-base text-lg sm:font-medium font-semibold leading-[130%]'>
                  <div className='pr-[3em]'>
                    What happens if i join and I’m not active?
                  </div>
                  <span className='max-w-[25px] max-h-[25px] m-0 p-0 text-[#333] rotate-0 absolute right-3 top-[27px]'>
                    <svg className='w-full h-full fill-[#333] inline-block flex-shrink-0 text-[1.5rem]' focusable='false' aria-hidden viewBox='0 0 24 24'>
                      <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'></path>
                    </svg>
                  </span>
                </div>
                <div className='h-0 opacity-0 overflow-hidden' aria-hidden>
                  <div className='p-0'>
                    Participants who join the program and stop engaging will be given the chance to catch up. You'll also be assigned a 
                    'study-mate' and mentor to help you. However, there is the possibility of not being promoted to the next stage if you remain inactive for too long
                  </div>
                </div>
              </section>
              <section className='relative flex-col flex justify-between bg-[#fffdf5] p-5 border border-solid border-[#472c6f] border-opacity-40'>
                <div className='py-[10px] px-0 flex justify-between items-center text-[#333] sm:text-base text-lg sm:font-medium font-semibold leading-[130%]'>
                  <div className='pr-[3em]'>
                    Can I switch from the part-time track to full-time and vice versa?
                  </div>
                  <span className='max-w-[25px] max-h-[25px] m-0 p-0 text-[#333] rotate-0 absolute right-3 top-[27px]'>
                    <svg className='w-full h-full fill-[#333] inline-block flex-shrink-0 text-[1.5rem]' focusable='false' aria-hidden viewBox='0 0 24 24'>
                      <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'></path>
                    </svg>
                  </span>
                </div>
                <div className='h-0 opacity-0 overflow-hidden' aria-hidden>
                  <div className='p-0'>
                    <p>Unfortunately, no, you cannot switch from part-time to full-time and vice-versa</p>
                  </div>
                </div>
              </section>
              <section className='relative flex-col flex justify-between bg-[#fffdf5] p-5 border border-solid border-[#472c6f] border-opacity-40'>
                <div className='py-[10px] px-0 flex justify-between items-center text-[#333] sm:text-base text-lg sm:font-medium font-semibold leading-[130%]'>
                  <div className='pr-[3em]'>
                    Will I get paid?
                  </div>
                  <span className='max-w-[25px] max-h-[25px] m-0 p-0 text-[#333] rotate-0 absolute right-3 top-[27px]'>
                    <svg className='w-full h-full fill-[#333] inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                      <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'></path>
                    </svg>
                  </span>
                </div>
                <div className='h-0 opacity-0 overflow-hidden' aria-hidden>
                  <div className='p-0'>
                    <p>We reward some participants who complete tasks early, however, this is not a weekly reward. All the work that will be done during the program are hypothetical.</p>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
        <div className='flex justify-center items-center pb-10 pt-[70px] sm:flex-col'>
          <p className='pr-[10px] pb-[7px] m-0 tracking-[0.00938em] text-[#333] sm:text-base text-lg leading-[130%]'>
            Still got questions?
          </p>
          <div className='flex justify-center pb-[7px]'>
            <Link className='inline-flex items-center justify-center relative no-underline tracking-[0.02857em] min-w-[64px] bg-[#e7332b] rounded-[71px] text-white py-[10px] sm:px-5 px-8 text-lg' to='https://twitter.com/thezuriteam'>
              <svg className='text-white pr-[7px] w-[1em] h-[1em] inline-block fill-white text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                <path d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 
                1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0
                2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29
                5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'></path>
              </svg>
              <p className='m-0 text-[1rem] tracking-[0.00938em]'>Tweet them at us</p>
              <span className='absolute overflow-hidden z-0'></span>
            </Link>
          </div>
        </div>
        <hr className='m-0 border-b-[1px] border-[#000000] border-t-0 border-x-0 border-opacity-10' />
      </div>
      <div className='max-w-[1440px] 2xl:pt-[30px] pt-[49px] 2xl:w-[90%] w-[83%] m-auto'>
        <div className='ml-[10%] mt-[10px]'>
          <img className='sm:w-[23%] w-[13%]' src='https://training.zuri.team/section7wire.svg' alt='spiral' />
        </div>
        <div className='flex justify-end -mt-[65px]'>
          <img className='w-[12%]' src='https://training.zuri.team/Star1.svg' alt='star' />
        </div>
        <div>
          <p className='text-center tracking-[0.00938em] sm:-mt-[13px] -mt-[50px] text-[#e7332b] sm:text-lg 2xl:text-xl text-2xl leading-[130%]'>
            Structure
          </p>
          <p className='text-center pb-5 tracking-[0.00938em] m-0 text-[#1b1a20] sm:text-2xl 2xl:text-[30px] text-[40px] font-bold leading-[130%]'>
            Program Structure
          </p>
          <p className='text-center pb-[60px] tracking-[0.00938em] m-0 text-[#333] sm:text-base text-lg leading-[130%]'>
            There are 2 broad paths in this program based on your availability.
          </p>
        </div>
        <div className='flex box-border flex-row flex-wrap -mt-10 -ml-10'>
          {bigScreen &&
          <div className='absolute flex left-0 mt-[19%]'>
            <img src='https://training.zuri.team/move.svg' alt='' />
          </div>}
          <div className='flex pl-10 pt-10 box-border m-0 flex-row basis-[100%] bxg:basis-[50%] bxg:max-w-[50%] max-w-full'>
            <div className='bg-[#1b1a20] border border-white border-solid rounded-[65px] shadow-[0_31px_60px_rgba(231,51,43,0.2)] box-border py-16 px-12 lg:h-[740px]'>
              <p className='m-0 pb-[18px] tracking-[0.00938em] text-white text-[35px] font-bold leading-[130%]'>Full-time</p>
              <p className='m-0 pb-[18px] tracking-[0.01em] text-white sm:w-full w-[90%] leading-[140%]'>
                Requires at least 25 hours weekly on program content.
              </p>
              <p className='m-0 text-lg font-black tracking-[0.01em] text-white leading-[140%]'>
                Available Tracks:
              </p>
              <div className='flex'>
                <svg className='fill-white w-2 pr-[10px] box-content h-[1em] inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Full Stack: Backend (Python, JavaScript), Frontend (HTML, CSS, JavaScript) & DevOps
                </p>
              </div>
              <div className='flex pb-[18px]'>
                <svg className='fill-white w-2 pr-[10px] box-content h-[1em] inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Design: Figma, Adobe XD
                </p>
              </div>
              <p className='m-0 text-lg font-black tracking-[0.01em] text-white leading-[140%]'>
                Phases:
              </p>
              <div className='flex'>
                <svg className='fill-white w-2 box-content pr-[10px] h-[1em] inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Training Phase
                </p>
              </div>
              <div className='flex pb-[18px]'>
                <svg className='w-2 box-content pr-[10px] h-[1em] fill-white inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Project Phase
                </p>
              </div>
              <p className='m-0 text-lg font-black tracking-[0.01em] text-white leading-[140%]'>
                Post Program:
              </p>
              <div className='flex'>
                <svg className='fill-white box-content w-2 pr-[10px] h-[1em] inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Certification of Attendance
                </p>
              </div>
              <div className='flex'>
                <svg className='box-content w-2 pr-[10px] h-[1em] fill-white inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  <Link className='text-white underline' to='/internship'>
                    Zuri Internship  
                  </Link> 
                  <img className='w-[15px] inline-block' src='https://training.zuri.team/clarity.svg' alt='alert' />
                </p>
              </div>
              <div className='flex'>
                <svg className='text-white box-content w-2 pr-[10px] h-[1em] fill-white inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Laptop Reward (upgrade or new one)  
                  <img className='w-[15px] inline-block' src='https://training.zuri.team/clarity.svg' alt='alert' />
                </p>
              </div>
              <div className='flex'>
                <svg className='text-white w-2 pr-[10px] box-content h-[1em] fill-white inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Job Placement     
                  <img className='w-[15px] inline-block' src='https://training.zuri.team/clarity.svg' alt='alert' />
                </p>
              </div>
              <div className='flex'>
                <svg className='text-white w-2 pr-[10px] h-[1em] box-content fill-white inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Zuri Talent Pool
                </p>
              </div>
              <div className='flex'>
                <svg className='text-white w-2 pr-[10px] box-content h-[1em] fill-white inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  More Training:  
                  <img className='w-[15px] inline-block' src='https://training.zuri.team/clarity.svg' alt='alert' />
                </p>
              </div>
              <div className='flex'>
                <div className='pr-[17px]'></div>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Interview Prep
                </p>
              </div>
              <div className='flex'>
                <div className='pr-[17px]'></div>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Algorithms & Data Structure
                </p>
              </div>
              <div className='flex'>
                <div className='pr-[17px]'></div>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Freelance Setup & Training
                </p>
              </div>
              <div className='flex'>
                <div className='pr-[17px]'></div>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  LinkedIn Optimization
                </p>
              </div>
              <div className='flex'>
                <div className='pr-[17px]'></div>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  CV Review
                </p>
              </div>
              <img className='flex float-right -mr-[19px] sm:-mt-[98px] 2xl:-mt-[106px] -mt-[114px] sm:w-[29%] w-[20%]' src='https://training.zuri.team/hour.png' alt='' />
            </div>
          </div>
          <div className='flex pl-10 pt-10 box-border m-0 flex-row basis-[100%] basis-[100%] bxg:basis-[50%] bxg:max-w-[50%] max-w-full'>
            <div className='bg-[#1b1a20] border border-white border-solid rounded-[65px] shadow-[0_31px_60px_rgba(231,51,43,0.2)] box-border py-16 px-12 lg:h-[740px]'>
              <p className='m-0 pb-[18px] tracking-[0.00938em] text-white text-[35px] font-bold leading-[130%]'>Part-time</p>
              <p className='m-0 pb-[18px] tracking-[0.01em] text-white sm:w-full w-[90%] leading-[140%]'>
                Requires at least 11 hours weekly on program content.
              </p>
              <p className='m-0 text-lg font-black tracking-[0.01em] text-white leading-[140%]'>
                Available Tracks:
              </p>
              <div className='flex'>
                <svg className='fill-white box-content w-2 pr-[10px] h-[1em] inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Frontend:
                </p>
              </div>
              <div className='flex pb-[18px]'>
                <div className='pr-[17px]'></div>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  HTML, CSS, JavaScript
                </p>
              </div>
              <div className='flex'>
                <svg className='text-white box-content fill-white w-2 pr-[10px] h-[1em] inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Backend: Can only select one backend language
                </p>
              </div>
              <div className='flex'>
                <div className='pr-[17px]'></div>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Python,
                </p>
              </div>
              <div className='flex'>
                <div className='pr-[17px]'></div>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  PHP,
                </p>
              </div>
              <div className='flex pb-[18px]'>
                <div className='pr-[17px]'></div>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  JavaScript
                </p>
              </div>
              <div className='flex'>
                <svg className='text-white fill-white box-content w-2 pr-[10px] h-[1em] inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Design:
                </p>
              </div>
              <div className='flex pb-[18px]'>
                <div className='pr-[17px]'></div>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Figma
                </p>
              </div>
              <p className='m-0 text-lg font-black tracking-[0.01em] text-white leading-[140%]'>
                Phases:
              </p>
              <div className='flex pb-[18px]'>
                <svg className='text-white w-2 pr-[10px] fill-white box-content h-[1em] inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Training Phase
                </p>
              </div>
              <p className='m-0 text-lg font-black tracking-[0.01em] text-white leading-[140%]'>
                Post Program:
              </p>
              <div className='flex'>
                <svg className='text-white w-2 pr-[10px] fill-white box-content h-[1em] inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Certification of Attendance
                </p>
              </div>
              <div className='flex'>
                <svg className='text-white w-2 pr-[10px] fill-white box-content h-[1em] inline-block flex-shrink-0 text-[1.5rem]' aria-hidden viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='8'></circle>
                </svg>
                <p className='text-white m-0 tracking-[0.01em] leading-[140%] sm:w-full w-[90%]'>
                  Zuri Internship
                </p>
              </div>
              <img className='flex float-right -mr-[19px] sm:-mt-[98px] 2xl:-mt-[110px] -mt-[137px] sm:w-[47%] w-[40%]' src='https://training.zuri.team/time.png' alt='' />
            </div>
          </div>
        </div>
        <div>
          <img className='flex float-right sm:-mr-[23px] 2xl:-mr-[31px] -mr-[57px] -mt-[72px] sm:w-[40%] w-[16%]' src='https://training.zuri.team/circle.png' alt='' />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='max-w-[1440px] 2xl:pt-[30px] pt-[49px] w-[90%] mt-[70px] mb-auto mx-auto'>
        {bigScreen &&
        <div>
          <img className='flex mb-[27px] w-[10%]' src='https://training.zuri.team/circle.png' alt='' />
        </div>}
        <div className='rounded-[24px] bg-[#E7332B]'>
          <div>
            <img className='absolute left-[15%] sm:mt-7 mt-[65px] sm:w-[19%] w-[12%]' src='https://training.zuri.team/round.svg' alt='' />
          </div>
          <div>
            <img className='absolute right-[5%] sm:w-[22%] w-[11%]' src='https://training.zuri.team/bend1.svg' alt='' />
          </div>
          <div>
            <p className='m-0 tracking-[0.00938em] text-center leading-[130%] text-white flex text-lg justify-center pt-[70px] w-full'>Get Started</p>
            <p className='text-white md:text-[26px] sm:text-[36px] 2xl:text-[46px] text-[55px] leading-[130%] m-auto pb-10 pt-5 text-center 2xl:w-[55%] w-[50%] font-bold'>
              Break into the tech industry like a Pro
            </p>
            <div className='flex justify-center'>
              <Link className='inline-flex items-center justify-center relative box-border no-underline tracking-[0.02857em] bg-white rounded-[71px] text-[#e7332b] py-[10px] px-8 text-lg leading-6 font-normal' to='/enroll'>
                Enroll Now
                <span></span>
              </Link>
            </div>
            <div className='flex'>
              <div className='flex'>
                <img className='w-[120%]' src='https://training.zuri.team/curve2.svg' alt='' />
              </div>
              <div className='flex w-[180%] justify-end'>
                <img className='left-0 sm:w-[20%] w-[13%]' src='https://training.zuri.team/mains.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-[1440px] pt-[90px] w-[90%] m-auto pb-5'>
        <div className='flex box-border flex-row flex-wrap -mt-4 -ml-4'>
          <div className='pl-4 pt-4 m-0 box-border flex-row basis-[100%] bxg:basis-[50%] bxg:max-w-[50%] max-w-full'>
            <div className='2xl:flex 2xl:justify-center'>
              <Link to='/'>
                <img src='https://training.zuri.team/logo.svg' alt='' />
              </Link>
            </div>
          </div>
          <div className='pl-4 pt-4 m-0 box-border flex-row basis-[100%] bxg:basis-[50%] bxg:max-w-[50%] max-w-full'>
            <div className='flex justify-center bxg:justify-end'>
              <div className='flex sm:justify-center'>
                <Link to='https://www.facebook.com/thezuriteam/'>
                  <img className='pr-[10px]' src='https://training.zuri.team/facebook.svg' alt='' />
                </Link>
                <Link to='https://www.linkedin.com/company/zuri-team'>
                  <img className='pr-[10px]' src='https://training.zuri.team/linkd.svg' alt='' />
                </Link>
                <Link to='https://twitter.com/thezuriteam'>
                  <img className='pr-[10px]' src='https://training.zuri.team/twitter.svg' alt='' />
                </Link>
                <Link to='https://www.youtube.com/thezuriteam'>
                  <img className='pr-[10px]' src='https://training.zuri.team/youtube.svg' alt='' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-5 flex justify-between sm:flex-col-reverse flex-row'>
          <p className='text-[#1b1a20] leading-[140%] text-center py-[1em]'>
            © 2022  Zuri Training 
          </p>
          <hr className='pt-5 m-0 border-b border-t-0 border-x-0 border-[#000000] border-opacity-10' />
          <div className='flex sm:flex-col-reverse flex-row'>
            <Link className='mr-[15px] my-[1em] no-underline text-[#1b1a20] text-center' to='/privacy'>
              <p className='text-[#1b1a20] text-center'>Privacy Policy</p>
            </Link>
            <Link className='no-underline text-[#1b1a20] text-center' to='/privacy'>
              <p className='my-[1em]'>Ingressive For Good</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Training