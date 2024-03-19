import { setLocaleText } from '../../localization';
import { customElement } from 'lit/decorators.js';
import { LitElement, css, html } from 'lit';
import { msg, localized } from '@lit/localize';



@localized()
@customElement('localization-init')
class LocalizationInitElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  constructor() {
    super();
    setLocaleText('ko');
  }
  

  render() {
    return html`
      <p>${msg('Hello, world!')}</p>
      <p>${msg('This is a simple multi-language example.')}</p>
    `;
  }
}
