import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import designSystem from './design-system.json';

@customElement('design-system')
class DesignSystemComponent extends LitElement {
  static styles = css`
    :host(.primary) {
      /* primary 테마 스타일 */
      --button-bg-color: ${unsafeCSS(designSystem.colors.primary)};
      --button-color: ${unsafeCSS(designSystem.colors.onPrimary)};
      --hover: ${unsafeCSS(designSystem.colors.primaryVariant)};
    }
    :host(.default) {
      /* default 테마 스타일 */
      --button-bg-color: ${unsafeCSS(designSystem.colors.default)};
      --button-color: ${unsafeCSS(designSystem.colors.onDefault)};
      --hover: ${unsafeCSS(designSystem.colors.defaultVariant)};
    }
    button {
      background-color: var(--button-bg-color);
      color: var(--button-color);
      padding: 8px 16px;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: var(--hover);
    }
  `;

  render() {
    return html`
      <button>Click me</button>
    `;
  }
}