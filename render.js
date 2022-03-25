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