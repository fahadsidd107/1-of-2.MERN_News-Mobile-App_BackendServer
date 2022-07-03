import express from 'express'
const app= express()
const PORT = 7777

app.listen(PORT,()=>{
    console.log(`Your app is running at ${PORT}`)
})
