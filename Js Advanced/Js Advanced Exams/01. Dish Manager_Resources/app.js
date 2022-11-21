window.addEventListener('load', solve);

function solve() {
  const inputs = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    gender: document.getElementById('genderSelect'),
    description: document.getElementById('task'),
  };

  const lists = {
    inProgress: document.getElementById('in-progress'),
    finished: document.getElementById('finished'),
  };

  let counter = document.getElementById('progress-count');
  let count = 0;
  document.getElementById('form-btn').addEventListener('click', submitForm);
  document.getElementById('clear-btn').addEventListener('click', clearBox);

  function submitForm(event) {
    event.preventDefault();
    const firstName = inputs.firstName.value;
    const lastName = inputs.lastName.value;
    const gender = inputs.gender.value;
    const age = inputs.age.value;
    const description = inputs.description.value;

    if (firstName == '' || lastName == '' || description == '' || age == '') {
      return;
    }

    const li = document.createElement('li');
    li.className = 'each-line';
    const articleEl = document.createElement('article');
    const h4 = document.createElement('h4');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Mark as Complete';
    completeBtn.classList.add('complete-btn');
    h4.textContent = `${firstName} ${lastName}`;
    p1.textContent = `${gender}, ${age}`;
    p2.textContent = `Dish description: ${description}`;

    articleEl.appendChild(h4);
    articleEl.appendChild(p1);
    articleEl.appendChild(p2);

    li.appendChild(articleEl);
    li.appendChild(editBtn);
    li.appendChild(completeBtn);

    lists.inProgress.appendChild(li);

    inputs.firstName.value = '';
    inputs.lastName.value = '';
    inputs.age.value = '';
    inputs.description.value = '';

    count++;
    counter.textContent = count;

    completeBtn.addEventListener('click', completeTask);
    editBtn.addEventListener('click', edit);

    function completeTask(ev) {
      ev.preventDefault();
      lists.finished.appendChild(li);
      editBtn.remove();
      completeBtn.remove();
      count--;
      counter.textContent = count;
    }

    function edit(ev) {
      ev.preventDefault();
      inputs.firstName.value = firstName;
      inputs.lastName.value = lastName;
      inputs.gender.value = gender;
      inputs.description.value = description;
      inputs.age.value = age;

      count--;
      counter.textContent = count;

      li.remove();
    }
  }

  function clearBox(ev) {
    ev.preventDefault();
    lists.finished.innerHTML = '';
  }
}
