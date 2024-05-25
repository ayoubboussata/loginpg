const signUpButton = document.querySelector('#signUp');
const signInButton = document.querySelector('#signIn');
const container = document.querySelector('#container');
const signUpForm = document.querySelector('.sign-up-container form');
const signInForm = document.querySelector('.sign-in-container form');
const signInEmailInput = document.querySelector('#email');
const signInPasswordInput = document.querySelector('#password');
const namesignup = document.querySelector('#name');
const emailsignup = document.querySelector('#emailSignup'); // Corrected here
const passwordsignup = document.querySelector('#passwordsignup');
const signUpBtn = document.querySelector('#signUpbtn');

signUpButton.addEventListener('click', () => {
   container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
   container.classList.remove("right-panel-active");
});

// Functie om gebruiker te registreren
signUpBtn.addEventListener('click', async (e) => {
   e.preventDefault();

   // Verzamelen van invoervelden, zorg ervoor dat de elementen correct zijn gedefinieerd
   const name = document.getElementById('name').value;
   const email = document.getElementById('emailSingup').value;
   const password = document.getElementById('passwordsingup').value;

   try {
      // Verzenden van de fetch-aanvraag naar de server
      const response = await fetch('https://project1-qjg6.onrender.com/users/add', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ username: name, email: email, pwd: password }) // Zorg ervoor dat de velden overeenkomen met wat de server verwacht
      });

      if (response.ok) {
         alert('User registered successfully!');
         // Voeg hier extra logica toe zoals het doorsturen naar een andere pagina
      } else {
         const data = await response.json();
         alert('Failed to register user: ' + data.message);
      }
   } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering the user.');
   }
});