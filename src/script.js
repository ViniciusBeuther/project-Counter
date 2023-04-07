function startCount()
{
    //Getting fields
var startField = document.getElementById('start-number')
var lastField = document.getElementById('last-number')
var gap = document.getElementById('gap')
var resultField = document.getElementById('result')
resultField.style.textAlign="center"
resultField.style.maxWidth = "300px"

var start = parseInt(startField.value);
  var last = parseInt(lastField.value);
  var gapValue = parseInt(gap.value);
  
  for (var i = start; i <= last; i += gapValue) {
    resultField.innerText += i + "👉 ";   
  }
  resultField.innerText += "✋"
}
