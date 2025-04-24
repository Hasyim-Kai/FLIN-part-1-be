const router = require("express").Router();
import chatbotRoutes from "./chatbot.routes";

router.use('/chat', chatbotRoutes)


export = router;