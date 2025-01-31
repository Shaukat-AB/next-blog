export const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [], // Defined in auth file
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = { id: user.id, isAdmin: user.isAdmin };
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = { ...session.user, ...token.user };
            }
            return session;
        },
        async authorized({ auth, request }) {
            const path = request?.nextUrl.pathname;
            const user = auth?.user;
            // console.log(user, path);

            // Redirect to home page when user loggedin and visits login or register page
            if (user && (path.includes("login") || path.includes("register"))) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            // Only an admin should access admin page
            if (!user?.isAdmin && path.includes("admin")) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            return true;
        },
    },
};
