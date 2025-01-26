document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    alert("Login successful!");
    // You can add further logic like redirecting to a dashboard
  } else {
    alert("Please fill in both fields.");
  }
});
