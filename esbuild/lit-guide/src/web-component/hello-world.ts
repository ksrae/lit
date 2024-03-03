import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('hello-world')
class HelloWorld extends LitElement {
  render() {
    return html`<p>Hello, World!</p>`;
  }
}