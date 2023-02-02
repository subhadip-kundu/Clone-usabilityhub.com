const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();  //After any error it will not erase all the input from user,just give them error.
  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;
  if (!username || !email || !password) {
    alert("All fields are required");
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long");
  } else {
    alert(`Welcome ${username}! Your account has been created`);
  }
});
