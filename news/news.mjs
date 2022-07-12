import fs from 'fs'

 class News{
    constructor(filename = 'news.json'){
        this.filename = filename
        try{
            fs.accessSync(this.filename)
        }catch(err){
            fs.writeFileSync(this.filename, 'This is from news class')
        }
       
            
    }
}

export default News