# fs.promises.exists [![Latest version](https://badgen.net/npm/v/fs.promises.exists)](https://npm.im/fs.promises.exists) [![Monthly downloads](https://badgen.net/npm/dm/fs.promises.exists)](https://npm.im/fs.promises.exists) [![Install size](https://packagephobia.now.sh/badge?p=fs.promises.exists)](https://packagephobia.now.sh/result?p=fs.promises.exists)

The missing `fs.promises.exists()`

<sub>If you like this project, please star it & [follow me](https://github.com/privatenumber) to see what other cool projects I'm working on! ❤️</sub>

## 🙋‍♂️ Why?
Because the [fs Promises API](https://nodejs.org/docs/latest/api/fs.html#fs_promises_api) doesn't have an `exists()` method that replaces [`existsSync()`](https://nodejs.org/docs/latest/api/fs.html#fs_fs_existssync_path).

## 🚀 Install
```sh
npm i fs.promises.exists
```

## 👨🏻‍🏫 Examples
```
import fsExists from 'fs.promises.exists';

await fsExists('./file-that-exists')
// > true

await fsExists('./file-that-doesnt-exist')
// > false
```
