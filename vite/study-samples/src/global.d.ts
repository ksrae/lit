// global.d.ts
import { MyButton } from './web-component/button/button.js';

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
