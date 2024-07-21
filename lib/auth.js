"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";

// export async function hashPassword(password) {
//   const hashedPassword = await bcrypt.hash(password, 12);
//   return hashedPassword;
// }

export async function isLoggedIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    return true;
  } else {
    return false;
  }
}
