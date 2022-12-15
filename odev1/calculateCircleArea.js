const arguments = process.argv.slice(1)

function calculateCircleArea(radius) {
    let circleArea = Math.PI * radius * radius;
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${circleArea}`)
}


//This function is working in the console such as: "node calculateCircleArea 10"
calculateCircleArea(arguments[1])