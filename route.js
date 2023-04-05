// route.js

const app = require("express");
const router = app.Router();
const {getContent} = require("./controller");

router.get("/fetch",getContent);

module.exports = router;