import watcher from './watcher';
import { log } from './utils';

if (!module.parent) {
  const pattern = process.argv[2];
  const command = process.argv[3];

  if (!command) {
    throw new Error('Need more params')
  }

  try {
    watcher(pattern, command);
  } catch (e) {
    log(e);
  }
}

export default watcher;
