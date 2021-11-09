/**
Returns a promise that resolves to a boolean indicating whether the file exists.

@example
```
import fsExists from 'fs.promises.exists';

await fsExists('./file-that-exists')
// true
```
*/
declare const fsExists: (filePath: string, caseSensitive?: boolean | undefined) => Promise<boolean>;
export = fsExists;
