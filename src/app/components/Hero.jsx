import Image from 'next/image';
import React from 'react';
import { oswald } from "../fonts";
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className="mt-15 px-4 sm:px-6">
            <div className="container mx-auto bg-[#222630] rounded-2xl">

                <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-6 sm:p-10 md:p-16 lg:p-23">

                    {/* left */}
                    <div className="w-full md:w-1/2">
                        <h5 className="text-[#C2F800] font-bold text-[12px] tracking-[1px] mb-5">
                            WORKOUT LIBRARY
                        </h5>

                        <h1 className={`font-semibold text-[#FFFFFF] text-4xl sm:text-5xl mb-5 ${oswald.className}`}>
                            TRAIN WITH INTENT. LOG <br className="hidden sm:block" />
                            EVERY SET.
                        </h1>

                        <p className="max-w-120 text-[#9CA3AF] mb-9">
                            FitLog is a dark, no-nonsense gym companion: pick a lift,
                            lock it into today's plan, and watch the week's work add up.
                        </p>

                        <Link
                            href="#library"
                            className="inline-block bg-[#C2F800] text-black px-6 py-3 rounded-lg text-[14px] font-bold cursor-pointer"
                        >
                            BROWSE WORKOUTS
                        </Link>
                    </div>

                    {/* right image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src="/assets/banner.png"
                            alt="hero"
                            width={350}
                            height={350}
                            className="w-full max-w-[350px] h-auto"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;