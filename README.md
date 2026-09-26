# FitLog - Workout Library

FitLog is a modern and responsive workout library web application designed to help users explore exercises, create a daily workout plan, save exercises for later, and track completed workouts.

## 🚀 Live Project

[FitLog Website](https://github.com/shahin6452/Fit-Log-Website)

## 📌 Project Overview

FitLog provides a simple and clean interface for discovering workout exercises and organizing them into a personal workout plan.

Users can browse the workout library, view detailed information about each exercise, add exercises to today's plan, save exercises for later, and mark completed workouts as done.

## 🛠️ Technologies Used

- Next.js
- React
- Tailwind CSS
- DaisyUI
- Lucide React
- JavaScript
- REST API
- Responsive Web Design

## ✨ Key Features

### 1. Workout Library
Browse a collection of exercises with information such as:

- Exercise name
- Muscle groups
- Equipment
- Duration
- Calories burned
- Rating

### 2. Exercise Details
Each exercise has a dedicated details page containing:

- Exercise image
- Description
- Muscle groups
- Equipment
- Difficulty
- Sets and reps
- Duration
- Calories
- Rating
- Step-by-step instructions

### 3. Today's Workout Plan
Users can add exercises to their daily workout plan and manage the exercises they want to complete.

### 4. Save Exercises for Later
Users can save exercises for later and access them from the Saved section.

### 5. Mark Workout as Done
Completed exercises can be marked as done and automatically removed from Today's Plan.

### 6. Workout Statistics
The Plan page dynamically calculates:

- Total exercises
- Total workout minutes
- Total calories

The statistics update based on the currently selected plan or saved exercises.

### 7. Responsive Design
The website is designed to work across:

- Desktop
- Tablet
- Mobile devices

### 8. Toast Notifications
The application provides feedback messages for actions such as:

- Adding an exercise
- Saving an exercise
- Removing an exercise
- Marking a workout as completed
- Trying to add an exercise that is already in the plan

## 📂 Project Structure

```text
Fit-Log-Website/
├── public/
├── src/
│   └── app/
├── package.json
├── next.config.mjs
├── postcss.config.mjs
└── README.md