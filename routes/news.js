const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const uploads = multer({ storage });

router.post("/create", uploads.single("thumbnail"), async (req, res) => {
 await console.log(req.file);
await  console.log( req.body);
 await res.send("Hello Server");
});

module.exports = router;
