import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('xiphias-product-grid')
export class XiphiasProductGrid extends LitElement {

    constructor() {
        super();
    }

    static styles = css`
        :host {
            display: flex;
            justify-content: center;
        }
        
        .xiphias-product-grid__container {
            padding: 20px;
            max-width: 1600px;
            display: flex;
            flex-shrink: 1;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            gap: 10px;
        }
        
    `;

    render() {
        return html`
            <slot class="xiphias-product-grid__container"></slot>
        `;
    }
}
