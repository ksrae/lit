import { html } from 'lit';
import '../button.element';

export interface ButtonProps {

  value: string;
  // onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export const ButtonText = ({value}: ButtonProps) => {
  return html`
	<sy-button value="${value}"></sy-button>
	
  `;
};
