import { page, render } from './lib.js';

page('/', () => console.log('home'));
page('/memes', () => console.log('catalog'));
page('/memes/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/login', () => console.log('login'));
page('/register', () => console.log('register'));
page('/create', () => console.log('create'));
page('/profile', () => console.log('profile'));

page.start();
