function calculateEssence() {
  // Get references to the input fields using their IDs
  var inferiumInput = document.getElementById("inferium");
  var prudentiumInput = document.getElementById("prudentium");
  var intermediumInput = document.getElementById("intermedium");
  var superiumInput = document.getElementById("superium");
  var supremiumInput = document.getElementById("supremium");
  var ultimateInput = document.getElementById("ultimate");

  // Calculate the sum
  var sum = 0;
  sum += parseInt(inferiumInput.value) || 0; // Use parseInt to convert input value to a number
  sum += parseInt(prudentiumInput.value) * 4 || 0;
  sum += parseInt(intermediumInput.value) * 16 || 0;
  sum += parseInt(superiumInput.value) * 64 || 0;
  sum += parseInt(supremiumInput.value) * 256 || 0;
  sum += parseInt(ultimateInput.value) * 1024 || 0;

  // Display the sum
  var answerInput = document.getElementById("numberAnswer");
  answerInput.value = sum;
  var stackAnswer = document.getElementById("stackAnswer");
  stackAnswer.value = sum / 64;
}
