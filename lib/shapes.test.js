const { describe } = require("node:test")
const {Circle, Square, Triangle} = require("./shapes")

// //circle
// describe(`Circle`, ()=>{ 
//     it('renders correctly', () => {
//         const shape = new Circle();
//         let color = (`green`)
//         shape.setColor(color);
//         expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
//     });
// });
// //square
// describe(`Square`, ()=>{ 
//     it('renders correctly', () => {
//         const shape = new Square();
//         let color = (`blue`)
//         shape.setColor(color);
//         expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
//     });
// });
// //triangle
// describe(`Triangle`, ()=>{ 
//     it('renders correctly', () => {
//         const shape = new Triangle();
//         let color = (`red`)
//         shape.setColor(color);
//         expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
//     });
    
//     // const shape = new Triangle();
//     // shape.setColor("blue");
//     // expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// });