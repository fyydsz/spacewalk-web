import { Request, Response } from "express";

export default function helloHandler(req: Request, res: Response) {
  res.json({ message: "Hello, world!" });
}
