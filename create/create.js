import { addPost, logout, checkAuth } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');
const createPostForm = document.getElementById('create-post');
const incidentInput = document.getElementById('incident');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('date');
const descriptionInput = document.getElementById('description');
const contactInput = document.getElementById('contact');

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
    console.log('clicked');
    
});

createPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newPost = { 
        subject: incidentInput.value,
        location: locationInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
        contact: contactInput.value
    };
    await addPost(newPost);
    location.replace('../');
    // const response = await client.from('vigilante911').insert(newPost);
    // console.log(incidentInput.value, locationInput.value, dateInput.value, descriptionInput.value, contactInput.value);
});