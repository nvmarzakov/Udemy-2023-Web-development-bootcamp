function bmiCalculator(weight, height) {
    let bmiResult = weight / Math.pow(height, 2);
    let roundedBmiResult = Math.round(bmiResult);

    // BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."
    // BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."
    // BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

    if (roundedBmiResult < 18.5) {
        return `Your BMI is ${roundedBmiResult}, so you are underweight.`
    } else if (roundedBmiResult >= 18.5 && roundedBmiResult < 24.9) {
        return `Your BMI is ${roundedBmiResult}, so you have a normal weight.`
    } else if (roundedBmiResult > 24.9) {
        return `Your BMI is ${roundedBmiResult}, so you are overweight.`
    }
}

/* If my weight is 65kg and my height is 1.8m,I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8);
bmi should equal around 20 in this case.
*/

var bmi = bmiCalculator(65, 1.8);
console.log(bmi)



