import { CSSResultGroup, LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { parentStyles } from "./css-group";

@customElement('parent-component')
export class ParentComponent extends LitElement {
  static styles: CSSResultGroup = parentStyles;

  protected render() {
    return html`
      <p>부모 컴포넌트의 스타일</p>
    `;
  }
}
