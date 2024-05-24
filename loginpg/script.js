document.addEventListener('DOMContentLoaded', () => {
   const signUpButton = document.querySelector('#signUp');
   const signInButton = document.querySelector('#signIn');
   const container = document.querySelector('#container');
   const signUpForm = document.querySelector('.sign-up-container form');
   const signInForm = document.querySelector('.sign-in-container form');
   const signInEmailInput = document.querySelector('#email');
   const signInPasswordInput = document.querySelector('#password');

   signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
   });

   signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
   });

   // Functie om gebruiker te registreren
   signUpForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = signUpForm.querySelector('input[name="name"]').value;
      const email = signUpForm.querySelector('input[name="email"]').value;
      const password = signUpForm.querySelector('input[name="password"]').value;

      try {
         const response = await fetch('https://project1-qjg6.onrender.com/users/add', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: name, email, pwd: password })
         });

         if (response.ok) {
            alert('User registered successfully!');
            // Voer hier eventuele andere acties uit, zoals doorsturen naar een inlogpagina
         } else {
            const data = await response.json();
            alert('Registration failed: ' + data.message);
         }
      } catch (error) {
         console.error('Error registering user:', error);
         alert('Something went wrong during registration. Please try again later.');
      }
   });

   // Functie om gebruiker in te loggen
   signInForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = signInEmailInput.value;
      const password = signInPasswordInput.value;

      try {
         const response = await fetch('https://project1-qjg6.onrender.com/users/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
         });

         if (response.ok) {
            const data = await response.json();
            const token = data.token;
            // Bewaar token in localStorage of sessionStorage voor verdere authenticatie
            // Hier kun je doorsturen naar een andere pagina of andere acties uitvoeren na succesvol inloggen
            alert('User logged in successfully!');
         } else {
            const data = await response.json();
            alert('Login failed: ' + data.message);
         }
      } catch (error) {
         console.error('Error logging in:', error);
         alert('Something went wrong during login. Please try again later.');
      }
   });
});
