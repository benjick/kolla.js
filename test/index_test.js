import { parse, log } from '../lib/utils';
import { strictEqual } from 'assert';

describe('The parser function', () => {
  it('knows how to handle shorthand npm script', () => {
    strictEqual(parse(':hello'), 'npm run hello');
    strictEqual(parse('npm run hello'), 'npm run hello');
  });
});
