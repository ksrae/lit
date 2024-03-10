import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('same-name-slot')
export class SameNameSlot extends LitElement {
  // 여러 DOM이 같은 slot name을 가지면 순서대로 출력된다.
  protected render() {
    return html`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}