function encodeAndDecodeMessages() {
  let textArea = document.querySelectorAll("textarea");
  let buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", onEncode);
  buttons[1].addEventListener("click", onDecode);

  function onEncode(e) {
    let encodedMsg = "";
    let input = textArea[0].value;

    for (let char of input) {
      encodedMsg += String.fromCharCode(char.charCodeAt(0) + 1);
    }
    textArea[1].textContent = encodedMsg;
    textArea[0].value = "";
  }

  function onDecode(e) {
    let decodedMsg = "";
    let input = textArea[1].value;

    for (let char of input) {
      decodedMsg += String.fromCharCode(char.charCodeAt(0) - 1);
    }

    textArea[1].value = decodedMsg;
  }
}
