import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import { dir } from 'console'

const srcDir = path.resolve(__dirname, 'src')
const componentDir = 'web-component'


let allImports = ''; // 모든 import 문을 저장할 변수

function addImportsFromDirectory(startPath, relativePath = '') {
  const entries = fs.readdirSync(startPath, {withFileTypes: true});

  entries.forEach(entry => {
    if (entry.isDirectory()) {
      addImportsFromDirectory(path.join(startPath, entry.name), path.join(relativePath, entry.name)); // 하위 폴더 탐색
    } else if (entry.name.endsWith('.ts')) {
      allImports += `import './${path.join(relativePath, entry.name).replace(/\\/g, '/')}'\n`; // 윈도우에서 경로 구분자 처리하기 위해 replace 사용
    }
  });
}

// 초기 디렉토리 설정 후 재귀 함수 호출
addImportsFromDirectory(path.join(srcDir, componentDir), componentDir);

// 모든 import 문이 추가된 후에 파일에 한 번에 쓴다.
fs.writeFileSync(path.resolve(srcDir, 'main.ts'), allImports);
console.log(`Files written to ${srcDir}/main.ts`);


// const dirs = fs.readdirSync(`${srcDir}/${componentDir}`, {withFileTypes: true})
//   .filter(dir => dir.isDirectory())
//   .map(dir => dir.name)

//   let allImports = ''; // 모든 import 문을 저장할 변수

// dirs.forEach(dir => {
//   const files = fs.readdirSync(`${srcDir}/${componentDir}/${dir}`)
//   const tsFiles = files.filter(file => file.endsWith('.ts'))
//   const imports = tsFiles.map(file => `import './${componentDir}/${dir}/${file}'`).join('\n')
//   allImports += imports + '\n'; // 각 디렉토리의 import 문을 allImports에 추가
// })

// // 모든 import 문이 추가된 후에 파일에 한 번에 쓴다.
// fs.writeFileSync(path.resolve(srcDir, 'main.ts'), allImports)
// console.log(`Files written to ${srcDir}/main.ts`)


export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'MyWebComponents',
      fileName: (format) => `my-web-components.${format}.js`,
    },
    rollupOptions: {
      
      // 필요에 따라 설정을 추가하거나 수정합니다.
    },
  },
})
