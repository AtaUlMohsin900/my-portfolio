'use client';
import { useEffect } from 'react';

// Utility function to get mouse position
const getMousePos = (e: MouseEvent) => {
    const posx = e.pageX || (e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft);
    const posy = e.pageY || (e.clientY + document.body.scrollTop + document.documentElement.scrollTop);
    return { x: posx, y: posy };
};

// Animation class for hover effects
class HoverImgFx1 {
    DOM: {
        el: HTMLElement;
        reveal: HTMLElement;
        revealInner: HTMLElement;
        revealImg: HTMLElement;
    };

    // Declare the event handler functions with definite assignment assertion
    positionElement!: (ev: MouseEvent) => void;
    mouseenterFn!: (ev: MouseEvent) => void;
    mousemoveFn!: (ev: MouseEvent) => void;
    mouseleaveFn!: () => void;

    constructor(el: HTMLElement) {
        // Initialize the DOM object with all properties
        this.DOM = {
            el,
            reveal: document.createElement('div'),
            revealInner: document.createElement('div'),
            revealImg: document.createElement('div'),
        };

        this.DOM.reveal.className = 'tg-img-reveal-wrapper';
        this.DOM.reveal.style.opacity = '0'; // Initially hidden

        // Set up the inner structure of the reveal image
        this.setupRevealContent();

        this.DOM.el.appendChild(this.DOM.reveal);
        this.initEvents();
    }

    // Create the content for the reveal element
    setupRevealContent() {
        this.DOM.revealInner.className = 'tg-img-reveal-wrapper__inner';

        this.DOM.revealImg.className = 'tg-img-reveal-wrapper__img';
        this.DOM.revealImg.style.backgroundImage = `url(${this.DOM.el.dataset.img})`;

        this.DOM.revealInner.appendChild(this.DOM.revealImg);

        const metaContent = document.createElement('div');
        metaContent.className = 'tg-hover-wrapper';
        metaContent.innerHTML = `
            <ul class="tgbanner__content-meta list-wrap">
                <li><span class="by">By</span> <a href="#">${this.DOM.el.dataset.author || ''}</a></li>
                <li>${this.DOM.el.dataset.date || ''}</li>
            </ul>
            <h3 class="tg-hover-title">${this.DOM.el.dataset.title || ''}</h3>
        `;

        this.DOM.revealImg.appendChild(metaContent);
        this.DOM.reveal.appendChild(this.DOM.revealInner);
    }

    // Initialize event listeners
    initEvents() {
        this.positionElement = (ev: MouseEvent) => {
            const mousePos = getMousePos(ev);
            const docScrolls = {
                left: document.body.scrollLeft + document.documentElement.scrollLeft,
                top: document.body.scrollTop + document.documentElement.scrollTop,
            };
            this.DOM.reveal.style.top = `${mousePos.y + 20 - docScrolls.top}px`;
            this.DOM.reveal.style.left = `${mousePos.x + 20 - docScrolls.left}px`;
        };

        this.mouseenterFn = (ev: MouseEvent) => {
            this.positionElement(ev);
            this.showImage();
        };

        this.mousemoveFn = (ev: MouseEvent) => {
            requestAnimationFrame(() => {
                this.positionElement(ev);
            });
        };

        this.mouseleaveFn = () => {
            this.hideImage();
        };

        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
    }

    // Show the image instantly
    showImage() {
        this.DOM.reveal.style.opacity = '1'; // Show the reveal element
        this.DOM.revealInner.style.transform = 'translateX(0%)'; // Show inner content
        this.DOM.revealImg.style.transform = 'translateX(0%)'; // Show the image
        this.DOM.reveal.style.pointerEvents = 'auto'; // Enable pointer events
    }

    // Hide the image instantly
    hideImage() {
        this.DOM.reveal.style.opacity = '0'; // Hide the reveal element
        this.DOM.revealInner.style.transform = 'translateX(100%)'; // Move inner content out
        this.DOM.revealImg.style.transform = 'translateX(-100%)'; // Move the image out
        this.DOM.reveal.style.pointerEvents = 'none'; // Disable pointer events
    }

    // Clean up event listeners when the instance is destroyed
    destroy() {
        this.DOM.el.removeEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.removeEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.removeEventListener('mouseleave', this.mouseleaveFn);
    }
}

// Usage in a Next.js component
export default function ImageHoverEffect() {
    useEffect(() => {
        const elements = document.querySelectorAll('[data-fx="1"] > .tg-img-reveal-item, .tg-img-reveal-item[data-fx="1"]');
        const hoverEffects = Array.from(elements).map((el) => new HoverImgFx1(el as HTMLElement));

        return () => {
            // Clean up hover effects on unmount
            hoverEffects.forEach(effect => effect.destroy());
        };
    }, []);

    return null;
}
