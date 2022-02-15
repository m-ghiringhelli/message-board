const SUPABASE_URL = 'https://qurnakdkijnyhcuzbmgb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1cm5ha2RraWpueWhjdXpibWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NDMsImV4cCI6MTk1OTkxNzQ0M30.IltjE-P3qd05gdR8QTQqmRASPhJmLREfwTW5uFWm7c8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPosts() {
    const response = await client.from('vigilante911').select('*').order('id', { ascending: true });
    return checkError(response);
}

export async function signUpUser(email, password) {
    const newUser = { email, password };
    const response = await client.auth.signUp(newUser);
    return response.user;
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export function renderPost(post) {
    const div = document.createElement('div');
    div.classList = 'post';
    const h2 = document.createElement('h2');
    h2.classList = 'subject';
    h2.textContent = post.subject.toUpperCase();
    const h3 = document.createElement('h3');
    h3.classList = 'location';
    h3.textContent = post.location;
    const h3too = document.createElement('h3');
    h3too.classList = 'date';
    h3too.textContent = post.date;
    const p = document.createElement('p');
    p.classList = 'description';
    p.textContent = post.description;
    const p2 = document.createElement('p');
    p2.classList = 'contact';
    p2.textContent = post.contact;
    div.append(h2, h3, h3too, p, p2);
    return div;
}