class Shapes{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}
//circle class
class Circle extends Shapes{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}
//trianle class
class Triangle extends Shapes{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
    }
}
//square class
class Square extends Shapes{
    render(){
        return `<square x="50" height="200" width="200" fill="${this.color}"/>`
    }
}
//exporting modules
module.exports={Circle, Square, Triangle}