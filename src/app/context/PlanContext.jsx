"use client";

import React, { createContext, useState } from "react";

export const PlanContext = createContext({
    todayPlan: [],
    setTodayPlan: () => { },

    savedExercises: [],
    setSavedExercises: () => { },

    removeFromPlan: () => { },
    removeFromSaved: () => { },

    completedExercises: [],
    setCompletedExercises: () => { },
});

const PlanProvider = ({ children }) => {

    const [todayPlan, setTodayPlan] = useState([]);
    const [savedExercises, setSavedExercises] = useState([]);
    const [completedExercises, setCompletedExercises] = useState([]);

    const removeFromPlan = (id) => {
        setTodayPlan((prevPlan) =>
            prevPlan.filter((item) => item.id !== id)
        );
    };

    const removeFromSaved = (id) => {
        setSavedExercises((prevSaved) =>
            prevSaved.filter((item) => item.id !== id)
        );
    };

    const sharedData = {
        todayPlan,
        setTodayPlan,

        savedExercises,
        setSavedExercises,

        removeFromPlan,
        removeFromSaved,

        completedExercises,
        setCompletedExercises,
    };

    return (
        <PlanContext.Provider value={sharedData}>
            {children}
        </PlanContext.Provider>
    );
};

export default PlanProvider;