import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sy-button')
export class ButtonElement extends LitElement {
  static styles = css`
    button {
      padding: 8px 16px;
      font-size: 16px;
      cursor: pointer;
    }
  `;

  @property() value!: string;


  render() {
    return html`
    <button>${this.value}</button>`;
  }
}