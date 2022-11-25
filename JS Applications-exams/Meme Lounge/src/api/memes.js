import { get, post } from './api.js';

export async function getAllMemes() {
  return get('/data/memes?sortBy=_createdOn%20desc');
}

export async function createMeme(meme) {
  return post('/data/memes', meme);
}
