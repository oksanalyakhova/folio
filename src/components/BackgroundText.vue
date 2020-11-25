<template>
    <div class="background-text">
        <div class="background-text__layer">
            <div class="background-text__body">
                <div class="first">
                    <div class="line text-letters"></div>
                </div>
                <div class="second">
                    <div class="line text-letters"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        methods: {
            BackgroundText() {
                let itemFirst = document.querySelector(".first .line");
                let itemSecond = document.querySelector(".second .line");
                this.nameFirst = this.$el.getAttribute("data-textf");
                this.nameSecond = this.$el.getAttribute("data-texts");
                itemFirst.innerHTML = this.nameFirst;
                itemSecond.innerHTML = this.nameSecond;
            },
            BackgroundTextAnimation() {
                this.textLetter = document.querySelectorAll(".background-text .letter");
                this.textLetter.forEach((el, i) => {
                    setTimeout(function () {
                            el.classList.add("is-shown"),
                                clearTimeout()
                        },
                        300);
                    setTimeout(function () {
                            el.classList.add("is-hided"),
                                clearTimeout()
                        },
                        2e3)
                });
            }
        },
        mounted() {
            this.BackgroundText();
            this.$nextTick(() => {
                this.BackgroundTextAnimation()
            });
        }
    }
</script>
