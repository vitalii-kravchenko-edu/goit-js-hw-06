const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", generateUserAccount);

function generateUserAccount(event) {
  event.preventDefault();
  const form = event.target;
  
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  };

  const userAccount = {};
  userAccount.email = email;
  userAccount.password = password;
  console.log(userAccount);

  form.reset();
}
