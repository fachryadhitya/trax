import { NextApiRequest, NextApiResponse } from "next";
import { validateRoutes } from "../../lib/auth";

export default validateRoutes((req: NextApiRequest, res: NextApiResponse, user: any) => {
    return res.json(user)
})