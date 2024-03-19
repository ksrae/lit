import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('has-changed')
class HasChanged extends LitElement {
  @property({
    // only update for odd values of newVal.
    hasChanged(newVal: number, oldVal: number) {
      // const hasChanged: boolean = newVal % 2 == 1;
      // console.log(`${newVal}, ${oldVal}, ${hasChanged}`);
      // return hasChanged;
      return true;
    },
  })
  value: number = 1;

  render() {
    return html`
      <p>${this.value}</p>
      <button @click="${this.getNewVal}">Get new value</button>
    `;
  }

  getNewVal() {
    this.value = Math.floor(Math.random() * 100);
  }
}
