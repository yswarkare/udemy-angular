import { readFile } from 'fs/promises';
import path from 'path';

import { dirname } from 'path';

async function readArrayList() {
	const arrListJson = await readFile('./packages/utils/course_modules.json', 'utf-8');
	console.log(arrListJson);
}

readArrayList();
