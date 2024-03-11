import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

class MyCustomEvent extends Event {
  constructor() {
    super('my-standard-event', {
      bubbles: true, // 버블링을 허용
      composed: true // 쉐도우 DOM 경계를 넘어서 전파
    });
    // 추가적인 커스텀 데이터나 메소드를 여기에 정의할 수 있습니다.
  }
}

@customElement('standard-event')
class StandardEvent extends LitElement {
  fireEvent() {
    // MyCustomEvent 인스턴스 생성
    const event = new MyCustomEvent();
    // 이벤트 발생시키기
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <button @click="${this.fireEvent}">이벤트 발생시키기</button>
    `;
  }
}

