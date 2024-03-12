import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createRef, ref, Ref } from 'lit/directives/ref.js';

@customElement('with-ref')
class Withref extends LitElement {
  private buttonRef: Ref<HTMLButtonElement> = createRef();

  firstUpdated() {
    const button = this.buttonRef.value; // button의 타입은 HTMLButtonElement | undefined
    if (button) { // button이 실제로 존재하는지 확인
      button.addEventListener('click', () => {
        console.log('버튼이 클릭되었습니다!');
      });
    }
  }

  render() {
    return html`<button ${ref(this.buttonRef)}>클릭하세요</button>`;
  }
}