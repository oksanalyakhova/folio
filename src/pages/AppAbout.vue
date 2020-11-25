<template>
    <main id="main" class="site-about">

        <background-text data-textf="Abo" data-texts="ut"></background-text>

        <section id="top" class="about-hero intViewportHeight-css">
            <div class="container">
                <div class="about-hero__wrap">
                    <h1 class="about-hero__title">
                        <span class="line" ref="line1">Hi you.</span>
                        <span class="line" ref="line2">It's me.</span>
                    </h1>
                </div>
            </div>
        </section>

        <section class="about" v-view>
            <div class="container">
                <div class="about__wrap">
                    <div class="content__img" v-view.once>
                        <img :src="`${publicPath}static/img/000030.jpg`" alt="me">
                    </div>
                    <div class="about__text" v-view.once="TextAnimate">
                        <div class="line">
                            <p>
                                Я верстаю комерційні сайти більше двох років. Це чудова професія для візуалів, яка
                                постійно розвивається і дає можливість щораз учитися чомусь новому - власне, через це я
                                дуже люблю свою роботу.
                            </p>
                        </div>
                        <div class="line">
                            <p>
                                Коли я не працюю і не залипаю на красиві сайти, то здебільшого гуляю, займаюсь спортом,
                                готую, читаю книги, п'ю каву. Я люблю відвідувати музеї, дивитися фільми Веса Андерсона
                                та Квентіна Тарантіно і слухати круту українську музику.
                            </p>
                        </div>
                        <div class="line">
                            <p>
                                Уважна, відповідальна, неконфліктна, вмію працювати в команді, маю досвід роботи з чужим
                                кодом)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="direction" class="skills">
            <div class="container">
                <div class="skills__wrap">
                    <h2 class="skills__title">
                        SKILLS & STACK:
                    </h2>
                    <div class="skills__text">
                        <div class="skill" v-for="skill in skills" :key="skill.id" v-view.once="SkillAnimate">
                            <span>{{skill.name}} {{skill.name}}</span>
                            <span>{{skill.name}} {{skill.name}}</span>
                            <span>{{skill.name}} {{skill.name}}</span>
                            <span>{{skill.name}} {{skill.name}}</span>
                            <span>{{skill.name}} {{skill.name}}</span>
                            <span>{{skill.name}} {{skill.name}}</span>
                            <span>{{skill.name}} {{skill.name}}</span>
                        </div>
                    </div>
                    <h2 class="skills__subtitle">
                        <span class="subtitle__item">
                            Я вивчаю
                            <span class="subtitle-list">
                                <span class="subtitle-list__item">VUE.JS,</span>
                                <span class="subtitle-list__item">VUE.JS,</span>
                                <span class="subtitle-list__item">VUE.JS,</span>
                                <span class="subtitle-list__item">VUE.JS,</span>
                                <span class="subtitle-list__item">VUE.JS,</span>
                                <span class="subtitle-list__item">VUE.JS,</span>
                            </span>
                        </span>
                        <span class="subtitle__item">
                            і це портфоліо зроблене з його допомогою.
                        </span>
                    </h2>
                </div>
            </div>
        </section>

        <contact-perspective data-text="Let`s співпрацювати"></contact-perspective>

    </main>
</template>

<script>
    import "../assets/sass/about.sass";
    import backgroundText from "../components/BackgroundText.vue";
    import contactPerspective from "../components/ContactPerspective.vue";



import ScrollMagic from "scrollmagic";

    export default {
        name: "AppMedium",
        components: {
            "background-text": backgroundText,
            "contact-perspective": contactPerspective
        },
        data() {
            return {
                publicPath: process.env.BASE_URL,
                skills: [
                    {
                        name: "HTML5/CSS3"
                    },
                    {
                        name: "JS/JQuery"
                    },
                    {
                        name: "SASS/SCSS/BEM"
                    },
                    {
                        name: "Gulp/Webpack"
                    },
                    {
                        name: "npm/yarn"
                    },
                    {
                        name: "Laravel"
                    },
                    {
                        name: "Git"
                    }
                ]
            }
        },
        methods: {
            HeroAnimation() {
                let _this = this;
                window.addEventListener("scroll", function () {
                    if (window.scrollY > 0 && window.scrollY < window.innerHeight) {
                        let percentage = Math.round((window.scrollY * 100 / window.innerHeight) * 1.4);
                        _this.$gsap.to(_this.$refs.line1, {
                            duration: 2,
                            x: `-${percentage}` + "%",
                            ease: "expo.out"
                        });
                        _this.$gsap.to(_this.$refs.line2, {
                            duration: 2,
                            x: `${percentage}` + "%",
                            ease: "expo.out"
                        });
                    }
                })
            },
            TextAnimate(e) {
                let elem = e.target.element.querySelectorAll("p");
                this.$gsap.to(elem, {y: 0, rotation: 0, opacity: 1, stagger: 0.5});
            },
            SkillAnimate(e) {
                let elem = e.target.element.querySelectorAll("span");
                this.$gsap.to(elem, {y: 0, opacity: 1});
            },
            HeroText() {
                if (!this.$root.isMobile) {
                    this.$refs.line1.innerHTML = "Hi, it's about me.";
                    this.$refs.line2.innerHTML = "Let me introduce myself.";
                }
            },
        },
        mounted() {
            this.HeroAnimation();
            this.HeroText();
        }
    };
</script>
