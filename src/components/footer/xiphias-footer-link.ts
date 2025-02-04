import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('xiphias-footer-link')
export class XiphiasFooterLink extends LitElement {
    static styles = css`
        :host {
            display: block;
            padding: 9px 0;
            color: var(--color-text-secondary);
        }

        ul {
            padding-left: 0;
            margin: 0;
        }

        li {
            list-style: none;
        }

        a {
            color: #6c757d;
            text-decoration: none;
            transition: color 0.3s ease;
            display: flex;
            align-items: center;
        }

        a:hover {
            color: var(--color-green);
        }

        a::before {
            
            margin-right: 8px;
            font-size: 18px;
            display: inline-block;
        }

        img {
            margin-right: 8px;
            width: 30px;
            height: 20px;
        }    
    `;

    @property({type: String}) href = '#';
    @property({type: String}) text = '';
    @property({type: String}) icon = '';
    @property({type: String}) image = '';

    updated(changedProperties: Map<string | number | symbol, unknown>): void {
        super.updated(changedProperties);
        if (this.icon) {
            this.style.setProperty('--icon-content', `'${this.icon}'`);
        } else {
            this.style.setProperty('--icon-content', '');
        }
    }

    render() {
        return html`
            <ul>
                <li><a href="${this.href}"> ${this.image ? html`<img src="${this.image}" alt="${this.text}"/>` : ''}
                    ${this.text} </a></li>
            </ul>        `;
    }
}