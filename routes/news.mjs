import express from "express";
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage()

router.post("/create", (req, res) => {
  res.send("Hello Server");
});

export default router;
