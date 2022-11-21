window.addEventListener('load', solve);

function solve() {
  const inputs = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    gender: document.getElementById('genderSelect'),
    task: document.getElementById('task'),
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
    const firstName = inputs.firstName.value
    const lastName = inputs.lastName.value
    const gender = inputs.gender.value
    const age = inputs.age.value
    const task =  inputs.task.value
    const li = document.createElement('li');
    li.classList.add('each-line');
    const articleEl = document.createElement('article');
    const h4 = document.createElement('h4');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p2');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Mark as Complete';
    completeBtn.classList.add('complete-btn');

    h4.textContent = `${firstName} ${lastName}`;
    p1.textContent = `${gender}, ${age}`;
    p2.textContent = task

    const elArr = [h4, p1, p2];
    elArr.forEach((x) => articleEl.appendChild(x));
    li.appendChild(articleEl);
    li.appendChild(editBtn);
    li.appendChild(completeBtn);

    lists.inProgress.appendChild(li);
    count++;
    counter.textContent = count;

    completeBtn.addEventListener('click', completeTask);
    editBtn.addEventListener("click", edit )
    function completeTask() {
      lists.finished.appendChild(li);
      editBtn.remove();
      completeBtn.remove();
      count--;

      counter.textContent = count;
    }

    inputs.firstName.value = ' ';
    inputs.lastName.value = ' ';
    inputs.task.value = ' ';

    function edit() {
      inputs.firstName.value = firstName
      inputs.lastName.value = lastName
      inputs.gender.value = gender
      inputs.task.value = task
      inputs.age.value = age
      count--;

      counter.textContent = count;
        li.remove();
    }
  }

  function clearBox() {
    lists.finished.innerHTML = ' ';
  }
}
