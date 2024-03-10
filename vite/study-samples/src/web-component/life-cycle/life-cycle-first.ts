import { LitElement, html, css } from 'lit-element';
import { customElement, property } from 'lit/decorators.js';

@customElement('life-cycle-first')
export class LifeCycleFirst extends LitElement {

  static styles = css`
      :host {
        display: block;
      }
    `;

  @property({
    type: Number,
    hasChanged(newVal: number, oldVal: number) {
      // 1번
      console.log(`hasChanged: ${oldVal} -> ${newVal}`);
      return oldVal !== newVal; // 기본 동작과 동일하지만, 로그 출력을 추가했습니다.
    }
  })
  count = 0;

  
  constructor() {
    super();
  }

  connectedCallback() {
    // 처음 연결될 때만 2번
    super.connectedCallback();
    console.log('connectedCallback');
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    console.log('disconnectedCallback');
  }
  
  // shouldUpdate: 업데이트를 진행할지 결정합니다.
  shouldUpdate(changedProperties: any) {
    // 3번
    console.log('shouldUpdate:', changedProperties);
    return changedProperties.has('count'); // count 속성이 변경되었을 때만 업데이트합니다.
  }

  // willUpdate: 업데이트가 진행되기 직전에 호출됩니다.
  willUpdate(changedProperties: any) {
    // 4번
    console.log('willUpdate:', changedProperties);
  }

  // update: 실제 업데이트 로직을 수행합니다. 대부분의 경우 이 메소드를 직접 사용할 필요는 없습니다.
  update(changedProperties: any) {
    // 5번
    super.update(changedProperties);
    console.log('update:', changedProperties);
  }

  // firstUpdated: 컴포넌트가 처음 업데이트될 때 한 번만 호출됩니다.
  firstUpdated(changedProperties: any) {
    // 처음 값 세팅될 때만 6번
    console.log('firstUpdated:', changedProperties);
  }

  // updated: 업데이트가 완료된 후 호출됩니다.
  updated(changedProperties: any) {
    // 7번
    console.log('updated:', changedProperties);
  }

  render() {
    return html`
      <h1>Count: ${this.count}</h1>
      <button @click="${this.incrementCount}">Increment</button>
    `;
  }

  incrementCount() {
    this.count += 1;
  }
}
