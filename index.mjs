import express from 'express'
import News from './news/news.mjs'
const app= express()
const PORT = 7777

app.use(express.static('public'))

const news = new News()
const data = news.getAll()
console.log(data)

const test = async () => {
    const data = await news.getSingle(1658410440300)
    console.log(data)
}
test()

// news.create({title:"test",content:"test",thumbnail:"test",category:"tech"})

// app.get('/', (req, res) => {
//     res.send(`<h1>Hello Server</h1>`)
// })

app.listen(PORT,()=>{
    console.log(`Your app is running at ${PORT}`)
})
