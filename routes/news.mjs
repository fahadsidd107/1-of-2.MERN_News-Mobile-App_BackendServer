import express from "express";
const router = express.Router()

router.post('/create', (req, res) => {
    res.send('Hello Server')
})

module.exports = router;
