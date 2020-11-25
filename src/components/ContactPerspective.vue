<template>
    <section id="contact" class="contact intViewportHeight-css" data-textf="Conta" data-texts="ct"
             v-view="LetterAnimate">
        <div class="container">
            <div class="contact__wrap">
                <img class="content__img" :src="`${publicPath}static/img/smile.gif`" alt="smile">
                <h2 class="contact__title contact-perspective">
                    <span class="item"></span>
                    <span class="item"></span>
                    <span class="item"></span>
                    <span class="item"></span>
                    <span class="item"></span>
                    <span class="item"></span>
                    <span class="item"></span>
                    <span class="item"></span>
                    <span class="item"></span>
                    <span class="item"></span>
                </h2>
                <div class="contact__email">
                    <a href="mailto:bisov.point@gmail.com">
                        <span class="line text-words">
                            bisov.point@gmail.com
                        </span>
                    </a>
                </div>
                <div class="contact__phone">
                    <a href="tel:+380674646288">
                        <span class="line text-words">
                             +38 067 46 46 288
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                publicPath: process.env.BASE_URL
            };
        },
        methods: {
            ContactPerspective() {
                let item = document.querySelectorAll(".contact .item");
                let halfX = window.innerWidth / 2;
                let halfY = window.innerHeight / 2;
                this.name = this.$el.getAttribute("data-text");

                item.forEach((el, i) => {
                    el.innerHTML = this.name;
                    this.$gsap.to(el, 1, {z: (i + 8)});
                });

                document.addEventListener("mousemove", (e) => {
                    item.forEach((el, i) => {
                        this.$gsap.to(el, 0.5, {
                            x: (e.clientX - halfX) * (i + 1) * 0.01,
                            y: (e.clientY - halfY) * (i + 1) * 0.01
                        });
                    });
                });
            },
            LetterAnimate(e) {
                let elem = e.target.element.querySelectorAll(".word");
                this.$gsap.to(elem, {y: 0, rotation: 0, opacity: 1});
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.ContactPerspective();
            });
        }
    }
</script>
