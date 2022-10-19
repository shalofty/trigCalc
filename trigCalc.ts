// Conversion Functions

// creating a Radians type
enum Radians {}

// function to convert Degrees to Radians
function degreesToRadians(degrees:number) {
    let rad:Radians = (degrees*Math.PI)/180;
    return rad;
}

// function to convert Radians to Degrees
function radiansToDegrees(rad:Radians) {
    return (180 * rad) / Math.PI;
}

// Length of arc and area of a circle sector functions

// Finding the length of an arc of a circle
function lengthCircleArc(radius:number, angle:Radians) {
    // for a circle of radius r, a central angle of x radians subtends an arc whose length is s
    // s = r * x
    return radius * angle;
}

// Area of a circle sector
function areaCircleSector(radius:number, angle:Radians) {
    // Area of a sector is equal to .5 times radius squared times theta in radians
    return 0.5 * (radius ** 2) * angle;
}

// Right Angle Trig Functions

// Sine function
function sine(legA:number, legB:number) {
    let hypotenuse:number = Math.sqrt((legA**2)+(legB**2));
    return legB / hypotenuse;
}

// Cosine function
function cosine(legA:number, legB:number) {
    let hypotenuse:number = Math.sqrt((legA**2)+(legB**2));
    return legA / hypotenuse;
}

// Tangent function
function tangent(legA:number, legB:number) {
    return legA / legB;
}

// Cotangent function
function cotangent(legA:number, legB:number) {
    return legB / legA;
}

// Secant function
function secant(legA:number, legB:number) {
    let hypotenuse:number = Math.sqrt((legA**2)+(legB**2));
    return hypotenuse / legB;
}

// Cosecant function
function cosecant(legA:number, legB:number) {
    let hypotenuse:number = Math.sqrt((legA**2)+(legB**2));
    return hypotenuse / legA;
}

// User Interface, using prompt-sync (npm install prompt-sync)

let uiPrompt:number = 0;
const ui = require('prompt-sync')({sigint: true});

while (uiPrompt < 1) {
    console.log("\nShalofty Trigonometry Calculator\n" +
        "Select a function:\n" +
        "1) Conversions\n" +
        "2) Right Angle Trig Functions\n" +
        "0) Exit\n")
    let selection = ui(">>>").toString();
    // Exit
    console.log(selection);
    if (selection == '0') {
        console.log("See ya!");
        uiPrompt += 1;
    }
    // Conversions
    else if (selection == '1') {
        console.log('\nSelection a conversion:\n' +
            '1) Degrees to Radians\n' +
            '2) Radians to Degrees\n')
        let conversionSelect = ui(">>>").toString();
        if (conversionSelect == '1') {
            let degreesInput = ui("Enter Degrees >>>");
            let degrees = +degreesInput;
            console.log("Radians: " + degreesToRadians(degrees));
        }
        else if (conversionSelect == '2') {
            let radians:Radians = ui("Enter Radians >>>");
            console.log("Degrees: " + radiansToDegrees(radians));
        }
    }
}
