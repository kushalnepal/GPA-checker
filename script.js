function grading() {
    let input = document.getElementById("grade-in");
    let number = parseFloat(input.value); // Corrected to use .value
    let paragraphElement = document.querySelector(".paragraph"); // Using querySelector for class
    // let gradElement =document.getElementById("grid");

    if (number >= 90 && number <= 100) {
        // gradElement.style.display="block";
        paragraphElement.innerHTML = "A+";
    } else if (number >= 80 && number < 90) {
        paragraphElement.innerHTML = "A";
    } else if (number >= 70 && number < 80) {
        paragraphElement.innerHTML = "B+";
    } else if (number >= 60 && number < 70) {
        paragraphElement.innerHTML = "B";
    } else if (number >= 50 && number < 60) {
        paragraphElement.innerHTML = "C+";
    } else if (number >= 40 && number < 50) {
        paragraphElement.innerHTML = "C";
    } else if (number >= 30 && number < 40) {
        paragraphElement.innerHTML = "D+";
    } else if (number >= 20 && number < 30) {
        paragraphElement.innerHTML = "D";
    } 
   
    if(number<=20) {
        document.get("failed").innerHTML = "You failed"; 

    }
}
