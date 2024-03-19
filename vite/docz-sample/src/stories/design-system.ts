import { html } from 'lit';
import '../web-component/design-system/design-system'

export interface DesignSystemProps {

  className: 'primary' | 'default'
  onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export const DesignSystem = ({className}: DesignSystemProps) => {
	console.log(className);

  return html`
	<design-system class="${className}"></design-system>
	
  `;
};
