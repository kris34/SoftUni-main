window.addEventListener('load', solve);

function solve() {
  let inputs = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    checkIn: document.getElementById('date-in'),
    checkOut: document.getElementById('date-out'),
    guestsNum: document.getElementById('people-count'),
  };

  document.getElementById('next-btn').addEventListener('click', onSubmit);
  let lists = {
    ul1: document.querySelector('.info-list'),
    ul2: document.querySelector('.confirm-list'),
  };
  function onSubmit(event) {
    event.preventDefault();
    let firstName = inputs.firstName.value;
    let lastName = inputs.lastName.value;
    let checkIn = inputs.checkIn.value;
    let checkOut = inputs.checkOut.value;
    let guestNum = inputs.guestsNum.value;

    if (
      firstName == '' ||
      lastName == '' ||
      guestNum == '' ||
      checkIn == '' ||
      checkOut == ''
    ) {
      return;
    }

    let d1 = new Date(checkIn);
    let d2 = new Date(checkOut);

    function isBefore(date1, date2) {
      return date1 < date2;
    }

    if (isBefore(d1, d2) == false) {
      return;
    }

    let li = document.createElement('li');
    li.className = 'reservation-content';
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    h3.textContent = `Name: ${firstName} ${lastName}`;
    let p = document.createElement('p');
    p.textContent = `From date: ${checkIn}`;
    let p2 = document.createElement('p');
    p2.textContent = `To date: ${checkOut}`;
    let p3 = document.createElement('p');
    p3.textContent = `For ${guestNum} people`;
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(p2);
    article.appendChild(p3);
    let editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    let continueBtn = document.createElement('button');
    continueBtn.className = 'continue-btn';
    continueBtn.textContent = 'Continue';
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);
    lists.ul1.appendChild(li);

    document.getElementById('next-btn').disabled = true;
    inputs.firstName.value = '';
    inputs.lastName.value = '';
    inputs.checkIn.value = '';
    inputs.checkOut.value = '';
    inputs.guestsNum.value = '';

    editBtn.addEventListener('click', onEdit);
    function onEdit(event) {
      event.preventDefault();

      inputs.firstName.value = firstName;
      inputs.lastName.value = lastName;
      inputs.checkIn.value = checkIn;
      inputs.checkOut.value = checkOut;
      inputs.guestsNum.value = guestNum;

      editBtn.disabled = true;
      continueBtn.disabled = true;
      document.getElementById('next-btn').disabled = false;
      lists.ul1.innerHTML = '';
    }

    continueBtn.addEventListener('click', onContinue);

    function onContinue(event) {
      event.preventDefault();
      lists.ul1.innerHTML = '';

      let li = document.createElement('li');
      li.className = 'reservation-content';
      let article = document.createElement('article');
      let h3 = document.createElement('h3');
      h3.textContent = `Name: ${firstName} ${lastName}`;
      let p = document.createElement('p');
      p.textContent = `From date: ${checkIn}`;
      let p2 = document.createElement('p');
      p2.textContent = `To date: ${checkOut}`;
      let p3 = document.createElement('p');
      p3.textContent = `For ${guestNum} people`;
      article.appendChild(h3);
      article.appendChild(p);
      article.appendChild(p2);
      article.appendChild(p3);
      let confirmBtn = document.createElement('button');
      confirmBtn.className = 'confirm-btn';
      confirmBtn.textContent = 'Confirm';
      let cancelBtn = document.createElement('button');
      cancelBtn.className = 'cancel-btn';
      cancelBtn.textContent = 'Cancel';
      li.appendChild(article);
      li.appendChild(confirmBtn);
      li.appendChild(cancelBtn);
      lists.ul2.appendChild(li);

      confirmBtn.addEventListener('click', onConfirm);
      cancelBtn.addEventListener('click', onCancel);
      function onConfirm(event) {
        event.preventDefault();
        lists.ul2.innerHTML = '';
        document.getElementById('next-btn').disabled = false;
        let h1 = document.getElementById('verification');
        h1.className = 'reservation-confirmed';
        h1.textContent = 'Confirmed.';
      }

      function onCancel(event) {
        event.preventDefault();
        event.preventDefault();
        lists.ul2.innerHTML = '';
        document.getElementById('next-btn').disabled = false;
        let h1 = document.getElementById('verification');
        h1.className = 'reservation-cancelled';
        h1.textContent = 'Cancelled.';
      }
    }
  }
}
