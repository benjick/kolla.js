export function parse(cmd) {
  if(cmd.startsWith(":")) {
    cmd = cmd.replace(':', '');
    cmd = 'npm run ' + cmd;
  }
  return cmd;
}

export function log(string) {
  console.log(`🐱  ${string}`);
}
