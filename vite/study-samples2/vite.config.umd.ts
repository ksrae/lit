import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

const srcDir = path.resolve(__dirname, 'src');
const componentDir = path.join(srcDir, 'web-component');
const mainTsPath = path.join(srcDir, 'main.ts');

let imports = '';

// 디렉토리 탐색을 통해 각 .ts 파일을 imports에 추가
fs.readdirSync(componentDir, { withFileTypes: true }).forEach(dir => {
  if (dir.isDirectory()) {
    const files = fs.readdirSync(path.join(componentDir, dir.name));
    files.forEach(file => {
      if (file.endsWith('.ts')) {

        // umd
        // Import 구문 생성
        const importPath = `./web-component/${dir.name}/${file}`;
        imports += `import '${importPath}';\n`;
      }
    });
  }
});

fs.writeFileSync(mainTsPath, imports);


export default defineConfig({
  build: {
    rollupOptions: {
      input: path.resolve(srcDir, 'main.ts'), // 단일 엔트리 포인트 지정
      output: {
        format: 'umd',
        dir: path.resolve(srcDir, '../dist/umd'), // 파일 대신 디렉토리를 지정
        entryFileNames: 'main.umd.js', // 출력 파일 이름 지정
        name: "WebComponent"
      }
    }
  }
});