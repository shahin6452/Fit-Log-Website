'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { PlanContext } from '../context/PlanContext';
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathName = usePathname();

    const { todayPlan, savedExercises } = useContext(PlanContext);

    return (
        <div className="sticky top-0 z-50 mt-3 mb-6 border-b border-[#2a2e36] bg-[#080a0d]">

            <div className="navbar container mx-auto min-h-16 px-0">

                {/* ================= MOBILE MENU ================= */}
                <div className="navbar-start md:hidden">

                    <div className="dropdown">

                        <label
                            tabIndex={0}
                            className="btn btn-ghost px-2 text-xl text-gray-300"
                        >
                            ☰
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content z-50 mt-3 w-48 rounded-box border border-[#2a2e36] bg-[#101217] p-2 shadow-xl"
                        >

                            <li>
                                <Link
                                    href="/"
                                    className={
                                        pathName === '/'
                                            ? 'text-lime-400'
                                            : 'text-gray-300 hover:bg-lime-500/10 hover:text-lime-400'
                                    }
                                >
                                    Workouts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/my-plan"
                                    className={
                                        pathName === '/my-plan'
                                            ? 'text-lime-400'
                                            : 'text-gray-300 hover:bg-lime-500/10 hover:text-lime-400'
                                    }
                                >
                                    My Plan
                                </Link>
                            </li>

                            <li>
                                <a className="text-gray-300">
                                    Plan

                                    <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 text-xs font-semibold text-black">
                                        {todayPlan.length}
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-300">
                                    Saved

                                    <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-dotted border-gray-600 text-xs font-semibold">
                                        {savedExercises.length}
                                    </span>
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>


                {/* ================= LOGO ================= */}
                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:navbar-start">

                    <Link href="/">
                        <div className="flex items-center justify-center gap-2">

                            <Image
                                src="/assets/logo.png"
                                alt="FITLOG logo"
                                width={30}
                                height={30}
                            />

                            <h2 className="text-xl font-bold tracking-wide text-white">
                                FITLOG
                            </h2>

                        </div>
                    </Link>

                </div>


                {/* ================= DESKTOP MENU ================= */}
                <div className="navbar-center hidden md:flex">

                    <ul className="menu menu-horizontal gap-2">

                        <li>
                            <Link
                                href="/"
                                className={`rounded-full px-4 py-1 ${pathName === '/'
                                        ? 'bg-lime-500/20 text-lime-400'
                                        : 'text-gray-300 hover:bg-lime-500/10 hover:text-lime-400'
                                    }`}
                            >
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-plan"
                                className={`rounded-full px-4 py-1 ${pathName === '/my-plan'
                                        ? 'bg-lime-500/20 text-lime-400'
                                        : 'text-gray-300 hover:bg-lime-500/10 hover:text-lime-400'
                                    }`}
                            >
                                My Plan
                            </Link>
                        </li>

                    </ul>

                </div>


                {/* ================= DESKTOP RIGHT ================= */}
                <div className="navbar-end hidden gap-5 text-sm text-gray-300 md:flex">

                    <span className="flex items-center">
                        Plan

                        <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 text-xs font-semibold text-black">
                            {todayPlan.length}
                        </span>
                    </span>


                    <span className="flex items-center">
                        Saved

                        <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-dotted border-gray-600 text-xs font-semibold">
                            {savedExercises.length}
                        </span>
                    </span>

                </div>

            </div>

        </div>
    );
};

export default Navbar;