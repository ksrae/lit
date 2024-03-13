describe('Design System Component Test', () => {
  beforeEach(() => {
    // 테스트할 HTML 페이지의 URL을 입력하세요.
    cy.visit('http://localhost:3000/index.html');
  });

  it('exist hello world', () => {
    cy.get('my-element').shadow().find('p').contains('Hello, World!');

  });

  it('exist button with primary class', () => {
    // 'primary' 클래스를 가진 design-system 컴포넌트의 배경색을 검사
    cy.get('design-system.primary')
    
  });

  it('exist button with default class', () => {
    // 'default' 클래스를 가진 design-system 컴포넌트의 배경색을 검사
    cy.get('design-system.default')
  });
});
