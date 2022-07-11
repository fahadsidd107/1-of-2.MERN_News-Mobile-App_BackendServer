import fs from 'fs'

class News{
    constructor(filename){
        this.filename = filename
        try{
            fs.accessSync(this.filename)
        }catch(err){
        }
       
            
    }
}