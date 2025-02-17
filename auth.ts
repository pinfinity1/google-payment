import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {},
                password: {},
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt ({token, user}) {
            return {...token, ...user}
        },
        async session ({session, token}) {
            session.user = token as any
            return session
        }
    },
    trustHost: true,
});
