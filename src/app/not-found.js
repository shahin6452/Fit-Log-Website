import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
            <h1 className="text-6xl font-bold text-[#C2F800]">
                404
            </h1>

            <h2 className="mt-4 text-xl font-bold uppercase text-gray-300">
                Page Not Found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                The page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="btn mt-6 min-h-0 border-0 bg-[#C2F800] px-5 text-sm text-black hover:bg-[#b5eb00]"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;