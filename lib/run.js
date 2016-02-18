import cp from 'child_process';
import { parse, log } from './utils';

export default function run(cmd) {
  cmd = parse(cmd);
  cmd = cmd.split(" ");
  var proc = cmd.shift();

  var ls = cp.spawn(proc, cmd);

  ls.stdout.on('data', function (data) {
    log('stdout: ' + data);
  });

  ls.stderr.on('data', function (data) {
    log('stderr: ' + data);
  });

  ls.on('error', function (code) {
    log('child process exited in error with code ' + code);
  });
}
