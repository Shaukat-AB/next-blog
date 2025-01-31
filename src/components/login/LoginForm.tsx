"use client";

import Link from "next/link";
import { handleLogin } from "@/lib/actions/authentication";
import { useActionState } from "react";

const inputGroups = [
    {
        id: "email",
        label: "Email",
        inputProps: {
            placeholder: "name@email.com",
            type: "email",
            required: true,
        },
    },
    {
        id: "password",
        label: "Password",
        inputProps: {
            placeholder: "•••••••",
            type: "password",
            required: true,
        },
    },
];

const LoginForm = () => {
    const [state, loginAtion, pending] = useActionState(handleLogin, {
        message: "",
    });

    return (
        <form action={loginAtion}>
            <div className="max-w-md flex flex-col gap-3 mx-auto my-8">
                {inputGroups.map((group) => (
                    <div key={group.id}>
                        <label htmlFor={group.id} className="label-primary">
                            {group.label}
                        </label>
                        <input
                            className="input-primary"
                            id={group.id}
                            name={group.id}
                            {...group.inputProps}
                        />
                    </div>
                ))}
                <p
                    aria-live="polite"
                    className="text-sm font-semibold text-center text-red-600 dark:text-red-500"
                >
                    {state && state?.message}
                </p>
                <button
                    disabled={pending}
                    type="submit"
                    className={pending ? "btn-disable" : "btn-primary"}
                >
                    Signin
                </button>
                <p className="mt-1 text-sm text-center text-gray-700 dark:text-gray-300">
                    Don't have account?{" "}
                    <Link href="/register" className="link">
                        Register
                    </Link>
                </p>
            </div>
        </form>
    );
};
export default LoginForm;
