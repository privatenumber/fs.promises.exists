// Necessary for rollup to convert to ESM
const fs = require('fs'); // eslint-disable-line @typescript-eslint/no-var-requires
const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

/**
Returns a promise that resolves to a boolean indicating whether the file exists.

@example
```
import fsExists from 'fs.promises.exists';

await fsExists('./file-that-exists')
// true
```
*/
const fsExists = async (
	filePath: string,
	caseSensitive?: boolean,
): Promise<boolean> => {
	if (caseSensitive) {
		const directoryFiles = await fs.promises.readdir(path.dirname(filePath));
		return directoryFiles.includes(path.basename(filePath));
	}

	return fs.promises.access(filePath).then(
		() => true,
		() => false,
	);
};

export = fsExists;
