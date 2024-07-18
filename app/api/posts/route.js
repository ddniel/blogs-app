import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/react";

export async function POST(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { title, content } = await req.json();
  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: { connect: { email: session.user.email } },
      published: true,
    },
  });
  res.json(result);
}
