<template>
    <div class="projects__wrap">
        <div class="project" v-for="project in projects" :key="project.id">
            <a :href="project.href" class="project__link" target="_blank">
                <figure class="project__thumb" v-view.once>
                    <img :src="`${publicPath}` + project.src" :alt="project.alt">
                </figure>
                <h2 class="project__name" v-view.once="LetterAnimate">
                    <span class="line">
                        <span class="word text-letters">
                            {{project.name1}}
                        </span>
                    </span>
                    <span class="line" v-if="project.name2">
                        <span class="word text-letters">
                            {{project.name2}}
                        </span>
                    </span>
                </h2>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['projects'],
        data() {
            return {
                publicPath: process.env.BASE_URL,
            };
        },
        methods: {
            LetterAnimate(e) {
                let elem = e.target.element.querySelectorAll(".word");
                this.$gsap.to(elem, {y: 0, rotation: 0, opacity: 1});
            }
        }
    }
</script>
