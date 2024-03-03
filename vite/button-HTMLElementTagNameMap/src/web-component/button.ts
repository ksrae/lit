import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
  `;

  @property()
  name = 'World'; // 기본값 설정

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
      <button @click=${this._onClicked}>Click</button>
    `;
  }

  private _onClicked() {
    const event = new CustomEvent('onclicked', {
      detail: this.name,
      bubbles: true,
      composed: true
    });
    console.log('click event')
    this.dispatchEvent(event);
  }
}
