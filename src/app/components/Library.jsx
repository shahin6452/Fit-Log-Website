import React from 'react';
import { oswald } from "../fonts";
import ExcerciseCard from './ExcerciseCard';

const getExercises = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
};

const Library = async () => {

    const exercises = await getExercises();

    return (
        <div className="mt-16 sm:mt-20" id="library">

            <div className="container mx-auto px-4 sm:px-6 lg:px-0">

                <h2
                    className={`${oswald.className} mb-2 text-2xl font-semibold sm:text-3xl`}
                >
                    THE LIBRARY
                </h2>

                <p className="mb-7 text-sm font-bold text-[#9CA3AF] sm:text-base">
                    Twelve lifts covering every major muscle group.
                </p>

                {/* Card Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {
                        exercises.map(exercise =>
                            <ExcerciseCard
                                key={exercise.id}
                                exercise={exercise}
                            />
                        )
                    }

                </div>

            </div>

        </div>
    );
};

export default Library;