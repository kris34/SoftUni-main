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

  document.getElementById('form-btn').addEventListener('click', submitForm);

  function submitForm(event) {
    event.preventDefault();
    const li = document.createElement('li');
    li.classList.add('each-line');
    const articleEl = document.createElement('article');
    const h4 = document.createElement('h4');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p2');
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit"
    editBtn.classList.add('edit-btn');
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Mark as Complete"
    completeBtn.classList.add('complete-btn');

    h4.textContent = `${inputs.firstName.value} ${inputs.lastName.value}`;
    p1.textContent = `${inputs.gender.value}, ${inputs.age.value}`;
    p2.textContent = inputs.task.value;

    const arr = [h4, p1, p2,];
    arr.forEach((x) => articleEl.appendChild(x));
    li.appendChild(articleEl);
    li.appendChild(editBtn)
    li.appendChild(completeBtn)

    lists.inProgress.appendChild(li);
  }
}
