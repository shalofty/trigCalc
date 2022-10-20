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

let uxPrompt:boolean = true;
const ux = require('prompt-sync')({sigint: true});

while (uxPrompt) {
    console.log("\nShalofty Trigonometry Calculator\n" +
        "Select a function:\n" +
        "1) Conversions\n" +
        "2) Right Angle Trig Functions\n" +
        "0) Exit\n")
    let selection = ux(">>>").toString();
    // Exit
    console.log(selection);
    if (selection == '0') {
        console.log("See ya!");
        uxPrompt = false;
    }
    // Conversions
    else if (selection == '1') {
        console.log('\nSelection a conversion:\n' +
            '1) Degrees to Radians\n' +
            '2) Radians to Degrees\n');
        let conversionSelect = ux(">>>").toString();
        if (conversionSelect == '1') {
            let degreesInput = ux("Enter Degrees >>>");
            let degrees = +degreesInput;
            console.log("Radians: " + degreesToRadians(degrees));
        }
        else if (conversionSelect == '2') {
            let radians:Radians = ux("Enter Radians >>>");
            console.log("Degrees: " + radiansToDegrees(radians));
        }
    }
    // Right Angle Functions
    else if (selection == '2') {
        let raPrompt:boolean = true;
        while (raPrompt) {console.log("\nSelect a function:\n" +
            "1) Sine\n" +
            "2) Cosine\n" +
            "3) Tangent\n" +
            "4) Cotangent\n" +
            "5) Secant\n" +
            "6) Cosecant\n" +
            "0) Exit");
            let raSelect = ux(">>>").toString();
            // sine() function
            if (raSelect == '1') {
                let doMore:boolean = true;
                while (doMore) {
                    let legA = +ux("legA length >>>\n");
                    let legB = +ux("legB length >>>\n");
                    console.log(sine(legA, legB));
                    let yon = ux("More? (y/n)").toString();
                    if (yon == 'y') {
                        doMore = true;
                    }
                    else if (yon == 'n') {
                        doMore = false;
                    }
                    else {
                        console.log("Err: sine() function")
                    }
                }
            }
            // cosine() function
            else if (raSelect == '2') {
                let doMore:boolean = true;
                while (doMore) {
                    let legA = +ux("legA length >>>\n");
                    let legB = +ux("legB length >>>\n");
                    console.log(cosine(legA, legB));
                    let yon = ux("More? (y/n)").toString();
                    if (yon == 'y') {
                        doMore = true;
                    }
                    else if (yon == 'n') {
                        doMore = false;
                    }
                    else {
                        console.log("Err: cosine() function");
                    }
                }
            }
            // tangent() function
            else if (raSelect == '3') {
                let doMore:boolean = true;
                while (doMore) {
                    let legA = +ux("legA length >>>\n");
                    let legB = +ux("legB length >>>\n");
                    console.log(tangent(legA, legB));
                    let yon = ux("More? (y/n)").toString();
                    if (yon == 'y') {
                        doMore = true;
                    }
                    else if (yon == 'n') {
                        doMore = false;
                    }
                    else {
                        console.log("Err: tangent() function");
                    }
                }
            }
            // cotangent() function
            else if (raSelect == '4') {
                let doMore:boolean = true;
                while (doMore) {
                    let legA = +ux("legA length >>>\n");
                    let legB = +ux("legB length >>>\n");
                    console.log(cotangent(legA, legB));
                    let yon = ux("More? (y/n)").toString();
                    if (yon == 'y') {
                        doMore = true;
                    }
                    else if (yon == 'n') {
                        doMore = false;
                    }
                    else {console.log("Err: cotangent() function");}
                }
            }
            // secant() function
            else if (raSelect == '5') {
                let doMore:boolean = true;
                while (doMore) {
                    let legA = +ux("legA length >>>\n");
                    let legB = +ux("legB length >>>\n");
                    console.log(secant(legA, legB));
                    let yon = ux("More? (y/n)").toString();
                    if (yon == 'y') {
                        doMore = true;
                    }
                    else if (yon == 'n') {
                        doMore = false;
                    }
                    else {console.log("Err: secant() function");}
                }
            }
            // cosecant() function
            else if (raSelect == '6') {
                let doMore:boolean = true;
                while (doMore) {
                    let legA = +ux("legA length >>>\n");
                    let legB = +ux("legB length >>>\n");
                    console.log(cosecant(legA, legB));
                    let yon = ux("More? (y/n)").toString();
                    if (yon == 'y') {
                        doMore = true;
                    }
                    else if (yon == 'n') {
                        doMore = false;
                    }
                    else {console.log("Err: cosecant() function");}
                }
            }
            // exit menu
            else if (raSelect == '0') {
                raPrompt = false;
            }
            // error
            else {
                console.log("Err: trig functions");
            }}

    }
}
