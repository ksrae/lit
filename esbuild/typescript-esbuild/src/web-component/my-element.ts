// import { LitElement, html, css } from 'lit';

// export class MyElement extends LitElement {
//   static styles = css`
//     :host {
//       display: block;
//       padding: 16px;
//       color: var(--my-element-text-color, black);
//     }
//   `;

//   render() {
//     return html`
//       <h1>Hello, World!</h1>
//     `;
//   }
// }

// customElements.define('my-element', MyElement);


import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-element')
class MyElement extends LitElement {
  render() {
    return html`<p>Hello, World!</p>`;
  }
}