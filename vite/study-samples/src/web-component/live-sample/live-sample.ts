import {html, LitElement} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {live} from 'lit/directives/live.js'; // live 지시어를 임포트합니다.

@customElement('live-sample')
class LiveSample extends LitElement {
  @state()
  private data = {value: 'test'};

  @query('input#value')
  private input!: HTMLInputElement;

  render() {

    return html`
      <h3>live directive example</h3>

      Set this value to the inputs below.<br>
      <input id="value" .value=${this.data.value}>
      <button @click=${this.commitValue}>Commit</button>

      With live: will update if out of sync with last rendered value<br>
      <input .value=${live(this.data.value)} placeholder="type here, click commit">

      Without live: will not update if out of sync with last rendered value<br>
      <input .value=${this.data.value} placeholder="type here, click commit">
    `;
  }

  private commitValue() {
    this.data = {...this.data, value: this.input.value};
  }

}