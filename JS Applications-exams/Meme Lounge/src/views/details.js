import { getAllMemes, getMemeById } from '../api/memes.js';
import { html } from '../lib.js';

const detailsTemplate = (meme) => html`
  <section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
      <div class="meme-img">
        <img alt="meme-alt" src=${meme.imageUrl} />
      </div>
      <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${meme.description}</p>

        <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
        <a class="button warning" href="#">Edit</a>
        <button class="button danger">Delete</button>
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {

  const meme = await getMemeById(ctx.params.id);
      ctx.render(detailsTemplate(meme));
}
