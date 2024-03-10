import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('named-slot-element')
export class NamedSlotElement extends LitElement {
  
  protected render() {
    return html`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <p>이곳은 공통 콘텐츠 영역입니다.</p>
        <slot name="footer"></slot>
      </div>
    `;
  }
}