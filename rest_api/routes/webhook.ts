import { Router } from "express";
import helloHandler from "../v1/hello";

const router = Router();

router.post("/tako", helloHandler);

export default router;