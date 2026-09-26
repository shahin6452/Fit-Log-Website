"use client";

import React, { useContext } from "react";
import { CalendarPlus, Bookmark } from "lucide-react";
import { PlanContext } from "../../context/PlanContext";

const ExcerciseActions = ({ exercise }) => {

    const { todayPlan, setTodayPlan, savedExercises, setSavedExercises} = useContext(PlanContext);


    const handleAddToPlan = () => {

        const alreadyExists = todayPlan.some((item) => item.id === exercise.id);

        if (alreadyExists) {
            return;
        }

        setTodayPlan([...todayPlan, exercise]);

        console.log("Today's Plan:", [...todayPlan, exercise]);
    };


    const handleSaveForLater = () => {

        const alreadyExists = savedExercises.some((item) => item.id === exercise.id);

        if (alreadyExists) {
            return;
        }

        setSavedExercises([...savedExercises, exercise]);

        console.log("Saved:", [...savedExercises, exercise, ]);
    };


    return (
        <div className="mt-6 flex gap-3">

            <button
                onClick={handleAddToPlan}
                className="btn h-10 min-h-0 border-0 bg-[#C2F800] px-4 text-xs font-semibold text-black hover:bg-[#b5eb00]"
            >
                <CalendarPlus
                    size={16}
                    strokeWidth={2}
                />

                Add to today's plan
            </button>


            <button
                onClick={handleSaveForLater}
                className="btn h-10 min-h-0 border border-[#292d32] bg-transparent px-4 text-xs font-semibold text-gray-400 hover:bg-[#15181c]"
            >
                <Bookmark
                    size={16}
                    strokeWidth={2}
                />

                Save for later
            </button>

        </div>
    );
};

export default ExcerciseActions;