function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        return 0;
    }

    var heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function updateWaterIntake(glasses) {
    document.getElementById("waterValue").textContent =
        glasses + " / 8 glasses";

    var percentage = (glasses / 8) * 100;

    document.getElementById("waterGoal").textContent =
        Math.min(percentage, 100).toFixed(0) + "%";
}

function updateSteps(steps) {
    document.getElementById("stepsValue").textContent =
        steps + " steps";

    var percentage = (steps / 10000) * 100;

    document.getElementById("stepsGoal").textContent =
        Math.min(percentage, 100).toFixed(0) + "%";
}

function updateSleep(hours) {
    document.getElementById("sleepValue").textContent =
        hours + " hours";

    var percentage = (hours / 8) * 100;

    document.getElementById("sleepGoal").textContent =
        Math.min(percentage, 100).toFixed(0) + "%";
}

function updateCalories(calories) {
    document.getElementById("calorieValue").textContent =
        calories + " kcal";
}

function calculateWellnessScore(water, steps, sleep, calories) {
    var waterScore = Math.min((water / 8) * 25, 25);
    var stepsScore = Math.min((steps / 10000) * 25, 25);
    var sleepScore = Math.min((sleep / 8) * 25, 25);
    var calorieScore = calories > 0 ? 25 : 0;

    return Math.round(
        waterScore +
        stepsScore +
        sleepScore +
        calorieScore
    );
}

function updateDashboard() {

    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var water = parseFloat(document.getElementById("water").value);
    var steps = parseInt(document.getElementById("steps").value, 10);
    var sleep = parseFloat(document.getElementById("sleep").value);
    var calories = parseFloat(document.getElementById("calories").value);

    if (
        isNaN(weight) ||
        isNaN(height) ||
        isNaN(water) ||
        isNaN(steps) ||
        isNaN(sleep) ||
        isNaN(calories)
    ) {
        alert("Please enter all health details.");
        return;
    }

    var bmi = calculateBMI(weight, height);

    document.getElementById("bmiValue").textContent =
        bmi.toFixed(1);

    updateWaterIntake(water);
    updateSteps(steps);
    updateSleep(sleep);
    updateCalories(calories);

    var wellnessScore = calculateWellnessScore(
        water,
        steps,
        sleep,
        calories
    );

    document.getElementById("wellnessValue").textContent =
        wellnessScore;
}
