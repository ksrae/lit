import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
    button:hover {
        color: red;
      }
  `;

  @property({type: String}) value = 'button';
  @property({type: Boolean}) disabled = false;
  @property({type: Boolean}) loading = false;
  @property({type: String}) type = 'default';
  
      

  render() {
    console.log(this.loading);

    return html`
      <button 
        .disabled=${this.disabled} 
        @click=${this._onClicked}>
        ${this.loading ? 'Loading...' : this.value}
      </button>
    `;
  }

  private _onClicked() {
    const event = new CustomEvent('onclicked', {
      detail: this.value,
      bubbles: true,
      composed: true
    });
    console.log('click event')
    this.dispatchEvent(event);
  }
}
