import { renderPost } from '../fetch-utils.js';

const test = QUnit.test;

const post = {
    id: 1,
    created_at: '2022-02-14T23:45:28+00:00',
    subject: 'Catalytic converter stolen',
    location: 'SE 24th and Ankeny',
    date: 'February 3, 2022 3:45 am',
    description: 'A tweaker stole the catalytic converter from my 2013 VW Passat',
    contact: '(775)741-4886'
};

test('renderPost should return html elements for post', (expect) => {
    const expected = `<div class="post"><h2 class="subject">CATALYTIC CONVERTER STOLEN</h2><h3 class="location">SE 24th and Ankeny</h3><h3 class="date">February 3, 2022 3:45 am</h3><p class="description">A tweaker stole the catalytic converter from my 2013 VW Passat</p><p class="contact">(775)741-4886</p></div>`;

    const actual = renderPost(post);

    expect.equal(actual.outerHTML, expected);
});