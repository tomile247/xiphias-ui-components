import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('xiphias-blog-post')
export class XiphiasBlogPost extends LitElement {

    constructor() {
        super();
    }

    @property({ type: String, reflect: true }) blogImage?: string;
    @property({ type: String, reflect: true }) blogDate?: string;
    @property({ type: String, reflect: true }) blogTitle?: string;
    @property({ type: String, reflect: true }) blogDescription?: string;
    @property({ type: String, reflect: true }) blogLink?: string;
    static styles = css`
        :host {
            display: flex;
            flex-basis: auto;
            flex-grow: 1;
            flex-shrink: 1;
            font-family: var(--font-family-primary);
        }
        
        .xiphias-blog-post__wrapper {
            border: 1px solid var(--color-border);
            border-radius: 25px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            padding: 16px;
            cursor: pointer;
        }

        .xiphias-blog-post__wrapper:hover {
            opacity: 0.7;
        }

        .xiphias-blog-post__date {
            color: var(--color-green);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
        }
        
        .button {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--color-main);
            text-decoration: none;
            font-weight: bold;
            color: var(--color-white);
            height: 45px;
        }
        
        .xiphias-blog-post__image {
            width: 100%;
            height: auto;
            object-fit: cover;
        }

        .xiphias-blog-post__title {
            color: var(--color-text-primary);
            font-size: 25px;
            text-align: center;
        }
        
        .xiphias-blog-post__description {
            color: var(--color-text-secondary);
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        
    `;

    render() {
        return html`
            <div class="xiphias-blog-post__wrapper">
                <img class="xiphias-blog-post__image" src="${this.blogImage}">
                <p class="xiphias-blog-post__date">${this.blogDate}</p>
                <p class="xiphias-blog-post__title">${this.blogTitle}</p>
                <p class="xiphias-blog-post__description">${this.blogDescription}</p>
                <a class="button" href="${this.blogLink}">READ MORE</a>
            </div>
        `;
    }
}
