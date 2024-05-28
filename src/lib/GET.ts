import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./auth";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        console.log(credentials, "auth");
        const user = await login(credentials);
        return user;
      },
    }),
  ],
});
