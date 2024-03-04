// // vite.config.js basic
// import { defineConfig } from 'vite'
// import path from 'path'

// export default defineConfig({
//   build: {
//     outDir: 'dist',
//     lib: {
//       entry: [
//         path.resolve(__dirname, 'src/web-component/hello-world.ts'),
//         path.resolve(__dirname, 'src/web-component/simple-greeting.ts'),
//       ],
//       name: 'HelloWorldComponent',
//       fileName: (format) => `hello-world.${format}.js`
//     }
//   }
// })

// vite.config.js multiple files to one
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

const srcDir = path.resolve(__dirname, 'src')
const componentDir = 'web-component'

fs.readdir(`${srcDir}/${componentDir}`, {withFileTypes: true}, (err, directory) => {
  if (err) {
    console.error(err)
    return
  }

  for(const dir of directory) {
    if(dir.isDirectory()) {
      fs.readdir(`${srcDir}/${componentDir}/${dir.name}`, (err, files) => {
        if (err) {
          console.error(err)
          return
        }
        writeFile(dir.name, files);
        console.log(`Files written to ${srcDir}/main.ts`)
        console.log(`Imported files from ${srcDir}/${componentDir}/${dir.name}`)
        console.log('Done')
        return
        // 추가 작업을 수행할 수 있습니다.
        // 예를 들어, 파일을 정렬하거나 다른 작업을 수행할 수 있습니다.
        // 작업 완료 후 콘솔에 출력할 수도 있습니다
      })
    }
  }
})

function writeFile(dirname, files) {
  const tsFiles = files.filter((file) => file.endsWith('.ts'))
  const imports = tsFiles.map((file) => `import './${componentDir}/${dirname}/${file}'`).join('\n')

  fs.writeFile(path.resolve(srcDir, 'main.ts'), imports, (err) => {
    if (err) {
      console.error(err)
    }
  })
}

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'), // 빌드의 엔트리 포인트를 main.ts로 설정
      name: 'MyWebComponents',
      fileName: (format) => `my-web-components.${format}.js`,
    },
    rollupOptions: {
      // 필요에 따라 설정을 추가하거나 수정합니다.
    },
  },
})
