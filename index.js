import { promises } from 'fs';

const fsExists = async filePath => promises.access(
	filePath,
).then(() => true, () => false);

export default fsExists;
