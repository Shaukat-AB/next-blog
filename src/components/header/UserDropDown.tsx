"use client";

import { handleLogout } from "@/lib/actions/authentication";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NoUserAvater } from "@/lib/icons";
import { Session } from "next-auth";

const UserDropDown = ({ session }: { session: Session }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
                type="button"
                className="flex text-sm rounded-full md:me-0 hover:ring-4 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                <span className="sr-only">Open user menu</span>
                <span className="w-10 h-10 relative">
                    {session?.user?.image ? (
                        <Image
                            className="rounded-full"
                            src={session.user.image}
                            alt="user photo"
                            fill
                        />
                    ) : (
                        <span className="flex items-center justify-center h-full w-full">
                            <NoUserAvater className="text-4xl" />
                        </span>
                    )}
                </span>
            </button>
            {open && (
                <div
                    className="absolute top-12 right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                >
                    <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 dark:text-white">
                            {session?.user?.name}
                        </span>
                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                            {session?.user?.email}
                        </span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        {session?.user?.isAdmin && (
                            <>
                                <li>
                                    <Link
                                        href="/admin/users"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Users
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/admin/posts"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Posts
                                    </Link>
                                </li>
                            </>
                        )}
                        <li>
                            <button
                                onClick={handleLogout}
                                className="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Sign out
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserDropDown;
