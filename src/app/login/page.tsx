import type { Metadata } from "next/types";
import { GoogleIcon } from "@/lib/icons";
import LoginForm from "@/components/login/LoginForm";
import { handleGoogleLogin } from "@/lib/actions/authentication";

export const metadata: Metadata = {
    title: "Login",
    description:
        "Login to Blog with email and password or login using google account",
};

const LoginPage = () => {
    return (
        <div className="flex flex-col">
            <h1 className="font-medium text-xl text-center">Sign in to Blog</h1>
            <LoginForm />
            <div className="max-w-md mx-auto">
                <button
                    type="button"
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                    onClick={handleGoogleLogin}
                >
                    <GoogleIcon className="mr-2" />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};
export default LoginPage;
