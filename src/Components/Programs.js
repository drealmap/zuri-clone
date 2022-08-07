import React from 'react'
import {Link} from 'react-router-dom'

const Programs = () => {
  return (
    <section className='bg-white overflow-hidden'>
        <div className='my-0 mx-auto pt-0 max-w-[1440px] text-center w-full px-[15px]'>
            <h3 className='text-sm leading-[24px] mb-2 text-[#E7332B] mt-[141px] sm:mt-[60px]'>BY ZURI Team</h3>
            <p className='text-2xl leading-[40px] text-center text-[#514949] mt-2 mb-16'>
                We cater for every level of 
                <br />
                expertise and needs in the industry.
            </p>
            <div className='my-0 mx-auto max-w-[1240px] text-center w-full px-[15px]'>
                <div className='flex flex-wrap -mx-[15px]'>
                    <div className='relative z-[1] text-center w-full px-[15px] lg:flex-[0_0_33.33%] lg:max-w-[33.33%]'>
                        <div className='w-full bg-[#FFFAFA] pt-[61px] pr-[47px] pb-[82px] pl-9 text-left mx-auto m-6 lg:m-0'>
                            <img className='mb-12 w-full absolute -left-[120px] -top-[75px] z-[1] hidden border-none align-middle'
                             src='https://res.cloudinary.com/dafsch2zs/image/upload/v1596628122/Zuri%20Landing/left_bvmv7q.png' alt='hidden' />
                            <div>
                                <img className='mb-12 align-middle border-none' src='https://zuri.team/img/zuri-training-img.svg' alt='logo' />
                                <p className='text-base text-[#514949] opacity-90 mt-0 mb-4'>
                                    We understand a complete beginner cannot become a professional after a few weeks, the aim here is to get you 
                                    familiar enough with each the tools such that you’ll be able to continue learning on your own with minimal support.
                                </p>
                                <h3 className='text-[1.75rem] mb-2'>
                                    <Link className='text-[#E7332B] text-base opacity-90 no-underline bg-transparent hover:no-underline' to='/training'>
                                        I want to be trained >
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='relative text-center w-full px-[15px] lg:flex-[0_0_33.33%] lg:max-w-[33.33%]'>
                        <div className='w-full bg-[#FFFAFA] pt-[61px] pr-[47px] pb-[82px] pl-9 text-left mx-auto m-6 lg:m-0'>
                            <img className='mb-12 align-middle border-none' src='https://zuri.team/img/zuri-internship-img.svg' alt='logo' />
                            <p className='text-base text-[#514949] opacity-90 mt-0 mb-4'>
                                We place you in a work simulation. We give you tasks every week, the tasks ranges from easy to hard as you progress 
                                from stage to stage, making it to the final stage means you are ready for actual work.
                            </p>
                            <h3 className='text-[1.75rem] mb-2'>
                                <Link className='text-[#E7332B] text-base opacity-90 no-underline bg-transparent hover:no-underline' to='/'>
                                    I want to join the internship >
                                </Link>
                            </h3>
                        </div>
                    </div>
                    <div className='relative z-[1] text-center w-full px-[15px] lg:flex-[0_0_33.33%] lg:max-w-[33.33%]'>
                        <div className='w-full bg-[#FFFAFA] pt-[61px] pr-[47px] pb-[82px] pl-9 text-left mx-auto m-6 lg:m-0'>
                            <img className='mb-12 w-full absolute -left-[120px] -top-[75px] z-[1] hidden border-none align-middle'
                             src='https://res.cloudinary.com/dafsch2zs/image/upload/v1596628122/Zuri%20Landing/right_yz6hn3.png' alt='hidden' />
                            <div>
                                <img className='mb-12 align-middle border-none' src='https://zuri.team/img/zuri-talent-img.svg' alt='logo' />
                                <p className='text-base text-[#514949] opacity-90 mt-0 mb-4'>
                                    Keeping pace with projects and being on the look out for the extremely talented individuals has become ever
                                    more challenging. Here is where Zuri Team comes into play to bring the best suited talent for your company
                                </p>
                                <h3 className='text-[1.75rem] mb-2'>
                                    <Link className='text-[#E7332B] text-base opacity-90 no-underline bg-transparent hover:no-underline' to='/talent'>
                                        I am looking for talent >
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Programs