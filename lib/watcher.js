import chokidar from 'chokidar';
import run from './run';
import { log } from './utils';

export default function watch(pattern, command) {
  log(`Started watching files with pattern ${pattern}`);
  const w = chokidar.watch(pattern, {
    ignored: /[\/\\]\./,
    persistent: true,
    ignoreInitial: true
  });

  // Something to use when events are received.
  const exec = path => {
    log(`${path} changed`);
    run(command);
  }
  // Add event listeners.
  w.on('add', exec);
  w.on('change', exec);
  w.on('unlink', exec);
}
