// 컴포넌트를 정의하기 위해 LitElement와 html 함수, 그리고 customElement 데코레이터를 임포트합니다.
import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

// @customElement 데코레이터를 사용하여 'my-element'라는 이름의 커스텀 엘리먼트를 선언합니다.
@customElement('slot-init')
export class SlotInit extends LitElement {
  // render 메소드를 오버라이드하여 컴포넌트의 HTML 구조를 정의합니다.
  protected render() {
    return html`
      <p>
        <slot></slot> <!-- 사용자 정의 콘텐츠를 삽입할 수 있는 <slot> 태그 -->
      </p>
    `;
  }
}