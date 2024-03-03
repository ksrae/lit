lit를 사용하여 web component를 작성하기 위한 기본 세팅을 정의하고 가이드 하기 위한 문서.
사용되는 라이브러리
- lit: web component 작성하기에 가장 최적화 된 라이브러리
- esbuild: webpack보다 최대 100배 빠르고, lit에서 기본 추천하는 rollup 보다도 빠르게 빌드. 정식 버전이 아직 배포가 안되었고, 빌드에만 집중되어 다른 옵션이 많지 않다.
 

# lit - typescript

1. package.json
npm init 으로 package.json 생성한다.
기본으로 작성되어야할 내용은 다음과 같다.
name은 프로젝트의 이름을 따라야 하며, 버전 및 빌드 방식은 상황에 따라 수정될 수 있다.

```
{
  "name": "lit-guide",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "import:ts": "node dynamic-build.js",
    "build": "npm run import:ts && esbuild ./src/main.ts --bundle --minify --target=es2020 --outdir=./dist --format=esm",
    "start": "npm run build && lite-server --baseDir=."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "esbuild": "^0.20.0",
    "lite-server": "^2.6.1",
    "typescript": "^5.3.3"
  },
  "dependencies": {
    "lit": "^3.1.2"
  }
}

```

2. tsconfig.json
typescript를 사용하려면 정의하여야 한다.
기본으로 들어가야할 내용은 다음과 같다.

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
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "allowJs": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```


3. dynamic-build.js 추가
해당 폴더에 들어있는 모든 ts 파일을 하나의 ts로 묶어준다.
이는 여러 web component가 있을 때 이를 일일이 script로 추가해주어야 하는 불편함을 없애고
하나의 파일만 script로 추가해주면 모든 기능을 사용할 수 있도록 하기 위해서 작성되었다.

이 파일의 내용은 main.ts 파일에 모든 내용을 담고 이를 js로 빌드하는 형식이다.

```
const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src');
const componentDir = 'web-component';

fs.readdir(`${srcDir}/${componentDir}`, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const tsFiles = files.filter(file => file.endsWith('.ts'));
  // import './web-component/my-element';
  const imports = tsFiles.map(file => `import './${componentDir}/${file}';`).join('\n');

  console.log('srcDir');
  fs.writeFile(path.resolve(srcDir, 'main.ts'), imports, err => {
    if (err) {
      console.error(err);
    }
  });
});
```

4. index.html 추가
local에서 실행하려면 필요하다. 빌드 자체에는 영향이 없다.(없어야 한다.)

5. web-component 폴더 생성
dynamic-build.js가 web-component 폴더를 강제로 보고 있어서 지금은 반드시 해당 폴더에 파일이 있어야 한다. 
해당 내역을 수정하면 변경될 수 있다.


6. web component 파일 생성
원하는 기능을 작성하여 파일에 저장한다.


7. main.ts 에 web component import
이건 dynamic-build.js가 자동 생성해주므로 별도로 작성하지 않아도 된다. 오히려 강제로 작성해도 빌드할 때 무시한다.

