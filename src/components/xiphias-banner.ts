import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('xiphias-banner')
export class XiphiasBanner extends LitElement {
    static styles = css`        .banner-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }

        .banner-image {
            width: 100%;
            height: auto;
            object-fit: cover;
        }    `;
    @property({type: String}) imageSrc = '';
    @property({type: String}) altText = '';

    render() {
        return html`
            <div class="banner-container"><img class="banner-image" src="${this.imageSrc}" alt="${this.altText}"/>
            </div>        `;
    }
}