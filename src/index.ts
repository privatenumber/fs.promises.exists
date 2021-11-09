// Necessary CJS style for rollup to convert to ESM
import fs = require('fs');
import path = require('path');

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
): Promise<boolean | string> => {
	if (caseSensitive !== undefined) {
		const directoryPath = path.dirname(filePath);
		const directoryFiles = await fs.promises.readdir(directoryPath);
		const fileName = path.basename(filePath);

		if (caseSensitive) {
			return directoryFiles.includes(fileName);
		}
		const fileNameLowerCase = fileName.toLowerCase();
		const found = directoryFiles.find(name => name.toLowerCase() === fileNameLowerCase);

		return found ? path.join(directoryPath, found) : false;
	}

	return await fs.promises.access(filePath).then(
		() => true,
		() => false,
	);
};

export = fsExists;
