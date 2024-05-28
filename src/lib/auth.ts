import NextAuth from "next-auth";
import { connectToDb } from "./connectToDb";
import { User } from "./models";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log(credentials, "auth");
        try {
          await connectToDb();
          console.log(credentials, "로그인");
          const user = await User.findOne({ username: credentials.username });

          if (!user) throw new Error("Wrong credentials!");

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password as string,
            user.password
          );

          if (!isPasswordCorrect) throw new Error("Wrong credentials!");

          return { email: user.email, name: user.username };
        } catch (err) {
          console.log(err);
          throw new Error("Failed to login!");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // 커스텀 로그인 페이지
    // 다른 페이지 구성 가능
  },
});
