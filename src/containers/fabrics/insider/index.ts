import { readFileSync, createWriteStream } from 'fs';
import axios from 'axios';
import * as Path from 'path';
import * as fs from 'fs';

async function main(pathname: string, write_folder: string) {
  const str = readFileSync(pathname, 'UTF-8');
  const solid_json: any[] = JSON.parse(str);
  const keys = Object.keys(solid_json);

  for (const key of keys) {
    // @ts-ignore
    for (const item of solid_json[key]) {
      if (!item.img_src.includes('glenraven.net')) {
        continue;
      }

      const path = Path.resolve(__dirname, write_folder, `${item.text.replace(/\//g, '&')}(1000x1000).jpg`);
      if (fs.existsSync(path)) {
        throw Error(`dosya zaten var <-> ${path.toString()}`);
      }
      const writer = createWriteStream(path);
      const response = await axios.get(item.img_src.replace('w=180&q=60', 'w=1000&q=100'), { responseType: 'stream' });
      response.data.pipe(writer);
    }
  }
}

main('./full.json', './images').catch(e => {
  console.log(e);
});
