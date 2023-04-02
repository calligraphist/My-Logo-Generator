//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes")

//svg class
class Svg{
    constructor(){
        this.textElement=''
        this.shapeElement=''
    }
    render(){
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){    
        this.shapeElement=shape.render()
    }
}

// Create an array of questions for user input//

const questions = [
{
    type: `list`,
    name: `shape`,
    message: `What shape do you like for your logo?`, 
    choices:[`Circle`, `Square`, `Triangle`], 
},
{
    type:`input`,
    name:`color`,
    message:`please enter the color (or a hexadecimal number for color) you want, for your logo. (Required)`,
    validate: colorInput=>{
        if (colorInput){
            return true;
        }else{
            console.log(`please provide color (or a hexadecimal number for color) of your choice!`);
            return false;
        }
    }
},
{
    type:`input`,
    name:`text`,
    message:`please provide text for your logo upto three letters. (Required)`,
    validate: textInput=>{
        if (textInput && textInput.length<= 3){
            return true;
            
        }else{
            console.log(`please enter the desired text!`);
            return false;
        }
    }
},
{
    type:`input`,
    name:`textcolor`,
    message:`please enter the color (or a hexadecimal number for color) for text of your logo. (Required)`,
    validate: textInput=>{
        if (textInput){
            return true;
        }else{
            console.log(`please enter the desired color!(or a hexadecimal number for color)`);
            return false;
        }
    }
},
];


const svg =new Svg()

// a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(logoData => {
       console.log(logoData);
       let shape;
       if(logoData.shape === "Circle"){
           shape=new Circle(logoData.color)
           shape.setColor(logoData.color)
   
          svg.setTextElement(logoData.text, logoData.textcolor)
          svg.setShapeElement(shape)
  
           fs.writeFile("logo.svg", svg.render(), ()=>{})
    }
    else if(logoData.shape === "Square"){
        shape=new Square(logoData.color)
        shape.setColor(logoData.color) 
        svg.setTextElement(logoData.text, logoData.textcolor)
        svg.setShapeElement(shape)
        fs.writeFile("logo.svg", svg.render(), ()=>{})
    }
    else if(logoData.shape === "Triangle") 
        shape=new Triangle(logoData.color)
        shape.setColor(logoData.color) 
          svg.setTextElement(logoData.text, logoData.textcolor)
          svg.setShapeElement(shape)
          fs.writeFile("logo.svg", svg.render(), ()=>{})
    
     })
 }
// Function call to initialize app
init();