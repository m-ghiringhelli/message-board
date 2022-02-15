import { signUpUser, signInUser, redirectIfLoggedIn } from '../fetch-utils.js';

const signInForm = document.getElementById('signin');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('signup');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

// redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const response = await signUpUser(signUpEmail.value, signUpPassword.value);
    return response.user;
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const response = await signInUser(signInEmail.value, signInPassword.value);
    // redirectIfLoggedIn();
    console.log(response);
});