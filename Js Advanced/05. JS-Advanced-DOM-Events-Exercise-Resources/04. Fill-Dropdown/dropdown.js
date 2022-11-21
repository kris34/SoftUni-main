function addItem() {
  let contentText = document.getElementById("newItemText");
  let contentValue = document.getElementById("newItemValue");
  let manu = document.getElementById("menu");

  let optionElement = document.createElement("option");
  optionElement.textContent = contentText.value;
  optionElement.value = contentValue.value;

  manu.appendChild(optionElement);

  contentText.value = "";
  contentValue.value = "";
}
