<template>
    <div class="sidebar">
        <div class="container">
            <div class="sidebar-wrap">
                <div class="site-socials">
                    <a href="https://www.facebook.com/ftwr.ko?ref=bookmarks" class="socials-link" target="_blank">
                             <span class="name">
                                 fb
                             </span>
                    </a>
                </div>
                <div class="site-contact" v-if="switchBtns">
                    <a href="#" class="contact-link" v-scroll-to="'#contact'">
                             <span class="name">
                                 contact
                             </span>
                    </a>
                </div>
                <div class="site-top" v-else-if="!switchBtns">
                    <a href="#" class="top-link" v-scroll-to="'#top'">
                             <span class="name">
                                 back to top
                             </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                publicPath: process.env.BASE_URL,
                route: "",
                switchBtns: true
            }
        },
      methods: {
        ScrollTopShow() {
          let _this = this;
          window.addEventListener("scroll", function () {
            let scroll = window.scrollY;
            let scrollTrigger = document.querySelector(".contact").offsetTop - window.innerHeight;
            if (scroll > scrollTrigger) {
              _this.switchBtns = false;
            } else {
              _this.switchBtns = true;
            }
          });
        }
      },
      mounted() {
        this.ScrollTopShow();
      },
    }
</script>

<style scoped>

</style>
