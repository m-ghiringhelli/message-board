// import functions and grab DOM elements
import { getPost } from './fetch-utils.js';
// let state

// set event listeners 
window.addEventListener('load', async () => {
    console.log('loaded');
    const post = await getPost(1);
    console.log(post);
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
