# kolla.js 👀

Watch files and trigger actions. Uses [chokidar](https://github.com/paulmillr/chokidar) to watch the filesystem.

## Install

`npm install --save-dev kolla`

## Usage

### CLI

`kolla` takes two arguments. The first one is a glob, file or dir. The second one is the command to be executed on file change. If you put a `:` before the command it will execute the npm script with the same name.

## Example

> package.json

```json
"scripts": {
  "lint": "eslint .",
  "lint:watch": "kolla '**/*.js' :lint",
  "test:elm": "elm-test test/TestRunner.elm",
  "test:elm:watch": "kolla '**/*.elm' :test:elm",
  "crazy": "kolla '**/*' 'echo hello!'"
}
```
