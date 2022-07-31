import express from "express";
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage()
const uploads = multer({storage})

router.post("/create",uploads.single(), (req, res) => {
  res.send("Hello Server");
});

export default router;
