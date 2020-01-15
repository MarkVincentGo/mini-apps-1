const url = 'http://localhost:3000';

// DEFINING FUNCTIONS OF EACH ELEMENT
let $textInput = $('#textInput');
let $submitButton = $('#submit');
$submitButton.on('click', (event) => {
    $.ajax({
      method: 'POST',
      url: url + '/textBox',
      contentType: 'application/json',
      data: JSON.stringify({text: $textInput.val()}),
      success: (data) => {
        $('#textOutput').val(data)
      }
    })
  })

const fileReader = new FileReader();
let $fileInput = $('#filePicker');
$fileInput.on('change', (event) => {
  fileReader.onload = (text) => {$.ajax({
    method: 'POST',
    url: url + '/filePicker',
    contentType: 'application/json',
    data: text.target.result,
    success: (data) => {
      $('#textOutput').val(data)
    }
  })}
  fileReader.readAsText($fileInput[0].files[0]);
})

let $downloads = $('#download')
$downloads.on('click', (event) => {
  let $textOutput = $('#textOutput')
  console.log($textOutput.val())
  chrome.downloads.download({
    body: $textOutput.val(),
    saveAs: true
  })
})


  // used native browser
//select textarea box
// let textInput = document.getElementById('textInput');
// //select submit button
// let submitButton = document.getElementById('submit');
// //add button event listener
// submitButton.addEventListener('click', (event) => {
//   // console.log(textInput.value)
//   //xml native method
//   if (textInput.value) {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("textOutput").value = xhttp.responseText;
//       }
//     };
//     xhttp.open("POST", "http://localhost:3000/textBox", true);
//     xhttp.setRequestHeader('Content-type', 'application/json');
//     xhttp.send(JSON.stringify({text: textInput.value}));
//   }
// });


// let fileInput = document.getElementById('filePicker')
// fileInput.addEventListener('change', (event) => {
//   var xhttp = new XMLHttpRequest();

//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("textOutput").value = xhttp.responseText;
//     }
//   };

//   xhttp.open("POST", "http://localhost:3000/filePicker", true);
//   xhttp.setRequestHeader('Content-type', 'application/json');
//   console.log(fileInput.files[0])
//   xhttp.send(fileInput.files[0]);
// })

