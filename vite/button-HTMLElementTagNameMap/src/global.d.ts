// global.d.ts
import { MyButton } from './web-component/button.ts';

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
