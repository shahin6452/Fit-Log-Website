import { oswald } from "../fonts";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-0">
            <div className="rounded-2xl bg-[#222630]">

                <div className="flex flex-col items-center justify-between gap-8 p-6 sm:p-8 lg:flex-row lg:p-12">

                    {/* Left */}
                    <div className="w-full flex-1">

                        <h5 className="text-[12px] font-bold tracking-[2px] text-[#C2F800]">
                            WORKOUT LIBRARY
                        </h5>

                        <h1 className={` ${oswald.className} mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl`}>
                            
                            TRAIN WITH INTENT. LOG
                            <br />
                            EVERY SET.
                        </h1>

                        <p className="mt-4 max-w-lg text-sm leading-6 text-[#9CA3AF]">
                            FitLog is a dark, no-nonsense gym companion:
                            pick a lift, lock it into today's plan, and watch
                            the week's work add up.
                        </p>

                        <Link href="#library">
                            <button className="cursor-pointer mt-6 rounded-lg bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#d4ff3d]">
                                BROWSE WORKOUTS
                            </button>
                        </Link>

                    </div>

                    {/* Right Image */}
                    <div className="flex w-full flex-1 justify-center lg:justify-end">
                        <Image
                            src="/assets/banner.png"
                            alt="FitLog workout"
                            width={350}
                            height={350}
                            className="h-auto w-[220px] object-contain sm:w-[280px] lg:w-[350px]"
                        />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HeroSection;