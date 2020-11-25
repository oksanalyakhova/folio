export default class Sizes {
    constructor($el) {
        this.$els = {
            el: $el,
            intViewportHeight: window.innerHeight,
            intViewportWidth: window.innerWidth,
            body: document.querySelector('body'),
            sameIntHeightEls: document.querySelectorAll('.intViewportHeight-js'),
            sameIntWidthEls: document.querySelectorAll('.intViewportWidth-js'),
        };
        this.bindEvents();
    }
    bindEvents() {
        document.addEventListener("readystatechange", () => {
            this.setDefaultSizes();
        });
    }
    setDefaultSizes() {
        this.$els.sameIntHeightEls.forEach(($el) =>  {
            $el.style.height = `${this.$els.intViewportHeight}px`;
            if (this.$els.body.classList.contains('mobile')) {
                $el.style.minHeight = `${this.$els.intViewportWidth}px`;
            }
        })
    }
}
