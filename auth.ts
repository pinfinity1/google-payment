import NextAuth, {type Session, type User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {JWT} from "@auth/core/jwt";


export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: "Email", type: "email", required: true},
                password: {label: "Password", type: "password", required: true},
            },
        }),
    ],
    
    callbacks: {
        async jwt ({token, user}: { token: JWT, user: User }) {
            if(user) {
                return {
                    ...token,
                    ...user
                };
            }
            return token;
        },
        async session ({session, token}: { session: Session, token: JWT }) {
            session.user = {
                id: token.id as string,
                name: token.name as string,
                email: token.email as string,
            };
            return session;
        },
    },
});
