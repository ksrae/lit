// global.d.ts
// 컴포넌트의 속성에 접근하려면 형식을 정의해야 하는데 querySelector로 가져온 경우 as 로 형을 정의해야 한다.
// let myButton = document.querySelector('my-button') as MyButton;
// 그러나 global.d.ts 에서 정의할 경우 별도의 형 선언 없이 사용할 수 있다.
// global.d.ts를 사용하면 버그를 줄일 수 있고 개발 편의성이 좋아지지만 정의 목록과 개발 목록이 일치해야 한다.

import { MyButton } from './web-component/button/button.js';

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
