// Creates base class containing shapeColor, text, textColor. This class will be extended for each shape.
class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }

    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return "";
    }
    renderSVG() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${this.render()}
  <text x="150" y="120" font-size="55" text-anchor="middle" shapeColor="${this.textColor}">${this.text}</text>
</svg>   
        `;
    }
}
// Create Circle class which extends Shape class for shapeColor, text, textColor and returns circle shape paramaters.
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" shapeColor="${this.shapeColor}" />`
    }
}
// Create Triangle class which extends Shape class for shapeColor, text, textColor and returns triangle shape paramaters.
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" shapeColor="${this.shapeColor}" />`
    }
    renderSVG() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${this.render()}

  <text x="150" y="145" font-size="40" text-anchor="middle" shapeColor="${this.shapeColor}">${this.text}</text>

</svg>   
        `;
    }
}
// Create Square class which extends Shape class for shapeColor, text, textColor and returns square shape paramaters.
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return `<rect x="70" y="20" width="160" height="160" shapeColor="${this.shapeColor}" />`
    }
}

module.exports = { Circle, Triangle, Square };