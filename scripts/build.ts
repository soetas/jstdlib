import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readdir, stat } from 'node:fs/promises'
import { type RollupOptions} from 'rollup'

const ROOT_PATH = resolve(fileURLToPath(import.meta.url), '..', '..')

async function startBuild() {
  const subDirs = await readdir(resolve(ROOT_PATH, 'lib'))
  const modules:string[] = []

  for(let i = 0; i < subDirs.length; i++) {
    const dir = subDirs[i]
    if((await stat(resolve(ROOT_PATH, `lib/${dir}`))).isDirectory()) {
      modules.push(dir)
    }
  }

  

}

startBuild()
