import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import buttonStyles from './button.styles';
import componentStyles from '../../styles/components.style';

@customElement('sy-button')
export class ButtonElement extends LitElement {
  static styles: CSSResultGroup = [componentStyles, buttonStyles];

  @property() type!: 'primary' | 'default'
  @property() value!: string;

  render() {
    return html`
    <button class=${this.type}>
      <slot name="prefix"></slot>
      <slot></slot>
    </button>`;
  }
}