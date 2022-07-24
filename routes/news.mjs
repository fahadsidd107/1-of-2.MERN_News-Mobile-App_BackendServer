import express from "express";
const router = express.Router()

router.post('/create', (req, res) => {
    res.send(`<h1>Hello Server</h1>`)
})

module.exports = router;
