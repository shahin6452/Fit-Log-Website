import React from 'react';
import { oswald } from "../fonts";
import ExcerciseCard from './ExcerciseCard';

const getExercises = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return res.json()
}

const Library = async() => {

    const exercises = await getExercises()
    
    return (
        <div className='mt-20' id='library'>
            <div className='container mx-auto'>
                <h2 className={`${oswald.className} text-3xl font-semibold`}>THE LIBRARY</h2>
                <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
                <div>
                    
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
    )
};

export default Library;