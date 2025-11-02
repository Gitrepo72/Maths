const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      audio = document.getElementById("myAudio");

// Global variable to store the correct answer (since it's used by the listeners)
var answer = 0; 

function generate_equation() {
    // 1. Generate the divisor (num2) between 1 and 10
    var num2 = Math.floor(Math.random() * 10) + 1;

    // 2. Generate the factor (k), which will be the correct answer, between 1 and 10
    var k = Math.floor(Math.random() * 10) + 1;

    // 3. Calculate the dividend (num1)
    // num1 is now guaranteed to be perfectly divisible by num2
    var num1 = num2 * k;

    // The correct answer is now known to be k
    var correctAnswer = k;

    // Generate dummy answers
    var dummyAnswer1, dummyAnswer2;
    
    // Ensure dummy answers are different from the correct answer 'k'
    do {
        // A simple random float for a dummy answer
        dummyAnswer1 = (Math.floor(Math.random() * 200) + 1) / 10;
        // A simple random integer for a dummy answer
        dummyAnswer2 = Math.floor(Math.random() * 20) + 1;
    } while (dummyAnswer1 === correctAnswer || dummyAnswer2 === correctAnswer || dummyAnswer1 === dummyAnswer2);


    // --- Set up the equation and Answer ---
    
    // Since num1 is always the larger number in the division (num1 = num2 * k), 
    // we don't need the 'if (num1 > num2)' logic from your original code.
    // The equation is simply num1 / num2.
    
    // Set the global answer variable
    answer = correctAnswer; 
    
    // Display the numbers on the page (assuming you have elements with IDs "num1" and "num2")
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    
    // --- Prepare and Shuffle Answers ---
    
    // The correct answer is an integer, so we don't need the toFixed() check.
    var allAnswers = [answer, dummyAnswer1, dummyAnswer2];
    var switchAnswers = [];

    // Fisher-Yates (or similar) shuffle for the options
    for (i = allAnswers.length; i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    };

    // Update the option buttons
    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
};


// --- Event Listeners (No change needed here, as they reference the global 'answer') ---

option1.addEventListener("click", function(){
    // Use the global 'answer' variable, ensuring type coherence for comparison
    if(Number(option1.innerHTML) === answer){ 
      generate_equation();
    }
    else{
      audio.play();
    }
});

option2.addEventListener("click", function(){
    if(Number(option2.innerHTML) === answer){
      generate_equation();
    }
    else{
      audio.play();
    }
});

option3.addEventListener("click", function(){
    if(Number(option3.innerHTML) === answer){
      generate_equation();
    }
    else{
      audio.play();
    }
});

// Call the function to start the game
generate_equation();
