import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('slot-content')
class SlotContentComponent extends LitElement {

  render() {
// 슬롯 태그에 slotchange 이벤트 리스너를 추가합니다.
    return html`
      <slot @slotchange="${this.handleSlotChange}"></slot>
    `;
  }

  handleSlotChange(e: any) {
// slotchange 이벤트가 발생한 슬롯을 찾습니다.
    const slot = e.target;
// 슬롯에 할당된 노드들을 가져옵니다.
    const nodes = slot.assignedNodes();
    console.log('슬롯에 할당된 노드들:');
    nodes.forEach((node: any) => {
// 요소 노드일 경우, outerHTML을 통해 전체 HTML을 출력합니다.
      if (node.nodeType === Node.ELEMENT_NODE) {
        console.log('이것은 element입니다.', node.outerHTML);
      } else if (node.nodeType === Node.TEXT_NODE) {
// 텍스트 노드일 경우, nodeValue를 통해 텍스트 내용을 출력합니다.
        console.log('이것은 text 입니다.', node.nodeValue);
      }
    });
  }
}