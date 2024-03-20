import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('button-sample')
class TranslateElement extends LitElement {
  render() {
    return html`<button>Sample</button>`;
  }
}