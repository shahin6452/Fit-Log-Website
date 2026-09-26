'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { PlanContext } from '../context/PlanContext';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname()

    const { todayPlan, savedExercises } = useContext(PlanContext);

    return (
        <div className='mt-3 mb-6'>
            <div className="navbar container mx-auto">

                {/* Mobile Menu */}
                <div className="navbar-start md:hidden">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost text-xl px-2"
                        >
                            ☰
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-44"
                        >
                            <li><Link className={` ${pathName === '/' ? 'text-lime-400' : 'text-gray-300 hover:bg-lime-500/20 hover:text-lime-400'}`} href='/'>Workouts</Link></li>
                            <li><Link className={` ${pathName === '/plans' ? 'text-lime-400' : 'text-gray-300 hover:bg-lime-500/20 hover:text-lime-400'}`} href='/plans'>My Plan</Link></li>

                            <li>
                                <a>
                                    Plan
                                    <span className="ml-2 w-6 h-6 rounded-full bg-lime-400 text-black font-semibold inline-flex items-center justify-center">
                                        {todayPlan.length}
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    Saved
                                    <span className="ml-2 w-6 h-6 rounded-full border border-gray-600 border-dotted font-semibold inline-flex items-center justify-center">
                                        {savedExercises.length}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* Logo */}
                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:navbar-start">
                    <Link href="/" className="text-xl font-bold">
                        <div className="flex gap-2 justify-center items-center">
                            <Image
                                src="/assets/logo.png"
                                alt="logo"
                                width={30}
                                height={30}
                            />

                            <div>
                                <h2>FITLOG</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* menu menu-horizontal gap-2  */}
                {/* Desktop Center */}
                <div className="hidden md:flex navbar-center">
                    <ul className="menu menu-horizontal gap-2">
                        <li><Link className={`rounded-full px-4 py-1 ${pathName === '/' ? 'bg-lime-500/20 text-lime-400' : 'text-gray-300 hover:bg-lime-500/20 hover:text-lime-400'}`} href='/'>Workouts</Link></li>
                        <li><Link className={`rounded-full px-4 py-1 ${pathName === '/plans' ? 'bg-lime-500/20 text-lime-400' : 'text-gray-300 hover:bg-lime-500/20 hover:text-lime-400'}`} href='/plans'>My Plan</Link></li>
                    </ul>
                </div>


                {/* Desktop Right */}
                <div className="hidden md:flex navbar-end gap-5 text-sm">
                    <span>
                        Plan
                        <span className="ml-2 w-6 h-6 rounded-full bg-lime-400 text-black font-semibold inline-flex items-center justify-center">
                            0
                        </span>
                    </span>

                    <span>
                        Saved
                        <span className="ml-2 w-6 h-6 rounded-full border border-gray-600 border-dotted  font-semibold inline-flex items-center justify-center">
                            0
                        </span>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Navbar;