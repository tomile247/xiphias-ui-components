import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('xiphias-blog')
export class XiphiasBlog extends LitElement {

    constructor() {
        super();
    }

    static styles = css`
        :host {
            display: flex;
            justify-content: center;
        }
        
        .xiphias-blog__container {
            max-width: 1600px;
            display: flex;
            flex-shrink: 1;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            gap: 10px;
            padding: 20px;
        }
    `;

    render() {
        return html`
            <slot class="xiphias-blog__container"></slot>
        `;
    }
}
