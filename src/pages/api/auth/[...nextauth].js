import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/mongodb";
import { verifyPassword } from "../../../lib/auth/auth";

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const { db } = await connectToDatabase();
          const user = await db.collection("users").findOne({
            email: credentials.email,
          });
          console.log("og data", user);

          if (!user) throw new Error("No user found");

          const isPasswordValid = await verifyPassword(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) throw new Error("Password is not valid");

          return {
            id: user._id,
            email: user.email,
            name: user.firstName,
            lastName: user.lastName,
          };
        } catch (error) {
          throw new Error(error);
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
    jwt: true,
  },

  pages: {
    signIn: "auth/signin", // Displays signin buttons
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      console.log(user, token);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      console.log(session, token);
      return session;
    },
  },

  debug: true,
});
