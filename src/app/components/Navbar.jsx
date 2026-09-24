import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const links = <>
        <li><Link className='rounded-full px-4 py-2 text-gray-300 hover:bg-lime-500/10 hover:text-lime-400' href='#'>Workouts</Link></li>
        <li><Link className='rounded-full px-4 py-2 text-gray-300 hover:bg-lime-500/10 hover:text-lime-400' href='#'>My Plan</Link></li>
    </>
    return (
        <div>
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
                            <li><Link  href='#'>Workouts</Link></li>
                            <li><Link  href='#'>My Plan</Link></li>

                            <li>
                                <a>
                                    Plan
                                    <span className="badge bg-lime-400 text-black font-semibold badge-xs ml-1">
                                        0
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    Saved
                                    <span className="badge badge-neutral badge-xs ml-1 border border-gray-400 border-dotted  font-semibold ">
                                        {/* inline-flex items-center justify-center */}
                                        0
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* Logo */}
                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:navbar-start">
                    <Link href="#" className="text-xl font-bold">
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
                        <li><Link className='rounded-full px-4 py-1 text-gray-300 hover:bg-lime-500/10 hover:text-lime-400' href='#'>Workouts</Link></li>
                        <li><Link className='rounded-full px-4 py-1 text-gray-300 hover:bg-lime-500/10 hover:text-lime-400' href='#'>My Plan</Link></li>
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