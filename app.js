// import functions and grab DOM elements
import { getPosts, getUser } from './fetch-utils.js';
import { renderPost } from './render.js';
// let state
const postContainer = document.getElementById('post-container');
// set event listeners 
window.addEventListener('load', async () => {
    // console.log('loaded');
    // const post = await getPost(1);
    // console.log(post);
    // console.log(await getPosts());
    const posts = await getPosts();
    for (let post of posts) {
        const postEl = renderPost(post);
        postContainer.append(postEl);
    }
    const user = await getUser();
    if (user) document.getElementById('signin').style.visibility = 'hidden';
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
