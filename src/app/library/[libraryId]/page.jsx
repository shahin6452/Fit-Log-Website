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
        <div className='bg-[#0F1115] py-10'>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">

                <div className="relative h-100 overflow-hidden rounded-xl">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>

                    <div className="mb-6">
                        <h1 className="text-3xl font-bold uppercase text-gray-300">
                            {name}
                        </h1>

                        <p className="mt-2 max-w-lg text-sm leading-5 text-gray-500">
                            {description}
                        </p>

                        <div className="mt-5 flex gap-2">
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

                    <div className='rounded-3xl bg-[#1E2330]'>
                        <div className="overflow-hidden rounded-lg border border-[#1c2025] p-3">

                            <div className="flex justify-between border-b border-[#1c2025] px-4 py-3 text-xs">
                                <span className="uppercase text-gray-200">
                                    Equipment
                                </span>
                                <span className="text-gray-200">
                                    {equipment}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#1c2025] px-4 py-3 text-xs">
                                <span className="uppercase text-gray-200">
                                    Difficulty
                                </span>
                                <span className="text-gray-200">
                                    {difficulty}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#1c2025] px-4 py-3 text-xs">
                                <span className="uppercase text-gray-200">
                                    Sets
                                </span>
                                <span className="text-gray-200">
                                    {sets}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#1c2025] px-4 py-3 text-xs">
                                <span className="uppercase text-gray-200">
                                    Reps
                                </span>
                                <span className="text-gray-200">
                                    {reps}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#1c2025] px-4 py-3 text-xs">
                                <span className="uppercase text-gray-200">
                                    Duration
                                </span>
                                <span className="text-gray-200">
                                    {duration}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-[#1c2025] px-4 py-3 text-xs">
                                <span className="uppercase text-gray-200">
                                    Calories
                                </span>
                                <span className="text-gray-200">
                                    {caloriesBurned}
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-3 text-xs">
                                <span className="uppercase text-gray-200">
                                    Rating
                                </span>
                                <span className="text-gray-200">
                                    {rating}
                                </span>
                            </div>

                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="mb-3 text-sm font-bold uppercase text-gray-300">
                            Instructions
                        </h2>

                        <ol className="list-decimal space-y-2 pl-5 text-xs leading-5 text-gray-400">
                            {instructions.map((instruction, ind) => (
                                <li key={ind}>
                                    {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>

                    <ExcerciseActions exercise={data} />

                </div>
            </div>
        </div>
    );
};

export default ExcerciseCardDetail;