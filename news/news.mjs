import fs from 'fs'

class News{
    constructor(filename){
        this.filename = filename
        
        fs.accessSync(this.filename)
    }
}