import fs from 'fs';

const isPathPattern = /^[./]/;

const inArray = (
	array: string[],
	subject: string,
	caseSensitive: boolean,
) => {
	if (caseSensitive) {
		return array.includes(subject) ? subject : false;
	}

	const subjectLowerCase = subject.toLowerCase();
	return array.find(element => element.toLowerCase() === subjectLowerCase);
};

const readdir = (directoryPath: string) => fs.promises.readdir(directoryPath).catch(() => null);

/**
Returns a promise that resolves to a boolean indicating whether the file exists.

@example
```
import fsExists from 'fs.promises.exists';

await fsExists('./file-that-exists')
// true
```
*/

function fsExists(
	filePath: string,
	caseSensitive?: true,
): Promise<boolean>

function fsExists(
	filePath: string,
	caseSensitive: false,
): Promise<string | false>;

async function fsExists(
	filePath: string,
	caseSensitive?: boolean,
) {
	if (caseSensitive === undefined) {
		return await fs.promises.access(filePath).then(
			() => true,
			() => false,
		);
	}

	const filePathSteps = filePath.split('/');
	const validSteps: string[] = [];

	let parentDirectory: string[] | null = null;

	if (!isPathPattern.test(filePath)) {
		parentDirectory = await readdir('.');
	}

	for (let i = 0; i < filePathSteps.length; i += 1) {
		let step = filePathSteps[i];

		if (parentDirectory) {
			const foundInParentDirectory = inArray(parentDirectory, step, caseSensitive);
			if (!foundInParentDirectory) {
				return false;
			}

			step = foundInParentDirectory;
		}

		const checkPath = [...validSteps, step].join('/') || '/';

		// Last step
		if (i === filePathSteps.length - 1) {
			return caseSensitive ? true : checkPath;
		}

		parentDirectory = await readdir(checkPath);
		validSteps.push(step);
	}
}

export default fsExists;
