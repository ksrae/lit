import { CSSResultGroup, LitElement,css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { parentStyles } from "./css-group";

@customElement('child-component')
export class ChildComponent extends LitElement {
  // 부모 스타일을 상속받고, 추가적인 스타일을 정의
  static styles: CSSResultGroup = [
    parentStyles,
    css`
      p {
        color: red;
      }
    `
  ];


  protected render() {
    return html`
      <p>자식 컴포넌트의 스타일 (부모 스타일 상속)</p>
    `;
  }


}