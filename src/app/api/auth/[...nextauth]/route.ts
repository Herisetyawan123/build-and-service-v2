import NextAuth, {
  NextAuthOptions,
  Account,
  Profile,
  Session,
  User,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const { PrismaClient } = require("@prisma/client");
import { JWT } from "next-auth/jwt";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: async (credentials, req) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        console.log(email);
        console.log(password);
        const user = await prisma.users.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          return null;
        }

        const userPassword = user.password;

        const isValidPassword = bcrypt.compareSync(password, userPassword);

        if (!isValidPassword) {
          return null;
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    async encode({ secret, token }) {
      if (!token) {
        throw new Error("No token to encode");
      }
      return jwt.sign(token, secret);
    },
    async decode({ secret, token }) {
      if (!token) {
        throw new Error("No token to decode");
      }
      const decodedToken = jwt.verify(token, secret);
      if (typeof decodedToken === "string") {
        return JSON.parse(decodedToken);
      } else {
        return decodedToken;
      }
    },
  },
  callbacks: {
    async session(params: { session: Session; token: JWT; user: User }) {
      if (params.session.user) {
        params.session.user.email = params.token.email;
      }

      return params.session;
    },
    async jwt(params: {
      token: JWT;
      user?: User | undefined;
      account?: Account | null | undefined;
      profile?: Profile | undefined;
      isNewUser?: boolean | undefined;
    }) {
      if (params.user) {
        params.token.email = params.user.email;
      }

      return params.token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
