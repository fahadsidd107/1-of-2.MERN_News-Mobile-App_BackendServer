import express from 'express'
const app= express()
const PORT = 7777

app.get('/', (req, res) => {
    res.send()
})

app.listen(PORT,()=>{
    console.log(`Your app is running at ${PORT}`)
})
