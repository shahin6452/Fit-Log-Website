import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div className='container mx-auto bg-[#222630] rounded-2xl'>
                <div className='container bg-[#222630] rounded-2xl'>
                    <div className='flex justify-between items-center p-23'>
                        {/* left */}
                        <div>
                            <h5 className='text-[#C2F800] font-bold text-[12px] tracking-[2px]'>WORKOUT LIBRARY</h5>
                            <h1 className='font-extrabold text-[#FFFFFF] text-5xl'>TRAIN WITH INTENT. LOG <br />  EVERY SET.</h1>
                            <p className=' max-w-100 text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                            <button className='bg-[#C2F8000] px-3 py-2 rounded-2xl font-semibold'>BROWSE WORKOUTS</button>
                        </div>
                        {/* right image */}
                        <div>
                            <Image src='/assets/banner.png' alt='hero' width={350} height={350} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;