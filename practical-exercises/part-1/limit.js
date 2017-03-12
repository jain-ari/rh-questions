//Label
var label = document.getElementById('rem');
//Textarea
var textarea = document.getElementById('textarea');

var main = textarea.oninput = function() {
  //Getting current length
  var length = textarea.value.length;
  label.innerHTML = "Remaining Chars: " + (100 - length);

  //Check for 5 characters and change color
  if ((100 - length) < 6) {
    label.style.color = "red";
  } else {
    label.style.color = "black";
  }
  //Restricting input
  if (100 - length <= 0) {
    textarea.onkeypress = function() {
      return false;
    }
  } else {
    textarea.onkeypress = function() {
      return true;
    }
  }
}

//Checking for pasted data
textarea.addEventListener('paste', handlePaste);

function handlePaste(e) {
  var clipboardData, pastedData;

  // Stop data from paste into textarea
  e.stopPropagation();
  e.preventDefault();

  // Get pasted data 
  clipboardData = e.clipboardData || window.clipboardData;
  pastedData = clipboardData.getData('Text');

  // Checking length of data being pasted
  if (pastedData.length >= 100) {
    alert('Pasted data out of bounds')
  }
}
