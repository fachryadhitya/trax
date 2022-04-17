import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoutes = async (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { token } = req.cookies;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, String(process.env.JWT_SECRET)) as {
          id: number;
        };

        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("User not found");
        }
      } catch (error) {
        return res.status(401).json({ error: "Not Authorized" });
      }

      return handler(req, res, user);
    }

    return res.status(401).json({ error: "Not Authorized" });
  };
};
