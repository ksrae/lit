import { LitElement, html, css } from "lit";
import { resolvePromise } from "./resolve-promise.directive";
import { customElement, property } from "lit/decorators.js";

function fetchUserProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("사용자 이름: 뤼튼, 취미: 코딩");
    }, 2000); // 2초 후에 프로필 정보를 해결합니다.
  });
}

// ResolvePromise 지시어를 사용하는 컴포넌트
@customElement('async-directive')
class AsyncDirective extends LitElement {
  @property({attribute: false}) userProfile;

  constructor() {
    super();
    this.userProfile = fetchUserProfile(); // 프로미스 저장
  }

  render() {
    return html`
      <p>${resolvePromise(this.userProfile)}</p>
    `;
  }
}