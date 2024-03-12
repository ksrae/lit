import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {cache} from 'lit/directives/cache.js';

const detailView = (data: any) => html`<div>Detail View: ${data.detail}</div>`;
const summaryView = (data: any) => html`<div>Summary View: ${data.summary}</div>`;

@customElement('template-cache')
class TemplateCache extends LitElement {
  @state() detail: boolean = true;

  // `data` 객체는 `detail`과 `summary` 정보만 포함합니다.
  // `showDetails` 플래그는 더이상 여기에 포함시키지 않습니다.
  @property({type: Object})
  data = {detail: '여기에 상세 내용', summary: '여기에 요약 내용'};

  render() {
    // 직접 `this.detail` 값을 참조하여 조건부 렌더링을 수행합니다.
    return html`
      <button @click="${() => this.detail = !this.detail}">Toggle Details</button>
      ${cache(this.detail
        ? detailView(this.data)
        : summaryView(this.data)
      )}
    `;
  }
}
// cache 디렉티브를 사용하는 경우, 조건이 변경될 때마다 해당 조건에 맞는 HTML 템플릿이 캐싱되고, 이후 같은 조건이 다시 발생하면 캐싱된 내용을 빠르게 재사용합니다. 따라서, 사용자가 버튼을 클릭하여 this.detail의 값이 변경될 때마다 render 함수 내에서 cache 디렉티브에 의해 조건에 맞는 HTML이 선택되어 렌더링됩니다.

// 예를 들어,

// 처음에 this.detail이 true일 때, detailView에 해당하는 HTML이 렌더링되고 캐싱됩니다.
// 사용자가 버튼을 클릭하여 this.detail이 false로 변경되면, 이번에는 summaryView에 해당하는 HTML이 렌더링되고 캐싱됩니다.
// 이후 사용자가 다시 버튼을 클릭해 this.detail을 true로 변경하면, 이전에 캐싱된 detailView의 HTML이 재사용되어 빠르게 렌더링됩니다.
// cache 디렉티브는 이렇게 동적으로 변경되는 컨텐츠를 효율적으로 관리할 수 있게 해주며, 불필요한 렌더링을 줄여 성능을 개선할 수 있습니다. 하지만, 캐싱된 내용이 많아지면 메모리 사용량이 증가할 수 있으므로 적절한 상황에서 사용하는 것이 중요합니다.
