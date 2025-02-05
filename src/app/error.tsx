"use client";

import Link from "next/link";

const ErrorPage = ({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16">
                <div className="text-center">
                    <h1 className="main-title mb-4">Something went wrong!</h1>
                    <p className="text-2xl mb-4">{error.message}</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        <Link href="/" className="link">
                            go to the home page.
                        </Link>
                    </p>

                    <button onClick={() => reset()} className="btn-primary">
                        Try again
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
