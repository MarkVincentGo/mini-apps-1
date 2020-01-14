// DEFINING FUNCTIONS OF EACH ELEMENT

let textInput = document.getElementById('textInput');
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (event) => {
  // console.log(textInput.value)
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/ponies", true);
  xhttp.setRequestHeader('Content-type', 'application/json');
  xhttp.send(JSON.stringify({text: textInput.value}));
  // console.log(textInput.value)
})

