import { ShortenTimePipe } from './elapsed-time.pipe';

describe('ShortenTimePipe', () => {
  it('create an instance', () => {
    const pipe = new ShortenTimePipe();
    expect(pipe).toBeTruthy();
  });
});
