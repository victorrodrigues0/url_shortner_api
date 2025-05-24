import { Router } from "express";
import { clearUrls, indexMessage, listSlugs, urlRedirect, urlShortner } from "../controller/indexController";

const router = Router();

router.get("/", indexMessage);
router.post("/shortner", urlShortner);
router.get("/list", listSlugs);
router.get("/clear", clearUrls);
router.get("/:slug", urlRedirect);

export default router;