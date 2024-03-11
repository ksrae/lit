import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

// my-dispatcher 커스텀 엘리먼트를 정의합니다.
@customElement('event-dispatcher-communication')
class EventDispatcherCommunication extends LitElement {
  // 체크박스 라벨을 위한 프로퍼티
  @property() label = 'Check me!';
  // 기본 메시지
  defaultMessage = '🙂';
  // 메시지를 표시하기 위한 프로퍼티
  @property() message = this.defaultMessage;
  private _resetMessage?: ReturnType<typeof setTimeout>;

  // 컴포넌트의 HTML 구조와 데이터 바인딩을 정의합니다.
  protected render() {
    return html`
      <label><input type="checkbox" @click=${this._tryChange}>${this.label}</label>
      <div>${this.message}</div>
    `;
  }

  // 체크박스 클릭 시 이벤트를 발생시키는 핸들러
  private _tryChange(e: Event) {
    const detail = {message: this.message};
    // checked 이벤트를 생성하고 발송합니다.
    const event = new CustomEvent('checked', {detail, bubbles: true, composed: true, cancelable: true});
    this.dispatchEvent(event);
    // 이벤트의 기본 동작이 방지되었다면
    if (event.defaultPrevented) {
      e.preventDefault();
    }
    // 메시지 업데이트
    this.message = detail.message;
  }

  // 프로퍼티 업데이트 후 호출되는 메소드, 메시지를 초기화합니다.
  protected updated() {
    clearTimeout(this._resetMessage);
    this._resetMessage =
      setTimeout(() => this.message = this.defaultMessage, 1000);
  }
}
