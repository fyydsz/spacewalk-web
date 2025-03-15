import { Router } from "express";
import helloHandler from "../hello";

const router = Router();

router.get("/hello", helloHandler);

export default router;
