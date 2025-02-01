"use client";

import { useState } from "react";
import ConfirmModal from "../confirm-modal/ConfirmModal";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { deleteUser } from "@/lib/actions/users";

const UserRow = ({ userStringified }) => {
    const user = JSON.parse(userStringified);
    const [open, setOpen] = useState<Boolean>(false);
    const router = useRouter();
    const updatedAt = user?.updatedAt
        ? new Date(user.updatedAt).toISOString().substring(0, 10)
        : "";

    const handleDeleteUser = async () => {
        await deleteUser(user._id);
        router.refresh();
        setOpen(false);
    };

    return (
        <tr className="bg-white dark:bg-gray-800">
            <th className="px-6 py-4">{user.email}</th>

            <td className="px-6 py-4">{user.name}</td>
            <td className="px-6 py-4">{updatedAt}</td>
            <td className="px-6 py-4">
                <Link
                    href=""
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Edit
                </Link>
            </td>
            <td className="px-6 py-4">
                <button
                    onClick={() => setOpen(true)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                    Delete
                </button>
                <ConfirmModal
                    title={user.email}
                    open={open}
                    onClose={() => setOpen(false)}
                    onConfirm={handleDeleteUser}
                />
            </td>
        </tr>
    );
};

export default UserRow;
