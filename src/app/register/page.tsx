import RegisterForm from "@/components/register/RegisterForm";

import type { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "Register",
    description: "Register account with name, email and password",
};

const RegisterPage = () => {
    return (
        <div className="flex flex-col">
            <h1 className="font-medium text-xl text-center">
                Register Account
            </h1>
            <RegisterForm />
        </div>
    );
};
export default RegisterPage;
