// app-element.ts 내부
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ThemeContext } from './theme-context';
import { provide } from '@lit/context';

@customElement('theme-provider')
class ThemeProvider extends LitElement {
  @provide({context: ThemeContext})
  @property({attribute: false}) theme: string = 'light'; // 초기 테마 설정

  changeTheme() {
    console.log('changeTheme', this.theme);
    this.theme = this.theme === 'dark' ? 'light' : 'dark'; // theme 상태를 올바르게 변경
  }

  render() {
    return html`
      <button @click=${this.changeTheme}>테마 변경하자</button>
      <theme-consumer></theme-consumer>
    `;
  }
}
