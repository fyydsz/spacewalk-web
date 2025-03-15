import { Router } from "express";
import takoWebhook from "../webhook/tako";

const router = Router();

router.post("/tako", takoWebhook);

export default router;