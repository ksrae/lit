import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

// my-listener 커스텀 엘리먼트를 정의합니다.
@customElement('my-listener')
class MyListener extends LitElement {
  // 체크 가능 상태를 관리하는 프로퍼티
  @property({type: Boolean}) canCheck = false;

  // 컴포넌트의 HTML 구조와 데이터 바인딩을 정의합니다.
  protected render() {
    return html`
      <p @checked=${this._checkedHandler}><slot></slot></p>
      <hr>
      <p>${this.canCheck ? 'Allowing' : 'Preventing'} check</p>
      <p><button @click=${this._clickHandler}>Toggle</button></p>`;
  }

  // checked 이벤트를 처리하는 핸들러
  // 여기가 핵심이다. slot에서 넘어온 emitter를 받아서 fired를 e.preventDefault()로 막고, event에 직접 값을 집어 넣을 수 있다니 !!
  private _checkedHandler(e: CustomEvent) {
    // canCheck 상태에 따라 체크를 방지하거나 허용합니다.
    if (!this.canCheck) {
      e.preventDefault();
      e.detail.message = '✅ Prevented!!';
    }
  }

  // 체크 가능 상태를 토글하는 버튼의 클릭 핸들러
  private _clickHandler() {
    this.canCheck = !this.canCheck;
  }
}
