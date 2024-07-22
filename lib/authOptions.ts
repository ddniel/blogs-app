import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/lib/auth";
import { query } from "./db";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }
        const { email, password } = credentials;
        const result = await query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);
        const user = result.rows[0];

        if (!user) {
          throw new Error("No user found with the email");
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return { id: user.id, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};
