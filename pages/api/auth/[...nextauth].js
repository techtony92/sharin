import NextAuth from "next-auth";
import { Connect, queryPostgres } from "DataBase/postgres";
import { modify__email } from "serverUtil/normalize";
import { sql } from "@databases/pg";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      checks: ["pkce", "state"],
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
      await user;
      console.log("user");
      console.log(user);
      if (user) {
        let postgres = Connect();
        let isInUse = verifyEmail(postgres, user);
        if (!isInUse) {
          registerUser(postgres, user, account);
        }
      }
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

const verifyEmail = (postgres, user) => {
  let inUse = false;
  queryPostgres(
    postgres,
    sql`SELECT * FROM users WHERE email = ${user.email}`,
    (results) => {
      if (results.length > 0) {
        inUse = true;
        postgres.dispose();
      }
    }
  );
};

const registerUser = (postgres, user, account) => {
  queryPostgres(
    postgres,
    sql`INSERT INTO users (username , email , password, posts, favorites ) values(${
      user.name
    }, ${modify__email(user.email)}, ${account.type},${0}, ${0})`,
    (results) => {
      console.log(results);
      postgres.dispose();
    }
  );
};
