import { signUpUser } from '../fetch-utils.js';

const signInForm = document.getElementById('signin');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('signup');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const response = await signUpUser(signUpEmail.value, signUpPassword.value);
    return response.user;
});