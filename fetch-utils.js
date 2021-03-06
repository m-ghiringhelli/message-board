const SUPABASE_URL = 'https://qurnakdkijnyhcuzbmgb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1cm5ha2RraWpueWhjdXpibWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NDMsImV4cCI6MTk1OTkxNzQ0M30.IltjE-P3qd05gdR8QTQqmRASPhJmLREfwTW5uFWm7c8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function addPost(post) {
    const response = await client.from('vigilante911').insert(post);
    return response.user;
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) location.replace('../signupin');
}

export async function getPosts() {
    const response = await client.from('vigilante911').select('*').order('id', { ascending: true });
    return checkError(response);
}

export async function logout() {
    await client.auth.signOut();
    return window.location.href = '../';
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        console.log('user!');
        location.replace('../create');
    }
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

