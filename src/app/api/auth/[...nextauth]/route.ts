import NextAuth, { type Awaitable, type Session, type User } from "next-auth";
import { type JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export interface AdapterUser extends User {
  id: string;
  email: string;
}

const handler = NextAuth({
  jwt: {
    secret: "asdasdasd",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@mail.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials, req): Awaitable<AdapterUser | null> {
        if (
          credentials?.email === "owner@mail.com" &&
          credentials.password === "123456"
        ) {
          return {
            id: "1",
            email: "owner@mail.com",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({
      session,
      token,
      user,
    }: {
      session: Session;
      token: JWT;
      user: AdapterUser;
    }) {
      session.user = {
        email: user.email,
        name: user.name,
      };
      return session;
    },
    async jwt({ token, user }) {
      if (user.email) {
        return { ...token, ...user };
      }

      if (token.accessTokenExpires !== undefined) {
        if (Date.now() / 1000 < token?.accessTokenExpires)
          return { ...token, ...user };
      }

      return { ...token, ...user };
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
});

export { handler as GET, handler as POST };
