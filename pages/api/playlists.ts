import { NextApiRequest, NextApiResponse } from "next";
import { validateRoutes } from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoutes(
  async (req: NextApiRequest, res: NextApiResponse, user: any) => {
    const playlist = await prisma.playlist.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        name: 'asc'
      }
    });

    return res.json(playlist);
  }
);
