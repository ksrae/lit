import { consume } from "@lit/context";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ThemeContext } from "./theme-context";

@customElement('theme-consumer')
class ThemeConsumer extends LitElement {
  @consume({context:ThemeContext, subscribe: true}) 
  @property({attribute: false}) public theme11!: string;

  render() {
    return html`<div>Current Theme: ${this.theme11}</div>`;
  }
}
