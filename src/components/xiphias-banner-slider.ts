import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@customElement('xiphias-banner-slider')
export class XiphiasBannerSlider extends LitElement {
    static styles = css`
        :host {
            display: block;
            width: 100%;
            max-width: 800px;
            margin: auto;
            overflow: hidden;
        }
        .swiper {
            width: 100%;
            height: 300px;
        }
        .swiper-wrapper {
            display: flex;
        }
        .swiper-slide {
            flex-shrink: 0;
            width: 100%;  /* Ensure it takes full width */
            text-align: center;
            font-size: 20px;
            background: #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `;

    @property({ type: Array })
    slides = ['Slide 1', 'Slide 2', 'Slide 3'];

    firstUpdated() {
        this._initializeSwiper();
    }

    _initializeSwiper() {
        setTimeout(() => {
            const swiperEl: HTMLElement | null = this.renderRoot.querySelector('.swiper');
            if (!swiperEl) return;

            new Swiper(swiperEl, {
                modules: [Navigation, Pagination],
                slidesPerView: 1,
                speed: 400,
                spaceBetween: 10,
                loop: true,
            });
        }, 0);
    }

    render() {
        return html`
            <div class="swiper">
                <div class="swiper-wrapper">
                    ${this.slides.map(slide => html`
                        <div class="swiper-slide">${slide}</div>
                    `)}
                </div>
            </div>
        `;
    }
}
