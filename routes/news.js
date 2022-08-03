const express = require("express");
const router = express.Router();
const multer = require("multer");
const sharp = require("sharp");
const storage = multer.memoryStorage();
const fs = require("fs");
const uploads = multer({ storage });
const News = require("../news/news");

router.post("/create", uploads.single("thumbnail"), async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  fs.access("./data/uploads", (err) => {
    if (err) {
      fs.mkdirSync("./data/uploads");
    }
  }
  );
  const id = new News().createId();
  const formattedName = req.file.originalname.split(" ").join("-");
  const filename = `${id}-${formattedName}`;
  await sharp(req.file.buffer).resize({ width: 615, height: 350 }).toFile('./data/uploads' + filename);
  res.send("Hello Server");
});

module.exports = router;
