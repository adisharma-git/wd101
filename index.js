let userForm = document.getElementById("user-form");
let userentries = [];
const saveuserform = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const terms = document.getElementById("checkbox").checked;

  const birthDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  if (age < 18 || age > 55) {
    alert("Age must be between 18 and 55");
    return;
  }

  const entry = {
    name,
    email,
    password,
    dob,
    terms,
  };
  userentries.push(entry);
  const userJson = JSON.stringify(userentries);
  displayUserData(userJson);
};

function displayUserData() {
  const userTableBody = document.getElementById("tableBody");
  userTableBody.innerHTML = ""; // Clear the existing rows before displaying new data

  for (const user of userentries) {
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
      <td>${user.dob}</td>
      <td>${user.terms ? "true" : "false"}</td>
    `;

    userTableBody.appendChild(newRow);
  }

  localStorage.setItem("user-entries", JSON.stringify(userentries));
}

userForm.addEventListener("submit", saveuserform);
