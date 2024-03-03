lit를 사용하여 web component를 작성하기 위한 기본 세팅을 정의하고 가이드 하기 위한 문서.
사용되는 라이브러리
- lit: web component 작성하기에 가장 최적화 된 라이브러리
- vite: esbuild와 rollup을 활용하여 esbuild의 장점과 local server 또는 es5 지원 등 esbuild의 단점을 보완하였고, 다양한 옵션을 제공한다. 
 




# lit - vite
1. package.json
vite는 자체 로컬 서버 실행이 가능하므로 별도의 라이브러리 설치가 필요 없다.

```
{
  "name": "typescript-vite",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "start": "vite build && vite",
    "dev": "vite",
    "build": "vite build", 
    "serve": "vite preview" 
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.3.3",
    "vite": "^5.1.4"
  },
  "dependencies": {
    "lit": "^3.1.2"
  }
}

```

2. vite.config.js
webpack과 같이 별도의 config.js 파일을 정의해야 한다.
기본적으로 index.html 을 entry point로 잡지만 아래와 같이 특정 파일을 entry로 잡을 경우 library만 빌드가 가능하다.
web component를 빌드할 경우에는 별도의 rollup 옵션을 추가하지 않아도 된다.

```
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/web-component/hello-world.ts'),
      name: 'HelloWorldComponent',
      fileName: (format) => `hello-world.${format}.js`
    }
  }
})
```

3. vite.config.js의 확장
esbuild 때의 dynamic-build.js 의 역할을 별도의 파일 없이 vite.config.js 내에서 작성이 가능하다.
위의 코드를 수정하여 다음과 같이 표현할 수 있다.
```
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

const srcDir = path.resolve(__dirname, 'src')
const componentDir = 'web-component'

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
      fileName: (format) => `my-web-components.${format}.js`,
    },
    rollupOptions: {
      // 필요에 따라 설정을 추가하거나 수정합니다.
    },
  },
})

```

4. tsconfig.json
vite v5 에서는 "isolatedModules", "useDefineForClassFields" 옵션은 반드시 true로 정의하도록 요구하고 있다. types도 정의하도록 하였다.
```
{
  "compilerOptions": {
    "target": "es2020",
    "module": "es2020",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "lib": ["es2022", "dom"],
    "experimentalDecorators": true,
    "sourceMap": false,
    "outDir": "./dist",
    "rootDir": "./src",
    "allowJs": true,
    "isolatedModules": true,
    "useDefineForClassFields": true,
    "types": ["vite/client"]
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```


5. index.html 추가
local에서 실행하려면 필요하다. 빌드 자체에는 영향이 없다.(없어야 한다.)

6. web-component 폴더 생성
dynamic-build.js가 web-component 폴더를 강제로 보고 있어서 지금은 반드시 해당 폴더에 파일이 있어야 한다. 
해당 내역을 수정하면 변경될 수 있다.


7. web component 파일 생성
원하는 기능을 작성하여 파일에 저장한다.


8. local test
실행은 npm start 로 실행하면 빌드와 실행을 연이어 진행한다.