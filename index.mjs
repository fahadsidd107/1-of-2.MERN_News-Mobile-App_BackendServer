import express from 'express'
import News from './news/news.mjs'
const app= express()
const PORT = 7777

app.use(express.static('public'))

const news = new News()
news.create()

// app.get('/', (req, res) => {
//     res.send(`<h1>Hello Server</h1>`)
// })

app.listen(PORT,()=>{
    console.log(`Your app is running at ${PORT}`)
})
