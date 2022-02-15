import { addPost } from '../fetch-utils.js';

const createPostForm = document.getElementById('create-post');
const incidentInput = document.getElementById('incident');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('date');
const descriptionInput = document.getElementById('description');
const contactInput = document.getElementById('contact');

createPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newPost = { 
        subject: incidentInput.value,
        location: locationInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
        contact: contactInput.value
    };
    addPost(newPost);
    // const response = await client.from('vigilante911').insert(newPost);
    // console.log(incidentInput.value, locationInput.value, dateInput.value, descriptionInput.value, contactInput.value);
});