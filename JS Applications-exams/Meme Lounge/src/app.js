import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { catalogView } from './views/catalog.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';

const main = document.querySelector('main');

page(decorateContext);
page('/', homeView);
page('/memes', catalogView);
page('/memes/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/login', loginView);
page('/register', () => console.log('register'));
page('/create', () => console.log('create'));
page('/profile', () => console.log('profile'));

updateNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = renderMain;
  ctx.updateNav = updateNav;
  next();
}

function renderMain(templateResult) {
  render(templateResult, main);
}

function updateNav() {
  const userData = getUserData();

  if (userData) {
    document.querySelector('.user').style.display = 'block';
    document.querySelector('.guest').style.display = 'none';
    document.querySelector(
      '.user span'
    ).textContent = `Welcome, ${userData.email}`;
  } else {
    document.querySelector('.user').style.display = 'none';
    document.querySelector('.guest').style.display = 'block';
  }
}
