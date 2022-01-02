import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { encodeToken, decodeToken } from "util/jwt";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: 604800,
  },
  jwt: {},
  pages: {
    signIn: "/login", // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return "/dashboard";
      // Allows relative callback URLs
      else if (url.startsWith("/dashboard"))
        return new URL(url, baseUrl).toString();
      return baseUrl;
    },
  },
});
