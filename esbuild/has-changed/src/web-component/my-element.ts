import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  @property({
    type: String,
    hasChanged(newVal: string, oldVal: string) {
      // 새 값과 이전 값이 다를 때만 true를 반환하여 업데이트를 허용합니다.
      return newVal !== oldVal;
    }
  })
  name = '누군가';

  render() {
    return html`
      <p>안녕하세요, ${this.name}님!</p>
      <input type="text" @input="${this.onInput}" placeholder="이름을 입력하세요"/>
    `;
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
}