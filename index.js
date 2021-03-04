import * as fs from 'fs';

const fsExists = async filePath => fs.promises.access(
	filePath,
	fs.constants.F_OK,
).then(() => true, () => false);

export default fsExists;
