import express from "express";
import News from "./news/news.mjs";
const app = express();
const PORT = 7777;
import router from "./routes/news.mjs";

app.use(express.static("public"));
app.use("/api", router);

const news = new News();
const data = news.getAll();
console.log(data);

const test = async () => {
  const data = await news.getByCategory("tech");
  console.log(data);
};
test();

news.create({title:"test",content:"test",thumbnail:"test",category:"tech"})

app.get('/', (req, res) => {
    res.send(`<h1>Hello Server</h1>`)
})

app.listen(PORT, () => {
  console.log(`Your app is running at ${PORT}`);
});
