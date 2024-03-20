// vite.config.js multiple files to one
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

const srcDir = path.resolve(__dirname, 'src')
const componentDir = 'components'

fs.readdir(`${srcDir}/${componentDir}`, (err, files) => {
  if (err) {
    console.error(err)
    return
  }

  const tsFiles = files.filter((file) => file.endsWith('.ts'))
  const imports = tsFiles.map((file) => `import './${componentDir}/${file}'`).join('\n')

  fs.writeFile(path.resolve(srcDir, 'main.ts'), imports, (err) => {
    if (err) {
      console.error(err)
    }
  })
})

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'), // 빌드의 엔트리 포인트를 main.ts로 설정
      name: 'MyWebComponents',
      fileName: (format) => `my-components.${format}.js`,
    },
    rollupOptions: {
      // 필요에 따라 설정을 추가하거나 수정합니다.
    },
  },
})
