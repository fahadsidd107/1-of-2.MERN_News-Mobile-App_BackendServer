import express from "express";
// import News from "./news/news.mjs";
const app = express();
const PORT = 7777;
import router from "./routes/news.js";

app.use(express.static("public"));
app.use(express.static("data/uploads"));
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Your app is running at ${PORT}`);
});
