import fs from 'fs';
import path from 'path';
import { renderToHTMLStirng } from './render';

const html = renderToHTMLStirng();

async function writeFile(file: string, data: string): Promise<void> {
    await fs.promises.mkdir(path.dirname(file), { recursive: true });
    fs.promises.writeFile(file, data);
}

writeFile(path.resolve(__dirname, '../../public/index.html'), html);
