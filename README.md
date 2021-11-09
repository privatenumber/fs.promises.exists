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
```js
import fsExists from 'fs.promises.exists';

await fsExists('./file-that-exists')
// => true

await fsExists('./file-that-doesnt-exist')
// => false
```

## ⚙️ API

### fsExists(filePath, caseSensitive)

#### filePath
Type: `string`

Required

Path to the file to check the existence of.
#### caseSensitive

Type: `boolean`

Optional

Whether to check the existence of the path case-sensitively.

The default behavior is based on the disk formatting of the environment. Specifically, this is the [HFS+](https://en.wikipedia.org/wiki/HFS_Plus) file system personality.


Most default setups (such as macOS) defaults to being case insensitive. That means checking whether `./does-file-exist` and `./DoEs-FiLe-ExIsT` are equivalent.