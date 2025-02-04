import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('xiphias-footer-end')
export class XiphiasFooterEnd extends LitElement {
    static styles = css` 
        
        :host {
            width: 100%;    
        }
        
        .footer-end {
        width: 100%;
        background-color: #444444;
        color: #a0a0a0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 14px;
        flex-wrap: wrap;
        gap: 10px;
    }

        .footer-end a {
            color: #ededed;
            text-decoration: none;
        }
    `;
    @property({type: String}) poweredByText = 'Powered by';
    @property({type: String}) poweredByUrl = 'https://www.nopcommerce.com/';
    @property({type: String}) designedByText = 'Designed by';
    @property({type: String}) designedByUrl = 'https://www.nop-templates.com/';
    @property({type: String}) copyrightText = 'Copyright © 2023 Bear & Merlin. All rights reserved.';

    render() {
        return html`
            <div class="footer-end">
                <div><span>Powered by </span> <a href="${this.poweredByUrl}">${this.poweredByUrl}</a></div>
                <div><span>Designed by </span> <a href="${this.designedByUrl}">${this.designedByUrl}</a></div>
                <div> ${this.copyrightText}</div>
            </div>    `;
    }
}