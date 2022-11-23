import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './PockeApiInitPage-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<pocke-api-init-page></pocke-api-init-page>
```

##styling-doc

@customElement pocke-api-init-page
*/
export class PockeApiInitPage extends LitElement {
  static get is() {
    return 'pocke-api-init-page';
  }

  // Declare properties
  static get properties() {
    return {
      title: { type: String, },
      page: { type: String, }
    };
  }

  // Initialize properties
  constructor() {
    super();
    console.log('hola desde el DM');
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('pocke-api-init-page-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <slot></slot>
      <p>Welcome to ${this.name}</p>
    `;
  }
}
