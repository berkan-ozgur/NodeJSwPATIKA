const circleArea = (radius) => {
    c_area = Math.PI * radius * radius
    return console.log(c_area)
}

const circleCircumference = (radius) => {
    c_circumference = 2 * Math.PI * radius
    return console.log(c_circumference)
}

module.exports = {
    circleArea,
    circleCircumference
} 