import express from "express";
const router = express.Router();
import multer from 'multer'
const storage = multer.memoryStorage()
const uploads = multer({storage})

router.post("/create",uploads.single('thumbnail'), (req, res) => {
  console.log('file',req.file);
  console.log('body',req.body);
  res.send("Hello Server");
});

export default router;
