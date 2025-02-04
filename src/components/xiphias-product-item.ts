import {LitElement, html, css} from "lit";
import {customElement, property} from "lit/decorators.js";

@customElement('xiphias-product-item')
export class XiphiasProductItem extends LitElement {
    constructor() {
        super();
    }

    @property({ type: String, reflect: true }) productImage?: string;
    @property({ type: String, reflect: true }) productTitle?: string;
    @property({ type: String, reflect: true }) productRating?: string;
    @property({ type: String, reflect: true }) productPrice?: string;
    @property({ type: String, reflect: true }) productLink?: string;
    @property({ type: String, reflect: true }) productId?: string;

    static styles = css`
        :host {
            font-family: var(--font-family-primary);
        }
        button {
            all: unset;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--color-button-secondary);
            text-decoration: none;
            font-weight: bold;
            color: var(--color-text-secondary);
            height: 45px;
            width: 80%;
            text-transform: uppercase;
            cursor: pointer;
        }

        button:hover {
            background-color: var(--color-button-primary);
            color: var(--color-white);
        }
        
        .xiphias-product-item__wrapper {
            border: 1px solid var(--color-border);
            border-radius: 3px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .xiphias-product-item__center {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px
        }
        
        .xiphias-product-item__bottom {
            display: flex;
            padding: 10px;
        }

        .xiphias-product-item__counter {
            width: 20%;
            display: flex;
            border: 1px solid var(--color-border);
            justify-content: center;
        }
        
        input {
            all: unset;
            width: 100%;
            padding-left: 15px;
        }
        
        .xiphias-product-item__title {
            
        }
        
        .xiphias-product-item__price {
            color: var(--color-green);
            font-weight: bold;
            font-size: 18px;
        }

        .xiphias-product-item__title {
            font-size: 15px;
            color: var(--color-text-primary);
        }
    `

    render() {
        return html`
            <div class="xiphias-product-item__wrapper">
                <div class="xiphias-product-item__top">
                    <img src="${this.productImage}">
                </div>
                <div class="xiphias-product-item__center">
                    <div class="xiphias-product-item__title">
                        ${this.productTitle}
                    </div>
                    <div class="xiphias-product-item__rating">
                    
                    </div>
                    <div>
                        <div class="xiphias-product-item__price">${this.productPrice}</div>
                    </div>
                </div>
                <div class="xiphias-product-item__bottom">
                    <div class="xiphias-product-item__counter">
                        <input type="number"  value="1">
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
        `
    }
}
