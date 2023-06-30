// Get DOM elements
const signUpButton = document.querySelector('.cta-button');
const signInButton = document.querySelector('.sign-in-button');

// Event listeners
signUpButton.addEventListener('click', handleSignUp);
signInButton.addEventListener('click', handleSignIn);

// Function to handle sign up button click
function handleSignUp(event) {
  event.preventDefault();
  // Add your sign up logic here
  console.log('Sign up clicked');
}

// Function to handle sign in button click
function handleSignIn(event) {
  event.preventDefault();
  // Add your sign in logic here
  console.log('Sign in clicked');
}