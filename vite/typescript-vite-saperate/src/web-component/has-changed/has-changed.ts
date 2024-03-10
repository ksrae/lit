import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('has-changed')
class HasChanged extends LitElement {
  @property({
    type: Number,
    hasChanged(newVal: number, oldVal: number) {
      // 새 값(newVal)이 홀수일 때만 true를 반환합니다.
      console.log('haschanged');
      return newVal % 2 === 1;
    }
  })
  value = 1;

  constructor() {
    super();
  }

  render() {
    return html`
      <p>${this.value}</p>
      <button @click="${this.getNewVal}">Get new value</button>
    `;
  }

  getNewVal() {
    // Math.random()을 사용하여 새 값을 생성하고 할당합니다.
    this.value = Math.floor(Math.random() * 100);
    console.log('this.value', this.value);
  }
}
