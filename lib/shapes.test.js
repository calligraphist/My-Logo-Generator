//required
const {Circle, Square, Triangle} = require("./shapes")

//circle
describe(`Circle`, ()=>{ 
    test('renders correctly', () => {
        const shape = new Circle();
        let color = (`green`)
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />`);
    });
});
//square
describe(`Square`, ()=>{ 
    test('renders correctly', () => {
        const shape = new Square();
        let color = (`blue`)
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="60" height="200" width="200" fill="${color}" />`);
    });
});
//triangle
describe(`Triangle`, ()=>{ 
    test('renders correctly', () => {
        const shape = new Triangle();
        let color = (`red`)
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${color}" />`);
    });
    

});