import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-[215px] max-w-[1240px] mx-auto'>
        <div className='flex flex-wrap justify-between mb-14 p-[20px] sm:flex-col sm:justify-center sm:items-center text-center lg:text-left'>
            <div>
                <img className='sm:w-[150px] sm:mb-[15px] align-middle border-none' src='https://zuri.team/img/zuri-logo-full.svg' alt='logo' />
            </div>
            <div>
                <h3 className='sm:text-2xl sm:mt-5 text-base font-bold leading-6 text-[#514949] mb-2'>Links</h3>
                <a className='text-[#E7332B] no-underline bg-transparent' href='https://flutterwave.com/store/zuriteam'>
                    <p className='mt-0 mb-4'>Store</p>
                </a>
                <a className='text-[#E7332B] no-underline bg-transparent' href='https://blog.zuri.team'>
                    <p className='mt-0 mb-4'>Blog</p>
                </a>
            </div>
            <div>
                <h3 className='sm:text-2xl sm:mt-5 text-base font-bold leading-6 text-[#514949] mb-2'>Contact</h3>
                <p className='text-sm text-[#514949] opacity-90 mt-0 mb-4'>8 Jubliee-CMD Road, Magodo,<br /> Lagos State</p>
                <p className='text-sm text-[#514949] opacity-90 mt-0 mb-4'>
                    <a className='text-[#E7332B] no-underline bg-transparent' href='mailto:hello@zuri.com'>hello@zuri.team</a>
                </p>
            </div>
            <div>
                <h3 className='sm:text-2xl sm:mt-5 text-base font-bold leading-6 text-[#514949] mb-2'>Follow Us</h3>
                <div className='flex justify-between'>
                    <a className='text-[#E7332B] no-underline bg-transparent' href='https://web.facebook.com/thezuriteam'>
                        <img className='w-[18px] mr-[5px] align-middle border-none' src='https://zuri.team/img/fb.png' alt='fb' />
                    </a>
                    <a className='text-[#E7332B] no-underline bg-transparent' href='https://twitter.com/theZuriTeam'>
                        <img className='w-[18px] mr-[5px] align-middle border-none' src='https://zuri.team/img/twitter.png' alt='twitter' />
                    </a>
                    <a className='text-[#E7332B] no-underline bg-transparent' href='https://www.instagram.com/thezuriteam/'>
                        <img className='w-[18px] mr-[5px] align-middle border-none' src='https://zuri.team/img/IG.png' alt='IG' />
                    </a>
                    <a className='text-[#E7332B] no-underline bg-transparent' href='/'>
                        <img className='w-[18px] mr-[5px] align-middle border-none' src='https://zuri.team/img/in.png' alt='in' />
                    </a>
                </div>
            </div>
        </div>
        <div>
            <hr className='m-4 opacity-20 border-[0.7px] border-solid border-[#514949] h-0 overflow-visible box-content' />
        </div>
        <div className='text-center mx-auto'>
            <p className='text-base font-bold mt-8 text-[#514949] pb-[97px] mb-4'>© 2020 ZURI TEAM</p>
        </div>
    </footer>
  )
}

export default Footer