import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

const srcDir = path.resolve(__dirname, 'src');
const componentDir = path.join(srcDir, 'web-component');

// 모든 .ts 파일을 찾아서 엔트리 포인트로 설정
const input = {};

// 디렉토리 탐색을 통해 각 .ts 파일을 input 객체에 추가
fs.readdirSync(componentDir, { withFileTypes: true }).forEach(dir => {
  if (dir.isDirectory()) {
    const files = fs.readdirSync(path.join(componentDir, dir.name));
    files.forEach(file => {
      if (file.endsWith('.ts')) {
        const key = `${dir.name}/${file.replace('.ts', '')}`; // 키를 설정 (예: 'button/index')
        input[key] = path.resolve(componentDir, dir.name, file); // 엔트리 포인트 경로 설정
      }
    });
  }
});

export default defineConfig({
  build: {
    rollupOptions: {
      input,
      output: [
        {
          // ES 모듈 형식으로 출력
          format: 'es',
          dir: path.resolve(srcDir, '../dist'),
          entryFileNames: `[name].es.js`,
          chunkFileNames: `[name].es.js`,
          assetFileNames: `[name].es.[ext]`
        },
        {
          // UMD 형식으로 출력
          format: 'umd',
          dir: path.resolve(srcDir, '../dist'),
          entryFileNames: `[name].umd.js`,
          chunkFileNames: `[name].umd.js`,
          assetFileNames: `[name].umd.[ext]`,
          name: "MyWebComponents", // UMD 빌드 시 global 이름 설정
          globals: {
            // vue: 'Vue' // 예시: Vue를 전역 변수로 사용하는 경우
          }
        }
      ]
    }
  }
});