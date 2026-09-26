"use client";

import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Clock3, Flame, Star, Check, X } from 'lucide-react';
import { PlanContext } from '../context/PlanContext';

const PlanPage = () => {

    const {
        todayPlan,
        savedExercises,
        removeFromPlan,
        removeFromSaved,
        completedExercises,
        setCompletedExercises
    } = useContext(PlanContext);

    const [activeTab, setActiveTab] = useState("today");
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState("duration");
    const [toast, setToast] = useState("");

    useEffect(() => {
        setLoading(false);
    }, []);

    const exercises = activeTab === "today"
        ? todayPlan
        : savedExercises;

    const sortedExercises = [...exercises].sort((a, b) => {
        if (sortBy === "duration") {
            return Number(a.duration) - Number(b.duration);
        }

        if (sortBy === "calories") {
            return Number(a.caloriesBurned) - Number(b.caloriesBurned);
        }

        if (sortBy === "rating") {
            return Number(b.rating) - Number(a.rating);
        }

        return 0;
    });

    const totalMinutes = todayPlan.reduce(
        (total, exercise) => total + Number(exercise.duration || 0),
        0
    );

    const totalCalories = todayPlan.reduce(
        (total, exercise) => total + Number(exercise.caloriesBurned || 0),
        0
    );

    const handleMarkAsDone = (exercise) => {

        const alreadyExists = completedExercises.some((item) => item.id === exercise.id);

        if (alreadyExists) {
            return;
        }

        setCompletedExercises([...completedExercises, exercise]);
        removeFromPlan(exercise.id);

        setToast("Workout marked as done");

        setTimeout(() => {
            setToast("");
        }, 2000);
    };

    const handleRemove = (exercise) => {

        if (activeTab === "today") {
            removeFromPlan(exercise.id);
            setToast("Removed from today's plan");
        } else {
            removeFromSaved(exercise.id);
            setToast("Removed from saved");
        }

        setTimeout(() => {
            setToast("");
        }, 2000);
    };

    return (


        <main className="min-h-screen bg-[#08090b] px-5 py-6 text-white md:px-8 lg:px-10">

            {loading ? (
                <div className="py-20 text-center text-sm text-gray-500">
                    Loading workouts…
                </div>
            ) : (
                <>
                    <div className="mb-5">
                        <h1 className="text-2xl font-bold uppercase text-gray-300">
                            My Plan
                        </h1>

                        <p className="mt-1 text-xs text-gray-500">
                            Cap of five lifts for today. Finish them, then load more.
                        </p>
                    </div>


                    <div className="mb-5 grid grid-cols-3 overflow-hidden rounded-xl border border-[#1b2025] bg-[#090a10]">

                        <div className="border-r border-[#1b2025] px-4 py-5 md:px-6">
                            <p className="text-[10px] text-gray-500">
                                Exercises
                            </p>

                            <p className="mt-1 text-2xl font-bold text-[#C2F800]">
                                {todayPlan.length}
                            </p>
                        </div>


                        <div className="border-r border-[#1b2025] px-4 py-5 md:px-6">
                            <p className="text-[10px] text-gray-500">
                                Minutes
                            </p>

                            <p className="mt-1 text-2xl font-bold text-gray-300">
                                {totalMinutes}
                            </p>
                        </div>


                        <div className="px-4 py-5 md:px-6">
                            <p className="text-[10px] text-gray-500">
                                Calories
                            </p>

                            <p className="mt-1 text-2xl font-bold text-gray-300">
                                {totalCalories}
                            </p>
                        </div>

                    </div>


                    <div className="mb-4 flex items-center justify-between">

                        <div className="flex rounded-lg border border-[#1b2025] bg-[#080b0e] p-1">

                            <button
                                onClick={() => setActiveTab("today")}
                                className={`rounded-md px-3 py-1.5 text-[10px] ${activeTab === "today"
                                    ? "bg-[#11181c] text-gray-300"
                                    : "text-gray-500 hover:bg-[#14191d]"
                                    }`}
                            >
                                Today's Plan
                            </button>

                            <button
                                onClick={() => setActiveTab("saved")}
                                className={`rounded-md px-3 py-1.5 text-[10px] ${activeTab === "saved"
                                    ? "bg-[#11181c] text-gray-300"
                                    : "text-gray-500 hover:bg-[#14191d]"
                                    }`}
                            >
                                Saved
                            </button>

                        </div>


                        <div className="flex items-center gap-2">
                            <span className="text-[10px] text-gray-500">
                                Sort By
                            </span>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="select select-sm h-8 min-h-0 w-20 border border-[#22272d] bg-[#090a0d] text-[10px] text-gray-400 outline-none"
                            >
                                <option value="duration">Duration</option>
                                <option value="calories">Calories</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>

                    </div>


                    {exercises.length > 0 && (
                        <div className="space-y-3">

                            {sortedExercises.map((exercise) => (
                                <div
                                    key={exercise.id}
                                    className="flex items-center gap-3 rounded-xl border border-[#172025] bg-[#07100f] p-2.5 md:p-3"
                                >

                                    <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg md:h-16 md:w-28">
                                        <Image
                                            src={exercise.image}
                                            alt={exercise.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>


                                    <div className="min-w-0 flex-1">

                                        <h2 className="truncate text-xs font-bold uppercase text-gray-300">
                                            {exercise.name}
                                        </h2>

                                        <p className="mt-0.5 text-[10px] text-gray-500">
                                            {exercise.equipment}
                                        </p>


                                        <div className="mt-1.5 flex items-center gap-3 text-[9px] text-gray-500">

                                            <span className="flex items-center gap-1">
                                                <Clock3 size={10} className="text-[#C2F800]" />
                                                {exercise.duration}
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <Flame size={10} className="text-[#C2F800]" />
                                                {exercise.caloriesBurned}
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <Star size={10} className="text-[#C2F800]" />
                                                {exercise.rating}
                                            </span>

                                        </div>

                                    </div>


                                    <div className="hidden items-center gap-2 sm:flex">

                                        <Link
                                            href={`/library/${exercise.id}`}
                                            className="btn h-8 min-h-0 rounded-full border border-[#293137] bg-transparent px-4 text-[10px] font-normal text-gray-400 hover:bg-[#151a1e]"
                                        >
                                            View Details
                                        </Link>


                                        {activeTab === "today" && (
                                            <button
                                                onClick={() => handleMarkAsDone(exercise)}
                                                className="btn h-8 min-h-0 rounded-full border-0 bg-[#C2F800] px-4 text-[10px] font-semibold text-black hover:bg-[#b5eb00]"
                                            >
                                                <Check size={12} />
                                                Mark as Done
                                            </button>
                                        )}


                                        <button
                                            onClick={() => handleRemove(exercise)}
                                            className="btn btn-ghost btn-xs text-gray-500 hover:text-red-400"
                                        >
                                            <X size={14} />
                                        </button>

                                    </div>

                                </div>
                            ))}

                        </div>
                    )}


                    {exercises.length === 0 && (
                        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-[#20252a]">

                            <h2 className="text-sm font-bold uppercase text-gray-400">
                                Nothing Here Yet
                            </h2>

                            <p className="mt-2 text-[10px] text-gray-600">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/"
                                className="mt-4 btn h-9 min-h-0 rounded-full border-0 bg-[#C2F800] px-5 text-[10px] text-black hover:bg-[#b5eb00]"
                            >
                                Go to workouts
                            </Link>

                        </div>
                    )}
                </>
            )}
            {toast && (
                <div className="fixed bottom-5 right-5 z-50 w-72 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-xl">

                    <div className="flex items-start gap-3 px-4 py-3">

                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                            ✓
                        </div>

                        <p className="flex-1 text-sm text-gray-700">
                            {toast}
                        </p>

                        <button
                            onClick={() => setToast("")}
                            className="text-lg leading-none text-gray-400 hover:text-gray-700"
                        >
                            ×
                        </button>

                    </div>

                    <div className="h-1 bg-gray-200">
                        <div className="h-full bg-[#C2F800] animate-[toastProgress_2s_linear_forwards]" />
                    </div>

                </div>
            )}

        </main>
    );
};

export default PlanPage;