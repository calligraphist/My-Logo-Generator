//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');
const shapesTest = require('./lib/shapes.test');
const {Circle, Square, Triangle} = require("./lib/shapes")
var path = require('path');
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
    message:`please provide text for your logo. (Required)`,
    validate: textInput=>{
        if (textInput){
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

// //function to write file
// function writeToFile(fileName, data) {
// 	//console.log("Writing [" + data + "] to file [" + fileName + "]")
//     filesystem.writeFile(fileName, data, function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("you have generated a logo.svg!");
//     });
// }

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, "/dist/", fileName),data)
 }


// a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(logoData => {
        console.log(logoData);
       writeToFile("logo.svg", shapes(logoData))
     })
 }
// Function call to initialize app
init();