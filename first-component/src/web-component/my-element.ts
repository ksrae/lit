import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = 'World';

  _onClick() {
    const event = new CustomEvent('button-clicked', {
      detail: this.name,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
  // Render the UI as a function of component state
  render() {
    return html`
      <p>Hellooooo, ${this.name}!</p>
      <button @click=${this._onClick}>Click</button>
    `;
  }
}
