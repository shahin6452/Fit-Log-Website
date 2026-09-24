import Image from 'next/image';
import React from 'react';
import { oswald } from "../fonts";  

const ExcerciseCard = ({ exercise }) => {
    const { image, muscleGroups, name, equipment, duration, caloriesBurned, rating } = exercise
    return (
        <div>
            <div className="card bg-[#101116] border border-[#24262d] rounded-2xl overflow-hidden">

                {/* Image */}
                <figure>
                    <Image
                        src={image}
                        alt={name}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                    />
                </figure>

                {/* Content */}
                <div className="card-body p-6">

                    {/* Tags */}
                    <div className="flex gap-2">
                        <span className="badge bg-[#C2F800] text-black border-none font-bold">
                            {muscleGroups[0]}
                        </span>

                        <span className="badge bg-[#C2F800] text-black border-none font-bold">
                            {muscleGroups[1]}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className={`text-2xl font-semibold text-white ${oswald.className}`}>
                        {name}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-[#9CA3AF]">
                        Barbell, Bench
                    </p>

                    {/* Divider */}
                    <div className="border-t border-[#24262d]"></div>

                    {/* Info */}
                    <div className="flex items-center gap-5 text-sm text-[#9CA3AF]">
                        <span>◷ 25 min</span>
                        <span>● 180 kcal</span>
                        <span>☆ 4.8</span>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default ExcerciseCard;