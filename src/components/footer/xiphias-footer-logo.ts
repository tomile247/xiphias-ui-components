import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('xiphias-footer-logo')
export class XiphiasFooterLogo extends LitElement {
    static styles = css`        
        .footer-logo {
            display: flex;
            padding-left: 50px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
                
        }
    `;

    @property({type: String}) logoImage = '';

    render() {
        return html`
            <div class="footer-logo">
                <img id="logo-footer" alt="" src="${this.logoImage}"/>
            </div>
        `;
    }
}