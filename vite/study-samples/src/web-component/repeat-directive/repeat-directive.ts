import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

@customElement('repeat-directive')
class RepeatDirectiveComponent extends LitElement {
  @property({ type: Array }) users: any = [];
  @property({ type: Boolean }) sorted = false;

  constructor() {
    super();
    this.users = [
      { id: 1, name: '김철수', checked: false },
      { id: 2, name: '박영희', checked: false },
      { id: 3, name: '이민준', checked: false }
    ];
    this.sorted = false;
  }

  toggleSort() {
    this.sorted = !this.sorted;
    if (this.sorted) {
      console.log(1);
      this.users = [...this.users.sort((a: any, b: any) => a.name.localeCompare(b.name))];
    } else {
      console.log(2);
      this.users = [...this.users.sort((a: any, b: any) => b.name.localeCompare(a.name))];
    }
     
    
  }

  toggleCheckbox(userId: any) {
    const user = this.users.find((user: any) => user.id === userId);
    if (user) {
      user.checked = !user.checked;
      this.requestUpdate(); // 체크박스 변경 후 업데이트 요청
    }
  }

  render() {
    return html`
      <ul>
        ${repeat(this.users, (user: any) => user.id, (user: any) => html`
          <li>
            <input type="checkbox"
                   ?checked=${user.checked}
                   @click=${() => this.toggleCheckbox(user.id)}>
            ${user.name}
          </li>
        `)}
      </ul>
      <button @click=${this.toggleSort}>목록 정렬</button>
    `;
  }
}