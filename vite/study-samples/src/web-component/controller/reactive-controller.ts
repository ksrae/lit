import { LitElement, html, css } from 'lit';
import { ReactiveController, ReactiveControllerHost } from 'lit';
import { customElement } from 'lit/decorators.js';

// 컨트롤러 정의
class MyController implements ReactiveController {
  host: ReactiveControllerHost;

  constructor(host: ReactiveControllerHost) {
    // 호스트 컴포넌트 저장
    this.host = host;
    // 컨트롤러를 호스트에 등록
    host.addController(this);
  }

  hostConnected() {
    console.log('컴포넌트가 DOM에 연결되었습니다.');
    // 예: 이벤트 리스너 설정
  }

  hostUpdate() {
    console.log('컴포넌트 업데이트가 시작되기 전입니다.');
    // 예: DOM 읽기
  }

  hostUpdated() {
    console.log('컴포넌트 업데이트가 완료되었습니다.');
    // 예: 업데이트된 DOM 읽기
  }

  hostDisconnected() {
    console.log('컴포넌트가 DOM에서 연결 해제되었습니다.');
    // 예: 이벤트 리스너 제거
  }
}

// LitElement 컴포넌트 정의
@customElement('reactive-controller')
class ReactiveControllerElement extends LitElement {

  constructor() {
    super();
    // 컨트롤러 인스턴스 생성 및 등록
    new MyController(this);
  }

  render() {
    return html`<p>안녕하세요, 리액티브 컨트롤러 예제입니다!</p>`;
  }
}

