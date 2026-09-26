import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-10 border-t border-[#181b1f] bg-[#0C0D0F]">

            <div className="container mx-auto flex min-h-20 flex-col items-center justify-center gap-3 px-4 py-5 sm:flex-row sm:justify-between sm:px-6 sm:py-0 lg:px-0">

                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/assets/logo.png"
                        alt="FITLOG"
                        width={30}
                        height={30}
                        className="rotate-[-45deg]"
                    />

                    <span className="text-[18px] font-bold text-gray-400">
                        FITLOG
                    </span>
                </Link>

                <p className="text-center text-[12px] text-gray-300 sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>

        </footer>
    );
};

export default Footer;