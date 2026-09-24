import Image from 'next/image';
import React from 'react';
import { Oswald } from "next/font/google";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const HeroSection = () => {
    return (
        <div>
            <div className='mt-15  container mx-auto bg-[#222630] rounded-2xl'>
                <div className='container bg-[#222630] rounded-2xl'>
                    <div className='flex justify-between items-center p-23'>
                        {/* left */}
                        <div>
                            <h5 className='text-[#C2F800] font-bold text-[12px] tracking-[1px] mb-5 '>WORKOUT LIBRARY</h5>
                            <h1 className={`font-semibold text-[#FFFFFF] text-5xl mb-5 ${oswald.className}`}>TRAIN WITH INTENT. LOG <br />  EVERY SET.</h1>
                            <p className=' max-w-120 text-[#9CA3AF] mb-7'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                            <button className='bg-[#C2F800] text-black px-6 py-2 rounded-lg text-[14px] font-bold cursor-pointer'>BROWSE WORKOUTS</button>
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