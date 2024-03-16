import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createRef, ref, Ref } from 'lit/directives/ref.js';

@customElement('with-ref')
class Withref extends LitElement {
  private buttonRef: Ref<HTMLButtonElement> = createRef();
  // 입력 요소에 대한 참조를 저장하기 위한 필드를 선언합니다.
  inputRef: any;

  // queryselector 대신 사용한다.
  firstUpdated() {
    const button = this.buttonRef.value; // button의 타입은 HTMLButtonElement | undefined
    if (button) { // button이 실제로 존재하는지 확인
      button.addEventListener('click', () => {
        console.log('버튼이 클릭되었습니다!');
      });
    }
  }

  render() {
    return html`
      <button ${ref(this.buttonRef)}>클릭하세요</button>
      <div>
        <input type="text" ${ref(this.setInputRef)} />
        <button @click="${this.logInputValue}">로그 출력</button>
      </div>
      `;
  }

  // ref 콜백 함수: 입력 요소의 참조를 inputRef에 저장합니다.
  // 돔 전체를 전달한다. firstUpdated 보다 더 빠르게 정의된다.
  setInputRef(element: any) {
    this.inputRef = element;
  }

  // 버튼 클릭 이벤트 핸들러: 현재 입력 필드의 값을 콘솔에 출력합니다.
  logInputValue() {
    if (this.inputRef) {
      console.log(this.inputRef.value);
    }
  }


}