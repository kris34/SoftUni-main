import { get } from './api.js';

export async function getAllMemes() {
  return get('/data/memes?sortBy=_createdOn%20desc');
}
