import express from "express";

const router = express.Router();

import {createShortCut , getUrlDetails} from "../controllers/shortCutController.js";
import {userSignUp , userLogin} from "../controllers/userController.js"

router.post("/createShortCut", createShortCut);
router.get("/:code", getUrlDetails);
router.post("/signup", userSignUp);
router.post("/login", userLogin);

export default router;  