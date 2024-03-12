import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('html-expression')
class Htmlexpression extends LitElement {
  @state() t1 = html`<h1>hello</h1>`;
  @state() t2 = html`<h2>world</h2>`;
  render() {
    return html`${this.t1}${this.t2}`;
  }
}