function processJSON() {
  var printArea = document.getElementById("prettyprint")
  var messageArea = document.getElementById("log")
  printArea.innerHTML = ""
  messageArea.innerHTML = ""
  try {
    var obj = JSON.parse(document.getElementById("inputTextarea").value);
    var str = JSON.stringify(obj, null, 2)
    printArea.innerHTML = str;
  }
  catch(e) {
    messageArea.innerHTML = e.message
  }
}
