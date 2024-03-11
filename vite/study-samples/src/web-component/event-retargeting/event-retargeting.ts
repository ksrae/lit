import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('event-retargeting')
class EventRetargeting extends LitElement {
  // 마치 click event가 있는 것처럼 속이기.
  render() {
    return html`
      <button id="mybutton" @click="${(e: any) => console.log(e.target)}">
        click me
      </button>
      <ul @click="${this.handleEvent}">
        <li><button>Item 1</button></li>
        <li><button>Item 2</button></li>
        <li><button>Item 3</button></li>
      </ul>
      `;
  }
  handleEvent(e: any) {
    console.log('Origin:', e.composedPath()[0]);
  }
}

