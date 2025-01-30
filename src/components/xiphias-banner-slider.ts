import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('xiphias-banner-slider')
export class XiphiasBannerSlider extends LitElement {
    static styles = css`
    :host {
      color: blue;
    }
  `;

    @property()
    name?: string = 'XiphiasBannerSlider';

    render() {
        return html`<p>Hello, ${this.name}!</p>`;
    }
}
