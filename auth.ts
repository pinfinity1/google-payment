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
    
    callbacks: {
        jwt ({token, user}) {
            if(user) {
                return {
                    ...token,
                    ...user
                };
            }
            return token;
        },
        session ({session, token}) {
            session.user.id = token.token as string
            return session;
        },
    },
    trustHost: true,
});
