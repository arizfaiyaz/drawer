import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function middleware(req: Request, res: Response, next: NextFunction) {
    const token = jwt.verify(req.headers.authorization as string, process.env.JWT_SECRET as string);
    if (token) {
        // @ts-ignore
        req.userId = decoded.userId;
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
}