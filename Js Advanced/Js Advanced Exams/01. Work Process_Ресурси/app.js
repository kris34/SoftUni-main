function solve() {
  let inputs = {
    firstName: document.getElementById('fname'),
    lastName: document.getElementById('lname'),
    email: document.getElementById('email'),
    birth: document.getElementById('birth'),
    position: document.getElementById('position'),
    eSalary: document.getElementById('salary'),
  };

  let table = document.getElementById('tbody');

  let salary = 0;
  let salaryEl = document.getElementById('sum');

  document.getElementById('add-worker').addEventListener('click', submitForm);

  function submitForm(event) {
    event.preventDefault();
    const firstName = inputs.firstName.value;
    const lastName = inputs.lastName.value;
    const email = inputs.email.value;
    const birth = inputs.birth.value;
    const position = inputs.position.value;
    const eSalary = inputs.eSalary.value;

    salary += Number(eSalary);
    salaryEl.textContent = salary.toFixed(2);

    if (
      firstName == '' ||
      lastName == '' ||
      email == '' ||
      birth == '' ||
      position == '' ||
      eSalary == ''
    ) {
      return;
    }

    let tr = document.createElement('tr');

    let worker = `<td>${firstName}</td>
     <td>${lastName}</td>
     <td>${email}</td>
     <td>${birth}</td>
     <td>${position}</td>
     <td>${eSalary}</td>
     <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>`;

    tr.innerHTML = worker;

    table.appendChild(tr);
    tr.querySelector('.edit').addEventListener('click', onEdit);
    tr.querySelector('.fired').addEventListener('click', onFired);

    inputs.firstName.value = '';
    inputs.lastName.value = '';
    inputs.email.value = '';
    inputs.birth.value = '';
    inputs.position.value = '';
    inputs.eSalary.value = '';

    function onEdit(event) {
      event.preventDefault();
      inputs.firstName.value = firstName;
      inputs.lastName.value = lastName;
      inputs.email.value = email;
      inputs.birth.value = birth;
      inputs.position.value = position;
      inputs.eSalary.value = eSalary;

      salary -= Number(eSalary);
      salaryEl.textContent = salary.toFixed(2);

      tr.remove();
    }

    function onFired(event) {
      event.preventDefault();

      salary -= Number(eSalary);
      salaryEl.textContent = salary.toFixed(2);
      tr.remove();
    }
  }
}
solve();
