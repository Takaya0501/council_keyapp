import { PrismaClient } from "@prisma/client";

// 新しく投稿するAPI
export default async function handler(req, res) {
  // 送られたJSONを取得
  const json = req.body;

  const prisma = new PrismaClient();
  await prisma.posts.create({
    data: {
      on:on
    },
  });

  res.status(200).json({});
}