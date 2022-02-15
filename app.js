// import functions and grab DOM elements
import { getPost, getPosts } from './fetch-utils.js';
// let state

// set event listeners 
window.addEventListener('load', async () => {
    // console.log('loaded');
    const post = await getPost(1);
    // console.log(post);
    console.log(await getPosts());
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
