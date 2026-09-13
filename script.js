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

function calculateNutritionScore(calories) {
    if (calories <= 0) {
        return 0;
    }

    if (calories >= 1800 && calories <= 2500) {
        return 100;
    }

    if (calories >= 1500 && calories <= 2800) {
        return 80;
    }

    if (calories >= 1000) {
        return 60;
    }

    return 40;
}

function getDailyChallenge(water, steps, sleep) {
    if (water < 8) {
        return "Drink 8 glasses of water today";
    }

    if (steps < 10000) {
        return "Complete 10,000 steps today";
    }

    if (sleep < 8) {
        return "Aim for 8 hours of sleep";
    }

    return "All daily goals completed";
}

function calculateStreak(water, steps, sleep, calories) {
    var goalsCompleted = 0;

    if (water >= 8) {
        goalsCompleted++;
    }

    if (steps >= 10000) {
        goalsCompleted++;
    }

    if (sleep >= 8) {
        goalsCompleted++;
    }

    if (calories > 0) {
        goalsCompleted++;
    }

    if (goalsCompleted === 4) {
        return 1;
    }

    return 0;
}

function updateAchievement(water, steps, sleep, calories) {
    if (
        water >= 8 &&
        steps >= 10000 &&
        sleep >= 8 &&
        calories > 0
    ) {
        return "Daily Goals Completed";
    }

    if (steps >= 10000) {
        return "10K Steps";
    }

    if (water >= 8) {
        return "Hydration Goal";
    }

    return "No achievements yet";
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

    var nutritionScore = calculateNutritionScore(calories);

    document.getElementById("nutritionScore").textContent =
        nutritionScore;

    var challenge = getDailyChallenge(
        water,
        steps,
        sleep
    );

    document.getElementById("dailyChallenge").textContent =
        challenge;

    var streak = calculateStreak(
        water,
        steps,
        sleep,
        calories
    );

    document.getElementById("streakValue").textContent =
        streak + " day";

    var achievement = updateAchievement(
        water,
        steps,
        sleep,
        calories
    );

    document.getElementById("achievementValue").textContent =
        achievement;
}

function updatePersonalTracking() {

    var mood = document.getElementById("mood").value;
    var cycleDate = document.getElementById("cycleDate").value;

    if (mood === "" && cycleDate === "") {
        alert("Please select a mood or enter a cycle date.");
        return;
    }

    var message = "";

    if (mood !== "") {
        message += "Mood: " + mood;
    }

    if (cycleDate !== "") {
        if (message !== "") {
            message += "\n";
        }

        message += "Menstrual cycle date: " + cycleDate;
    }

    alert(message);
}
