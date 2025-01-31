import Link from "next/link";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "NotFound",
    description: "Page not found",
};

const NotFound = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                        404
                    </h1>
                    <p className="main-title">That page is not found.</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        Sorry, we can't find that page. You'll find more on the
                        home page.
                    </p>
                    <Link href="/" className="btn-primary">
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
