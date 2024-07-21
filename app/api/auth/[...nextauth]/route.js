import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { query } from "../../../../lib/db";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const result = await query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);
        const user = result.rows[0];

        if (!user) {
          throw new Error("No user found with the email");
        }

        const isValid = password == user.password;

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
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };