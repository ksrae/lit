# index.html
index.html 은 git에 올라가지 않는다.
if there is no index.html create and copy this.


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My LitElement Project</title>
</head>
<body>
  <script type="module" src="dist/my-components.es.js"></script>
</body>
</html>



# storybook
## install
```
npx storybook@latest init
```

## src/components/[component]/stories에 파일 추가
    - *.mdx *.stories를 바탕으로 문서를 추가
    - *.stories *.ts를 활용하여 문서에 표현할 다양한 조건을 추가.
    - *.ts 화면에 표시될 방법을 기술.

tsconfig.json의 설정에서 useDefineForClassField: false 인지 반드시 확인할 것.

## package.json 설정
    - "storybook": "storybook dev -p 6006", // 자동 등록
    - "build-storybook": "storybook build", // 자동 등록
    - "storybook-docs": "storybook dev --docs" // 수동 등록, 문서만 보임


## 주의사항
    - .storybook은 수정하지 말 것. 수정이 필요한 경우 pull request 할 것. 머지할 때 충돌하므로 주의할 것.
    - 스토리는 반드시 src/component/[component]/stories 폴더에 작성할 것. component 별로 따로 작성할 것.


# cypress
## install
npm i cypress -D


# package.json
    - "cypress:open": "cypress open"


## cypress.config.ts 설정 변경
```
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'src/components/**/cypress/*.cy.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // includeShadowDom: true
  },
});
```

## 주의사항
    - cypress 폴더는 수정하지 말 것. 수정이 필요한 경우 pull request 할 것. 머지할 때 충돌하므로 주의할 것.
    - 테스트는 반드시 src/component/[component]/cypress 폴더에 작성할 것. component 별로 따로 작성할 것.