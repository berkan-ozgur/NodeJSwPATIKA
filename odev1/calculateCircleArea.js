const arguments = process.argv.slice(1)

function calculateCircleArea(radius) {
    let circleArea = Math.PI * radius * radius;
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${circleArea}`)
}

calculateCircleArea(arguments[1])