import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('without-ref')
class WithoutRef extends LitElement {
  firstUpdated() {
    const button = this.shadowRoot?.querySelector('button');
    if(button) {
      button.addEventListener('click', () => {
        console.log('버튼이 클릭되었습니다!');
      });
    }
  }

  render() {
    return html`<button>클릭하세요</button>`;
  }
}
