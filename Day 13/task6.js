function bmical (weight, height) {
    let bmi = weight/(height*height);

    if (bmi < 18.5) {
        return "Your BMI is " + bmi.toFixed(1) + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi.toFixed(1) + ", so you have a normalweight.";
    } else {
        return "Your BMI is " + bmi.toFixed(1) + ", so you are overweight.";
    }
}

var message = bmical(60, 1.7);
console.log(message);