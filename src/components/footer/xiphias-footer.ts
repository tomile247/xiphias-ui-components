import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('xiphias-footer')
export class XiphiasFooter extends LitElement {

    constructor() {
        super();
    }

    static styles = css`
        :host {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            font-family: var(--font-family-primary);
        }
        
        .xiphias-footer__container {
            border-top: 2px solid var(--color-border);
            max-width: 1600px;
            display: flex;
            flex-shrink: 1;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            column-gap: 100px;
            row-gap: 20px;
            padding: 20px;
        }
    `;

    render() {
        return html`
            <slot class="xiphias-footer__container"></slot>
        `;
    }
}
