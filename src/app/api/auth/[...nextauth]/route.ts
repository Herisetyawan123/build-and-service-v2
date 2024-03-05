import NextAuth, { type Awaitable, type Session, type User } from 'next-auth';
import { type JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

export interface AdapterUser extends User {
  id: string;
  email: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email@mail.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      authorize(credentials): Awaitable<AdapterUser | null> {
        if (
          credentials?.email === 'owner@mail.com' &&
          credentials.password === '123456'
        ) {
          return {
            id: '1',
            email: 'owner@mail.com'
          };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET ?? 'HALOGAIS',
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = {
        email: token.email,
        name: token.name
      };
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error' // Error code passed in query string as ?error=
  }
});

export { handler as GET, handler as POST };
