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

  createId() {
   return new Date().getTime().toString();
  }

  async create(data) {
    const totalData = JSON.parse(await fs.promises.readFile(this.path, "utf8"));
    const id = this.createId();
    totalData.push({...data, id});
    // console.log(id);

    await fs.promises.writeFile(this.path, JSON.stringify(totalData, null, 2));
  }

 async getAll() {
    JSON.parse(await fs.promises.readFile(this.path, "utf8"))
  }
}

export default News;
