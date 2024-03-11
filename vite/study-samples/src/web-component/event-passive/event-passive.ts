import {LitElement, html} from 'lit';
import {eventOptions, customElement} from 'lit/decorators.js';

@customElement('event-passive')
class EventPassive extends LitElement {
// @eventOptions를 사용하여 이벤트 옵션 지정
// @eventOptions({passive: true}) 데코레이터를 사용하여 이벤트 리스너에 passive: true 옵션을 지정한 것은, 주로 스크롤 성능 개선과 같은 성능 최적화를 목적으로 합니다. 이 옵션을 사용함으로써 브라우저는 해당 이벤트 리스너가 preventDefault()를 호출하지 않음을 알고, 이벤트 처리를 더 효율적으로 할 수 있습니다.

// 두번째 코드 예제에서는 이러한 옵션을 지정하지 않았기 때문에, 기본적으로 이벤트 리스너는 passive: false로 처리됩니다. 이 경우, 이벤트 리스너 내에서 preventDefault()를 호출할 수 있으며, 이벤트의 기본 동작을 막을 수 있습니다. 하지만, preventDefault() 호출 여부와 관계없이 성능 최적화 측면에서는 첫 번째 코드 예제가 더 우수할 수 있습니다.

// 요약하자면, 성능 최적화를 제외하고 두 코드 사이에는 기능적인 차이는 없습니다. @eventOptions({passive: true}) 데코레이터의 사용 여부는 이벤트 처리 방식의 성능 최적화에 영향을 주지만, 이벤트의 기본 동작을 처리하는 방법 자체에는 변화를 주지 않습니다. 따라서, 선택의 기준은 주로 성능 최적화의 필요성과 해당 이벤트에서 preventDefault()의 사용 여부에 따라 달라질 것입니다.
  @eventOptions({passive: true})
  private _passiveclick(e: any) {
    console.log(e.type);
  }

  private _click(e: any) {
    console.log(e.type);
  }

  render() {
    return html`
      <div @click=${this._passiveclick}>Passive event</div>
      <div @click=${this._click}>Normal event</div>
    `;
  }
}