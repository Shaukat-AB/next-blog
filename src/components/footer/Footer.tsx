import Link from "next/link";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="flex flex-wrap items-center justify-between mx-auto px-6 mb-6 opacity-90">
            <div className="w-full mx-auto md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-700 sm:text-center dark:text-gray-400">
                    © {currentYear}{" "}
                    <Link href="/" className="link">
                        Blog-Home
                    </Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
