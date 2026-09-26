import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="container mx-auto">
            <div className="rounded-2xl bg-[#222630]">

                <div className="flex flex-col items-center justify-between gap-8 p-8 lg:flex-row lg:p-12">

                    {/* Left */}
                    <div className="flex-1">

                        <h5 className="text-[12px] font-bold tracking-[2px] text-[#C2F800]">
                            WORKOUT LIBRARY
                        </h5>

                        <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
                            TRAIN WITH INTENT. LOG
                            <br />
                            EVERY SET.
                        </h1>

                        <p className="mt-4 max-w-lg text-sm leading-6 text-[#9CA3AF]">
                            FitLog is a dark, no-nonsense gym companion:
                            pick a lift, lock it into today's plan, and watch
                            the week's work add up.
                        </p>

                        <Link href='#library'>
                            <button className="mt-6 rounded-lg bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#d4ff3d]">
                                BROWSE WORKOUTS
                            </button>
                        </Link>

                    </div>

                    {/* Right Image */}
                    <div className="flex flex-1 justify-center lg:justify-end">
                        <Image
                            src="/assets/banner.png"
                            alt="FitLog workout"
                            width={350}
                            height={350}
                            className="object-contain"
                        />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HeroSection;