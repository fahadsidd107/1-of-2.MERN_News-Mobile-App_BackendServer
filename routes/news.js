const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const uploads = multer({ storage });

router.post("/create", uploads.single("thumbnail"), (req, res) => {
  console.log(req.file);
  console.log( req.body);
  res.send("Hello Server");
});

module.exports = router;
