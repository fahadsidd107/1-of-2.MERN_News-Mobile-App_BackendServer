import fs from 'fs'

 class News{
    constructor(filename = 'news.json'){
        this.path = `./data/${filename}`

        try{}catch(err){}
        try{
            fs.accessSync(this.path)
        }catch(err){
            fs.writeFileSync(this.path, 'This is from news class')
        }
       
            
    }
}

export default News