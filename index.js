import * as fs from 'fs';

const fsExists = async filePath => fs.promises.access(
	filePath,
).then(() => true, () => false);

export default fsExists;
