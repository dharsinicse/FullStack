function bmical (weight, height) {
    var bmi = weight/(height*height);
    return Math.round(bmi);
}

var bmi = bmical(65, 1.8);
console.log(bmi);