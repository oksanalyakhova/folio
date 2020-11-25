<template>
    <div class="topbar">
        <div class="container">
            <div class="topbar-wrap">
                <div class="site-logo">
                    <router-link :to="{name : 'Home'}" class="logo-link">
                          <span class="icon icon-logo">
                              <img :src="`${publicPath}static/img/useful/logo-wh.png`" alt="site logo">
                          </span>
                    </router-link>
                </div>
                <div class="site-links">
                    <router-link :to="{name : 'Home'}" class="topbar-link">
                        <span>Home</span>
                    </router-link>
                    <router-link :to="{name : 'About'}" class="topbar-link">
                        <span>About</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Topbar",
        data() {
            return {
                publicPath: process.env.BASE_URL,
                route: "",
            }
        },
    }
</script>

<style scoped>

</style>
