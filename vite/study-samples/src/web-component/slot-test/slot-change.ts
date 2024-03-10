// 컴포넌트를 정의하기 위해 LitElement와 html 함수, 그리고 customElement 데코레이터를 임포트합니다.
import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

// @customElement 데코레이터를 사용하여 'my-element'라는 이름의 커스텀 엘리먼트를 선언합니다.
@customElement('slot-change')
export class SlotChange extends LitElement {
  handleSlotchange(e: any) {
    const childNodes = e.target.assignedNodes({flatten: true});
    // ... do something with childNodes ...
    const allText = childNodes.map((node: any) => {
      return node.textContent ? node.textContent : ''
    }).join('');

    console.log('slot change event fired:', {allText})
  }
  
  render() {
    return html`<slot @slotchange=${this.handleSlotchange}></slot>`;
  }
}