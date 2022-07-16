import fs from "fs";

class News {
  constructor(filename = "news.json") {
    this.path = `./data/${filename}`;

    try {
      fs.readdirSync("data");
    } catch (err) {
      fs.mkdirSync("data");
    }

    try {
      fs.accessSync(this.path);
    } catch (err) {
      fs.writeFileSync(this.path, "[]");
    }
  }

 async create(){
const totalData = JSON.parse(await fs.promises.readFile(this.path, "utf8"))
  }

}

export default News;
