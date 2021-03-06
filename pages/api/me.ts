import { NextApiRequest, NextApiResponse } from "next";
import { validateRoutes } from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoutes(
  async (req: NextApiRequest, res: NextApiResponse, user: any) => {
    const playlistCount = await prisma.playlist.count({
      where: {
        userId: user.id,
      },
    });

    return res.json({ ...user, playlistCount });
  }
);
