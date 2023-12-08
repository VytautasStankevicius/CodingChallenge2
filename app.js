let inputText;

document.querySelector('.submitSymbol').onclick = function(){
  inputText = document.querySelector('.inputbox').value;
  if(inputText.length < 3 ){
    inputText = inputText.toUpperCase();
  }
  if(inputText.length >= 3 ){
    inputText = inputText.toLowerCase();
  }
  document.querySelector('h1').textContent = `${inputText}`;
}

// let inputTextAllBig = inputText.toUppercase()
// if(inputText.length > 2 ){
//   return inputTextAllBig;
// }



// let inputTextCheck =
//   inputText.charAt(0).toUppercase() + word.slice(1);

