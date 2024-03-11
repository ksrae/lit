import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('event-delegation')
class EventDelegation extends LitElement {
  @property() clicked = '';
  // @property({attribute: false}) clicked = ''; // 이것도 됨.
  // @state() clicked = ''; // 이것도 됨
  // 모든 내부 변수나 상태가 꼭 @property나 @state를 사용해야 하는 것은 아닙니다. 예를 들어, 컴포넌트 내부에서만 사용되고 UI 업데이트와 관련이 없는 임시 변수나 상수 등은 굳이 이러한 데코레이터를 사용하지 않아도 됩니다. 중요한 것은, UI의 업데이트와 관련된 데이터는 반드시 @property나 @state와 같은 반응형 시스템을 통해 관리되어야 한다는 점입니다.
  // 결론적으로, @property({attribute: false})를 사용하는 것이 잘 작동하는 이유는 해당 속성이 HTML attribute로서의 역할을 하지 않고, 단지 컴포넌트 내부에서 관리되는 상태나 데이터로서 기능하기 때문입니다. DOM에 출력되는 변수들은 반응형 업데이트가 필요한 경우 @property나 @state를 사용하여 정의해야 합니다.

  protected render() {
    return html`
      <div @click="${this._clickHandler}">
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
      </div>
      <p>Clicked: ${this.clicked}</p>
    `;
  }
  private _clickHandler(e: Event) {
    this.clicked = e.target === e.currentTarget ?
      'container' : (e.target as HTMLDivElement).textContent!;
  }
}