# index.html
if there is no index.html copy this.

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
npx storybook@latest init

src/stories에 파일 추가
- *.mdx *.stories를 바탕으로 문서를 추가
- *.stories *.ts를 활용하여 문서에 표현할 다양한 조건을 추가.
- *.ts 화면에 표시될 방법을 기술.

tsconfig.json의 설정에서 useDefineForClassField: false 인지 반드시 확인할 것.

package.json
    "storybook": "storybook dev -p 6006", // 자동 등록
    "build-storybook": "storybook build", // 자동 등록
    "storybook-docs": "storybook dev --docs" // 수동 등록, 문서만 보임

# cypress
npm i cypress -D

package.json
    "cypress:open": "cypress open"


