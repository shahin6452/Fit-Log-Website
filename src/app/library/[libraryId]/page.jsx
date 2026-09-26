import Image from 'next/image';
import React from 'react';
import ExcerciseActions from './ExcerciseActions';
import { notFound } from 'next/navigation';

const ExcerciseCardDetail = async ({ params }) => {
    const { libraryId } = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${libraryId}`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();

    if (!data?.id) {
        notFound();
    }

    const {
        image,
        name,
        description,
        muscleGroups,
        equipment,
        difficulty,
        sets,
        reps,
        duration,
        caloriesBurned,
        rating,
        instructions,
    } = data;

    return (
        <div className="bg-[#0F1115] py-6 sm:py-8 lg:py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                    {/* Image */}
                    <div className="relative h-72 overflow-hidden rounded-xl sm:h-96 lg:h-full">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div>

                        <div className="mb-6">
                            <h1 className="text-2xl font-bold uppercase text-gray-300 sm:text-3xl">
                                {name}
                            </h1>

                            <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                                {description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {muscleGroups.map((elem, index) => (
                                    <div
                                        key={index}
                                        className="flex h-6 items-center justify-center rounded-md bg-[#C2F800] px-3 text-xs font-bold text-black"
                                    >
                                        {elem}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="rounded-3xl bg-[#1E2330]">
                            <div className="overflow-hidden rounded-lg border border-[#1c2025] p-2 sm:p-3">

                                <div className="flex flex-col gap-1 border-b border-[#1c2025] px-3 py-3 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-4">
                                    <span className="uppercase text-gray-200">
                                        Equipment
                                    </span>
                                    <span className="break-words text-gray-200 sm:text-right">
                                        {equipment}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1 border-b border-[#1c2025] px-3 py-3 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-4">
                                    <span className="uppercase text-gray-200">
                                        Difficulty
                                    </span>
                                    <span className="text-gray-200 sm:text-right">
                                        {difficulty}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1 border-b border-[#1c2025] px-3 py-3 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-4">
                                    <span className="uppercase text-gray-200">
                                        Sets
                                    </span>
                                    <span className="text-gray-200 sm:text-right">
                                        {sets}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1 border-b border-[#1c2025] px-3 py-3 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-4">
                                    <span className="uppercase text-gray-200">
                                        Reps
                                    </span>
                                    <span className="text-gray-200 sm:text-right">
                                        {reps}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1 border-b border-[#1c2025] px-3 py-3 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-4">
                                    <span className="uppercase text-gray-200">
                                        Duration
                                    </span>
                                    <span className="text-gray-200 sm:text-right">
                                        {duration}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1 border-b border-[#1c2025] px-3 py-3 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-4">
                                    <span className="uppercase text-gray-200">
                                        Calories
                                    </span>
                                    <span className="text-gray-200 sm:text-right">
                                        {caloriesBurned}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1 px-3 py-3 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-4">
                                    <span className="uppercase text-gray-200">
                                        Rating
                                    </span>
                                    <span className="text-gray-200 sm:text-right">
                                        {rating}
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Instructions */}
                        <div className="mt-6">
                            <h2 className="mb-3 text-sm font-bold uppercase text-gray-300">
                                Instructions
                            </h2>

                            <ol className="list-decimal space-y-2 pl-5 text-xs leading-5 text-gray-400 sm:text-sm">
                                {instructions.map((instruction, ind) => (
                                    <li key={ind}>
                                        {instruction}
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="mt-6">
                            <ExcerciseActions exercise={data} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExcerciseCardDetail;