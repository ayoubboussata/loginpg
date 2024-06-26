const signUpButton = document.querySelector('#signUp');
const signInButton = document.querySelector('#signIn');
const container = document.querySelector('#container');
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

   const nameInput = document.querySelector('#name');
   const emailInput = document.querySelector('#emailSignup');
   const passwordInput = document.querySelector('#passwordSignup');

   const name = nameInput.value;
   const email = emailInput.value;
   const password = passwordInput.value;

   if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
   }

   try {
      console.log('Sending request to server...');
      const response = await fetch('https://project1-qjg6.onrender.com/users/add', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ username: name, email: email, pwd: password })
      });

      console.log('Response received:', response);
      if (response.ok) {
         alert('User registered successfully!');
         nameInput.value = '';  // Leeg de invoervelden
         emailInput.value = '';
         passwordInput.value = '';
         container.classList.remove("right-panel-active");
      } else {
         const data = await response.json();
         alert('Failed to register user: ' + data.message);
      }
   } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering the user.');
   }
});
