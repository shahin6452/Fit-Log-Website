"use client";

import React, { useContext, useState } from "react";
import { CalendarPlus, Bookmark, XCircle, CheckCircle } from "lucide-react";
import { PlanContext } from "../../context/PlanContext";

const ExcerciseActions = ({ exercise }) => {

    const {
        todayPlan,
        setTodayPlan,
        savedExercises,
        setSavedExercises
    } = useContext(PlanContext);

    const [toast, setToast] = useState("");
    const [toastType, setToastType] = useState("success");

    const showToast = (message, type = "success") => {
        setToast(message);
        setToastType(type);

        setTimeout(() => {
            setToast("");
        }, 4000);
    };

    const handleAddToPlan = () => {

        const alreadyExists = todayPlan.some(
            (item) => item.id === exercise.id
        );

        if (alreadyExists) {
            showToast("Already in your plan", "error");
            return;
        }

        setTodayPlan([...todayPlan, exercise]);

        console.log("Today's Plan:", [...todayPlan, exercise]);

        showToast("Added to today's plan");
    };

    const handleSaveForLater = () => {

        const alreadyExists = savedExercises.some(
            (item) => item.id === exercise.id
        );

        if (alreadyExists) {
            showToast("Already saved", "error");
            return;
        }

        setSavedExercises([...savedExercises, exercise]);

        console.log("Saved:", [...savedExercises, exercise]);

        showToast("Saved for later");
    };

    return (
        <>
            <div className="mt-6 flex flex-wrap gap-3">

                <button
                    onClick={handleAddToPlan}
                    className="btn h-10 min-h-0 rounded-xl border-0 bg-[#C2F800] px-4 text-xs font-semibold text-black hover:bg-[#b5eb00]"
                >
                    <CalendarPlus size={16} strokeWidth={2} />
                    Add to today's plan
                </button>

                <button
                    onClick={handleSaveForLater}
                    className="btn h-10 min-h-0 rounded-xl border border-[#292d32] bg-transparent px-4 text-xs font-semibold text-gray-400 hover:bg-[#15181c]"
                >
                    <Bookmark size={16} strokeWidth={2} />
                    Save for later
                </button>

            </div>

            {toast && (
                <div className="fixed bottom-5 right-5 z-50 w-72 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-xl">

                    <div className="flex items-start gap-3 px-4 py-3">

                        <div
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs text-white ${toastType === "error"
                                    ? "bg-red-500"
                                    : "bg-green-600"
                                }`}
                        >
                            {toastType === "error" ? (
                                <XCircle size={14} />
                            ) : (
                                <CheckCircle size={14} />
                            )}
                        </div>

                        <p className="flex-1 text-sm text-gray-700">
                            {toast}
                        </p>

                        <button
                            onClick={() => setToast("")}
                            className="cursor-pointer text-lg leading-none text-gray-400 hover:text-gray-700"
                        >
                            ×
                        </button>

                    </div>

                    <div className="h-1 bg-gray-200">
                        <div
                            className={`h-full animate-[toastProgress_2s_linear_forwards] ${toastType === "error"
                                    ? "bg-red-500"
                                    : "bg-[#C2F800]"
                                }`}
                        />
                    </div>

                </div>
            )}
        </>
    );
};

export default ExcerciseActions;