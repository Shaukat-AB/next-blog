import Link from "next/link";
import UserDropDown from "./UserDropDown";
import { auth } from "@/lib/auth";


const Header = async () => {
    const session = await auth();

    return (
        <header>
            <div className="h-[100px] flex flex-wrap items-center justify-between mx-auto px-6 mb-6">
                <Link href="/" className="font-semibold">
                    Blog.
                </Link>

                <div>
                    {!session?.user ? (
                        <Link href="/login" className="btn-primary">
                            Signin
                        </Link>
                    ) : (
                        <UserDropDown session={session} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
