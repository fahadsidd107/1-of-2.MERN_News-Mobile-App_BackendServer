const express = require("express");
const router = express.Router();
const multer = require("multer");
const sharp = require("sharp");
const storage = multer.memoryStorage();
const fs = require("fs");
const uploads = multer({ storage });
const News = require("../news/news");
const imageProcess = require("../util/imageProcess");

router.post("/create", uploads.single("thumbnail"), async (req, res) => {

 const imageName=await imageProcess(req, req.body.id);
  const news = new News()
  const id = news.createId();

  news.create(req.body, id,imageName);
  res.send("Hello Server");
});

module.exports = router;
