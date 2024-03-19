import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { translate, registerTranslateConfig, use } from 'lit-translate';

// 번역 파일 로딩 함수
async function loadLocale(locale: string) {
  const response = await import(`../locales/${locale}.json`);
  return response.default;
}

// 번역 설정 등록
registerTranslateConfig({
  loader: loadLocale,
});

@customElement('lit-translate')
class TranslateElement extends LitElement {
  static styles = css`/* 스타일 정의 */`;

	@state() count = 0;

	async connectedCallback() {
		super.connectedCallback();
		await use('ko'); // 초기 언어 설정
	}


  render() {
    return html`
      <div>
        <p>${translate('hello')}</p>
        <p>${translate('welcome')}</p>
        <button @click="${() => this.changeLocale('en')}">English</button>
        <button @click="${() => this.changeLocale('ko')}">한국어</button>
      </div>
    `;
  }

  changeLocale(locale: any) {
    use(locale);
  }
}