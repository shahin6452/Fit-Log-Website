"use client";

import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Clock3, Flame, Star, Check, X } from 'lucide-react';
import { PlanContext } from '../context/PlanContext';
import { oswald } from "../fonts";

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

    const totalExercises = exercises.length;

    const totalMinutes = exercises.reduce(
        (total, exercise) => total + Number(exercise.duration || 0),
        0
    );

    const totalCalories = exercises.reduce(
        (total, exercise) => total + Number(exercise.caloriesBurned || 0),
        0
    );

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

    const handleMarkAsDone = (exercise) => {
        setCompletedExercises((prevCompleted) => {
            if (prevCompleted.some((item) => item.id === exercise.id)) {
                return prevCompleted;
            }

            return [...prevCompleted, exercise];
        });

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
        <main className="min-h-screen bg-[#08090b] px-4 py-6 text-white sm:px-6 md:px-8 lg:px-10">

            {loading ? (
                <div className="py-20 text-center text-sm text-gray-500">
                    Loading workouts…
                </div>
            ) : (
                <>

                    {/* Header */}
                    <div className="mb-5">
                        <h1 className={`text-4xl font-bold uppercase text-gray-300 ${oswald.className}`}>
                            My Plan
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Cap of five lifts for today. Finish them, then load more.
                        </p>
                    </div>


                    {/* Stats */}
                    <div className="mb-5 grid grid-cols-3 overflow-hidden rounded-xl border border-[#1b2025] bg-[#090a10]">

                        <div className="border-r border-[#1b2025] px-3 py-4 sm:px-4 sm:py-5 md:px-6">
                            <p className="text-[16px] text-gray-500">
                                Exercises
                            </p>

                            <p className="mt-1 text-xl font-bold text-[#C2F800] sm:text-3xl">
                                {totalExercises}
                            </p>
                        </div>


                        <div className="border-r border-[#1b2025] px-3 py-4 sm:px-4 sm:py-5 md:px-6">
                            <p className="text-[16px] text-gray-500">
                                Minutes
                            </p>

                            <p className="mt-1 text-xl font-bold text-gray-300 sm:text-3xl">
                                {totalMinutes}
                            </p>
                        </div>


                        <div className="px-3 py-4 sm:px-4 sm:py-5 md:px-6">
                            <p className="text-[16px] text-gray-500">
                                Calories
                            </p>

                            <p className="mt-1 text-xl font-bold text-gray-300 sm:text-3xl">
                                {totalCalories}
                            </p>
                        </div>

                    </div>


                    {/* Tabs + Sort */}
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex w-fit rounded-lg border border-[#1b2025] bg-[#080b0e] p-1">

                            <button
                                onClick={() => setActiveTab("today")}
                                className={`cursor-pointer rounded-md px-3 py-1.5 text-[16px] ${activeTab === "today"
                                        ? 'bg-lime-500/20 text-lime-400'
                                        : 'text-gray-300 hover:bg-lime-500/10 hover:text-lime-400'
                                    }`}
                            >
                                Today's Plan
                            </button>

                            <button
                                onClick={() => setActiveTab("saved")}
                                className={`cursor-pointer rounded-md px-3 py-1.5 text-[16px] ${activeTab === "saved"
                                        ? 'bg-lime-500/20 text-lime-400'
                                        : 'text-gray-300 hover:bg-lime-500/10 hover:text-lime-400'
                                    }`}
                            >
                                Saved
                            </button>

                        </div>


                        <div className="flex items-center gap-2">

                            <span className="text-[12px] text-gray-300">
                                Sort By
                            </span>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="select select-sm h-8 min-h-0 w-24 border border-[#22272d] bg-[#090a0d] text-[10px] text-gray-300 outline-none"
                            >
                                <option value="duration">Duration</option>
                                <option value="calories">Calories</option>
                                <option value="rating">Rating</option>
                            </select>

                        </div>

                    </div>


                    {/* Exercise List */}
                    {exercises.length > 0 && (
                        <div className="space-y-3">

                            {sortedExercises.map((exercise) => (

                                <div
                                    key={exercise.id}
                                    className="flex flex-col gap-3 rounded-xl border border-[#172025] bg-[#07100f] p-3 sm:flex-row sm:items-center"
                                >

                                    {/* Image */}
                                    <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-28">
                                        <Image
                                            src={exercise.image}
                                            alt={exercise.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>


                                    {/* Content */}
                                    <div className="min-w-0 flex-1">

                                        <h2 className="truncate text-lg font-bold uppercase text-gray-300">
                                            {exercise.name}
                                        </h2>

                                        <p className="mt-0.5 text-[12px] text-gray-300">
                                            {exercise.equipment}
                                        </p>


                                        <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[12px] text-gray-300">

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


                                    {/* Actions */}
                                    <div className="flex items-center gap-2 sm:shrink-0">

                                        <Link
                                            href={`/library/${exercise.id}`}
                                            className="btn h-8 min-h-0 flex-1 rounded-full border border-[#293137] bg-transparent px-4 text-[12px] font-normal text-gray-400 hover:bg-[#151a1e] sm:flex-none"
                                        >
                                            View Details
                                        </Link>


                                        {activeTab === "today" && (
                                            <button
                                                onClick={() => handleMarkAsDone(exercise)}
                                                className="btn h-8 min-h-0 flex-1 rounded-full border-0 bg-[#C2F800] px-4 text-[12px] font-semibold text-black hover:bg-[#b5eb00] sm:flex-none"
                                            >
                                                <Check size={12} />
                                                Mark as Done
                                            </button>
                                        )}


                                        <button
                                            onClick={() => handleRemove(exercise)}
                                            className="btn btn-ghost btn-xs shrink-0 text-gray-500 hover:text-red-400"
                                        >
                                            <X size={14} />
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>
                    )}


                    {/* Empty State */}
                    {exercises.length === 0 && (
                        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-[#20252a] px-4 text-center">

                            <h2 className="text-lg font-bold uppercase text-gray-400">
                                Nothing Here Yet
                            </h2>

                            <p className="mt-2 text-[16px] text-gray-600">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/"
                                className="mt-4 btn h-9 min-h-0 rounded-full border-0 bg-[#C2F800] px-7 text-[12px] text-black hover:bg-[#b5eb00]"
                            >
                                Go to workouts
                            </Link>

                        </div>
                    )}

                </>
            )}


            {/* Toast */}
            {toast && (
                <div className="fixed bottom-5 left-4 right-4 z-50 mx-auto w-auto max-w-72 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-xl sm:left-auto sm:right-5">

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