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

                <div className="card-body p-6">
                    <div className="flex gap-2">
                        {
                            muscleGroups.map(elem => <div className="badge bg-[#C2F800] text-black border-none font-bold">{elem}</div>)
                        }
                    </div>

                    <h2 className={`text-2xl font-semibold text-white ${oswald.className}`}>
                        {name}
                    </h2>

                    <p className="text-[#9CA3AF] mb-4">
                        {equipment}
                    </p>

                    

                    {/* Info */}
                    <div className="flex items-center gap-5 text-sm text-[#9CA3AF]">
                        <span>◷ {duration}</span>
                        <span>● {caloriesBurned} kcal</span>
                        <span>☆ {rating}</span>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default ExcerciseCard;