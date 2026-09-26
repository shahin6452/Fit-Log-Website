import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-10 border-t border-[#181b1f] bg-[#0C0D0F]">
            <div className="container mx-auto flex min-h-20 items-center justify-between px-5">

                <Link href='/' className="flex items-center gap-2">
                    <Image
                        src="/assets/logo.png"
                        alt="FITLOG"
                        width={25}
                        height={25}
                    />

                    <span className="text-[16px] font-bold text-gray-400">
                        FITLOG
                    </span>
                </Link>

                <p className="text-[12px] text-gray-300">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;