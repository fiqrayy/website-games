// Registration Form
if (document.getElementById("register-form")) {
    document.getElementById("register-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("reg-username").value;
        const password = document.getElementById("reg-password").value;
  
        // Simulate user registration and store data in local storage
        localStorage.setItem(username, password);
        alert("Registration successful!");
        // Redirect to login page
        window.location.href = "login.html";
    });
  }
  
  // Login Form
  if (document.getElementById("login-form")) {
    document.getElementById("login-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
  
        // Simulate user login by checking local storage
        const storedPassword = localStorage.getItem(username);
  
        if (storedPassword === password) {
            alert("Login successful!");
            window.location.href = "beranda.html";
        } else {
            alert("Login failed. Please check your username and password.");
        }
    });
  }
  