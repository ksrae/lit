import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
@customElement('create-render-root')
class CreateRenderRoot extends LitElement {
  @property() hostName = '';
  @property() shadowName = '';
  constructor() {
    super();
    this.addEventListener('click',
      (e: Event) => this.hostName = (e.target as Element).localName);
  }
  protected createRenderRoot() {
    const root = super.createRenderRoot();
    root.addEventListener('click',
      (e: Event) => this.shadowName = (e.target as Element).localName);
    return root;
  }
  private _pclick(e: Event) {
    console.log('p click');
  }
  protected render() {
    return html`
      <p><button>Click Me!</button></p>
      <p>Component target: ${this.hostName}</p>
      <p>Shadow target: ${this.shadowName}</p>
      <p @click=${this._pclick}>Click me!</p>
    `;
  }
}
