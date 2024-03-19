// Lit 라이브러리에서 필요한 요소들을 임포트합니다.
import {LitElement, html, css} from 'lit';
import {customElement, property, state, query} from 'lit/decorators.js';

// customElement 데코레이터를 사용하여 'mediator-element'라는 태그 이름으로 커스텀 엘리먼트를 정의합니다.
@customElement('mediator-element')
export class MediatorElement extends LitElement {
// 컴포넌트의 스타일을 정의합니다.
  static styles = css`
    :host {
      font-family: sans-serif;
    }
  `;

// 사용자의 이름을 저장하는 속성입니다. 초기값은 'anonymous'입니다.
  @property()
  name = 'anonymous';

// 제출 버튼의 활성화 상태를 관리하는 상태입니다. 초기값은 false입니다.
  @state()
  _submitEnabled = false;

// 입력 필드를 참조하기 위한 쿼리입니다.
  @query('input')
  _input!: HTMLInputElement;

// 입력 필드에 입력이 있을 때마다 호출되는 이벤트 핸들러입니다.
  _inputChanged(e: Event) {
// 입력 필드에 값이 있으면 _submitEnabled를 true로, 그렇지 않으면 false로 설정합니다.
    this._submitEnabled = !!(e.target as HTMLInputElement).value;
  }

// 사용자가 제출 버튼을 클릭했을 때 호출되는 메서드입니다.
  _updateName() {
// 입력 필드의 값을 name 속성에 저장하고 입력 필드를 비웁니다.
    this.name = this._input.value;
    this._input.value = '';
// 제출 후에는 버튼을 다시 비활성화합니다.
    this._submitEnabled = false;
  }

// 컴포넌트의 HTML 구조와 데이터 바인딩을 정의합니다.
  render() {
    return html`<p>Nickname: ${this.name}</p>
        <label>Enter new nickname:
          <input @input=${this._inputChanged}>
        </label>
        <button @click=${this._updateName}
                .disabled=${!this._submitEnabled}>Submit</button>`;
  }
}

