<template>
    <main id="main" class="site-main">

        <background-text data-textf="Hel" data-texts="lo"></background-text>

        <section id="top" class="hero intViewportHeight-css" v-view="TopAnimation">
            <div class="container">
                <div class="hero__wrap">
                    <h1 class="hero__title">
                        <span class="line text-words">Я Оксана, творчий</span>
                        <span class="line text-words">і відкритий до нового</span>
                        <span class="line text-words">front-end розробник,</span>
                        <span class="line text-words">що любить верстати</span>
                        <span class="line text-words">красиві інтерфейси.</span>
                    </h1>
                    <div class="content__img">
                        <img :src="`${publicPath}static/img/hi.gif`" alt="hi" v-view>
                    </div>
                </div>
            </div>
        </section>

        <section class="projects">
            <project-item :projects="projects"></project-item>
        </section>

        <contact-perspective data-text="Get in touch"></contact-perspective>

    </main>
</template>

<script>
    import "../assets/sass/main.sass";
    import backgroundText from "../components/BackgroundText.vue";
    import projectItem from "../components/ProjectItem.vue";
    import contactPerspective from "../components/ContactPerspective.vue";

    export default {
        name: "AppHome",
        components: {
            "background-text": backgroundText,
            "project-item": projectItem,
            "contact-perspective": contactPerspective
        },
        data() {
            return {
                publicPath: process.env.BASE_URL,
                polling: null,
                projects: [
                    {
                        href: "https://dezzign.com.ua/",
                        name1: "Dezzign",
                        src: "static/img/dezzign.png",
                        alt: "Dezzign"
                    },
                    {
                        href: "https://kyiv.jeep-official.com.ua/",
                        name1: "Jeep",
                        name2: "Kyiv",
                        src: "static/img/jeep.png",
                        alt: "Jeep"
                    },
                    {
                        href: "http://mdclux.peretz.top/",
                        name1: "Medical",
                        name2: "centre",
                        src: "static/img/mdc.png",
                        alt: "Medical"
                    },
                    {
                        href: "http://newmdc-edu.peretz.top/front",
                        name1: "Educational",
                        name2: "centre",
                        src: "static/img/mdcedu.png",
                        alt: "Educational"
                    },
                    {
                        href: "http://peretz.top/nicoj/",
                        name1: "Jewelry",
                        name2: "house",
                        src: "static/img/nicoj.png",
                        alt: "Jewelry"
                    },
                    {
                        href: "https://nicole.com.ua/",
                        name1: "Nicole",
                        src: "static/img/nicole.png",
                        alt: "Nicole"
                    },
                    {
                        href: "http://peretz.top/hot/",
                        name1: "Peretz",
                        name2: "Agency",
                        src: "static/img/peretz.png",
                        alt: "Peretz"
                    },
                    {
                        href: "https://sscompany.com.ua/",
                        name1: "Educational",
                        name2: "company",
                        src: "static/img/ss.png",
                        alt: "Educational"
                    },
                    {
                        href: "https://zalizniytato.org.ua/",
                        name1: "Залізний",
                        name2: "Тато",
                        src: "static/img/tato.png",
                        alt: "Tato"
                    },
                    {
                        href: "http://www.trichologycongress.com.ua/",
                        name1: "UHRS",
                        name2: "Congress",
                        src: "static/img/uhrs.png",
                        alt: "Jeep"
                    },
                    {
                        href: "http://peretz.top/llff/",
                        name1: "Music",
                        name2: "band",
                        src: "static/img/lf.png",
                        alt: "Music"
                    },
                    {
                        href: "https://propalahramota.com.ua/",
                        name1: "Пропала",
                        name2: "грамота",
                        src: "static/img/hramota.png",
                        alt: "Hramota"
                    },
                ]
            }
        },
        methods: {
            TopAnimation(e) {
                let elemText = e.target.element.querySelectorAll(".hero__wrap .word");
                let tl = this.$gsap.timeline({paused: true})
                    .to(elemText, {y: 0, rotation: 0, opacity: 1});
                tl.play();
            }
        }
    };
</script>
