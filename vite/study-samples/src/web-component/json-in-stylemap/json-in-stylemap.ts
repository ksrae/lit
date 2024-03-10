import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { styleMap } from 'lit-html/directives/style-map.js';
import jsonStyle from './style.json';

@customElement('json-in-css')
export class JsoninCSSComponent extends LitElement {
  render() {
    return html`
      <button style=${styleMap(jsonStyle)}>버튼이야</button>
    `
  }
}
