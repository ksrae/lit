// import { html } from "lit";
// import { ButtonElement } from '../../src/components/button/button';

// describe("Lit mount", () => {
//   it("mounts", () => {
//     cy.mount<"sy-button">(html`<sy-button></sy-button>`);
//     cy.get("sy-button").shadow().contains("button");
//   })
// })


describe('Design System Component Test', () => {
  beforeEach(() => {
    // 테스트할 HTML 페이지의 URL을 입력하세요.
    cy.visit('http://localhost:5173/index.html');
  });

  it('exist button', () => {
    cy.get('sy-button').shadow().contains('submit');

  });
});
