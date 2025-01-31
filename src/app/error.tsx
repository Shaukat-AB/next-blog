"use client";

import Link from "next/link";

const ErrorPage = ({ error, rest }) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="main-title mb-4">Something went wrong!</h1>
                    <p className="text-2xl mb-4">{error.message}</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        Try Refreshing the page or go to the home page.
                    </p>
                    <Link href="/" className="btn-primary">
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
