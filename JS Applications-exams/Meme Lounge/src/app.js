import { page, render } from './lib.js';
import { catalogView } from './views/catalog.js';
import { homeView } from './views/home.js';

const main = document.querySelector('main');

page(decorateContext);
page('/', homeView);
page('/memes', catalogView);
page('/memes/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/login', () => console.log('login'));
page('/register', () => console.log('register'));
page('/create', () => console.log('create'));
page('/profile', () => console.log('profile'));

page.start();

function decorateContext(ctx, next) {
  ctx.render = renderMain;
  next();
}

function renderMain(templateResult) {
  render(templateResult, main);
}
