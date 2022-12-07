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
    ul: document.querySelector('.info-list'),
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
      checkOut == ' '
    ) {
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
    lists.ul.appendChild(li);

    document.getElementById('next-btn').disabled = true;
    inputs.firstName.value = '';
    inputs.lastName.value = '';
    inputs.checkIn.value = '';
    inputs.checkOut.value = '';
    inputs.guestsNum.value = '';

    editBtn.addEventListener('click', onEdit);
    function onEdit(event){ 
        event.preventDefault()
       
        

    }
  }
}
