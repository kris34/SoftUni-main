function solution() {
  //take all elements
  let data = {
    name: document.getElementById(`fname`),
    email: document.getElementById(`email`),
    phone: document.getElementById(`phone`),
    address: document.getElementById(`address`),
    code: document.getElementById(`code`),
  };
  let submitBtn = document.getElementById(`submitBTN`);
  submitBtn.addEventListener(`click`, submit);
  function submit(ev) {
    ev.preventDefault();
    let name = data.name.value;
    let email = data.email.value;
    let phone = data.phone.value;
    let address = data.address.value;
    let code = data.code.value;
    //check if name and email are have data
    if (name == `` || email == ``) {
      return;
    }
    //add eleemnts value to preview box
    let divToAdd = document.getElementById(`infoPreview`);
    let nameLi = document.createElement(`li`);
    nameLi.textContent = `Full name: ${name}`;
    divToAdd.appendChild(nameLi);
    let emailLi = document.createElement(`li`);
    emailLi.textContent = `Email: ${email}`;
    divToAdd.appendChild(emailLi);
    let phoneLi = document.createElement(`li`);
    phoneLi.textContent = `Phone Number: ${phone}`;
    divToAdd.appendChild(phoneLi);
    let addressLi = document.createElement(`li`);
    addressLi.textContent = `Address: ${address}`;
    divToAdd.appendChild(addressLi);
    let postalLi = document.createElement(`li`);
    postalLi.textContent = `Postal Code: ${code}`;
    divToAdd.appendChild(postalLi);
    data.name.value = ``;
    data.email.value = ``;
    data.phone.value = ``;
    data.address.value = ``;
    data.code.value = ``; //disable submit

    submitBtn.disabled = true; //enable edit and continue
    let editBtn = document.querySelector(`#editBTN`);
    editBtn.disabled = false;
    editBtn.addEventListener(`click`, edit);
    let continueBTN = document.querySelector(`#continueBTN`);
    continueBTN.disabled = false;
    continueBTN.addEventListener(`click`, continue1);
    function edit() {
      //whed edit - send data back to elements and disable buttons and enable submit
      data.name.value = `${name}`;
      data.email.value = `${email}`;
      data.phone.value = `${phone}`;
      data.address.value = `${address}`;
      data.code.value = `${code}`;
      editBtn.disabled = true;
      continueBTN.disabled = true;
      submitBtn.disabled = false;
      divToAdd.innerHTML = ``;
    } //clear info preview
    function continue1() {
      let h3 = document.createElement(`h3`);
      h3.textContent = `Thank you for reservation!`;
      let blockEl = document.getElementById(`block`);
      blockEl.innerHTML = ``;
      blockEl.appendChild(h3);
    } //when continue remove everything from block and add thank you message
  }
}
