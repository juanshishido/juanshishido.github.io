function processJSON() {
  var printArea = document.getElementById("prettyprint")
  var messageArea = document.getElementById("log")
  printArea.innerHTML = ""
  messageArea.innerHTML = ""
  try {
    // replace smart quotes
    var input = document.getElementById("inputTextarea").value
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .replace(/'/g, '"');
    var obj = JSON.parse(input);
    var str = JSON.stringify(obj, null, 2)
    printArea.innerHTML = str;
  }
  catch(e) {
    messageArea.innerHTML = e.message
  }
}
