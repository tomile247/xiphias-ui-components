import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('xiphias-footer-column')
export class XiphiasFooterColumn extends LitElement {
    static styles = css`        
    
        :host {
            font-family: var(--font-family-primary);
        }
        
        .footer-column {
            flex: 2 1 100px;
            justify-content: center;
            align-items: center;
        }

        .footer-column-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            padding: 0 1.5%;
        }

        .footer-column-title {
            color: var(--color-text-primary);
            margin-bottom: 7px;
            font-size: 14px;
            text-transform: uppercase;
        }

        .footer-links {
            display: flex;
            flex-direction: column;
            padding: 0;
            list-style: none;
            width: 100%;
        }    `;

    render() {
        return html`
            <div class="footer-column">
                <h4 class="footer-column-title">
                    <slot name="title"></slot>
                </h4>
                <ul class="footer-links">
                    <slot></slot>
                </ul>
            </div>        `;
    }
}