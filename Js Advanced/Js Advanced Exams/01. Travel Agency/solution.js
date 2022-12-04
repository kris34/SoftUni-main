window.addEventListener('load', solution);

function solution() {
  let inputs = {
    fullName: document.getElementById('fname'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    address: document.getElementById('address'),
    code: document.getElementById('code'),
  };

  const list = document.getElementById('infoPreview');

  document.getElementById('submitBTN').addEventListener('click', onsubmit);

  function onsubmit(event) {
    event.preventDefault();

    let fullName = inputs.fullName.value;
    let email = inputs.email.value;
    let phone = inputs.phone.value;
    let address = inputs.address.value;
    let code = inputs.code.value;

    if (fullName == '' || email == '') {
      return;
    }

    let li1 = e('li', 'Full Name', fullName);
    let li2 = e('li', 'Email', email);
    let li3 = e('li', 'Phone Number', phone);
    let li4 = e('li', 'Address', address);
    let li5 = e('li', 'Postal Code', code);

    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);
    list.appendChild(li4);
    list.appendChild(li5);

    inputs.fullName.value = '';
    inputs.email.value = '';
    inputs.phone.value = '';
    inputs.address.value = '';
    inputs.code.value = '';

    document.getElementById('submitBTN').disabled = true;
    document.getElementById('editBTN').disabled = false;
    document.getElementById('continueBTN').disabled = false;
  }

  function e(element, type, content) {
    let el = document.createElement(element);
    el.textContent = `${type}: ${content}`;
    return el;
  }
}
