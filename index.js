// Require fs for writing file
const fs = require('fs/promises');

// Import shape objects
const shapes = require('./lib/shapes');

// Require inquirer for CLI input
const inquirer = require('inquirer');

// Generates image for SVG file
function createImage(data) {
    const { text, textColor, shape, shapeColor } = data;
    // Validate the text input. If invalid throw error.

    if (text.length < 1 || text.length > 3 || (/\s/).test(text)) { throw new Error('Please check text input'); };

    // Set up new shape with predefined object from shapes.
    newShape = new shapes[shape[0].toUpperCase() + shape.slice(1)](shapeColor, text, textColor);

    // Add shape color
    newShape.setColor(shapeColor);

    return newShape.renderSVG();
}

// Prompts for user
const prompts = [
    // get txt from user
    {
        type: "input",
        message: "Add up to 3 letters",
        name: "text",
    },
    // get text color from user
    {
        type: 'input',
        name: 'textColor',
        message: 'Text Color: Add a hex code or color',
    },
    // get shape from user
    {
        type: "list",
        message: "Choose a shape",
        name: "shape",
        choices: ["circle", "triangle", "square"],
    },
    // get shape color from user
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Shape color: Add a hex code or suitable color',
    },
];

const init = async () => {
    try {
        const answer = await inquirer.prompt(prompts);
        const SVGFile = createImage(answer);
        await fs.writeFile("./examples/logo.svg", SVGFile);
        console.log('Operation Succesful');
    } catch (error) {
        console.log(error);
    }
};


init();
