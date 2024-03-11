import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('custom-event')
class CustomEventComponent extends LitElement {
  private _onClicked() {
    const event = new CustomEvent('my-custom-event', {
      detail: {more: {msg: 'fireddddd'}},
      bubbles: true,
      composed: true
    });
    
        // 이벤트 발생시키기
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <button @click="${this._onClicked}">이벤트 발생시키기</button>
    `;
  }
}

