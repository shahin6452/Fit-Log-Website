import Image from 'next/image';
import React from 'react';
import { oswald } from "../fonts";
import Link from 'next/link';

const ExcerciseCard = ({ exercise }) => {

    const {
        image,
        muscleGroups,
        name,
        equipment,
        duration,
        caloriesBurned,
        rating
    } = exercise;

    return (
        <Link
            href={`/library/${exercise.id}`}
            className="block px-4 transition-transform duration-300 sm:px-6 lg:px-0 hover:scale-[1.03]"
        >

            <div className="card overflow-hidden rounded-2xl border border-[#24262d] bg-[#101116]">

                {/* Image */}
                <figure>
                    <Image
                        src={image}
                        alt={name}
                        width={400}
                        height={250}
                        className="h-auto max-h-125 w-full object-cover sm:h-[450px] lg:h-[300px]"
                    />
                </figure>

                {/* Content */}
                <div className="p-5 sm:p-6 lg:p-7">

                    {/* Muscle Groups */}
                    <div className="flex flex-wrap gap-2">
                        {
                            muscleGroups.map((elem, index) => (
                                <div
                                    key={index}
                                    className="badge border-none bg-[#C2F800] text-xs font-bold text-black"
                                >
                                    {elem}
                                </div>
                            ))
                        }
                    </div>

                    {/* Name */}
                    <h2
                        className={`mt-4 text-2xl font-semibold text-white sm:text-3xl ${oswald.className}`}
                    >
                        {name}
                    </h2>

                    {/* Equipment */}
                    <p className="mb-5 mt-2 text-sm leading-6 text-[#9CA3AF]">
                        {equipment}
                    </p>

                    {/* Info */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[#9CA3AF] sm:text-sm">
                        <span>◷ {duration}</span>
                        <span>● {caloriesBurned} kcal</span>
                        <span>☆ {rating}</span>
                    </div>

                </div>

            </div>

        </Link>
    );
};

export default ExcerciseCard;