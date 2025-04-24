const router = require("express").Router();
import chatbot from "../controllers/chatbot.controller";
import { createValidationFor, checkValidationResult } from "../middlewares/validator";

router.get("/", chatbot.getAllChats)
  .get("/latest", chatbot.getLatesChat)
  .post("/", createValidationFor('choose-chat'), checkValidationResult, chatbot.post)


export = router;