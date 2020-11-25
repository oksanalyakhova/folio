<template>
    <div class="site-wrapper">
        <topbar/>
        <sidebar/>
        <router-view/>
    </div>
</template>

<script>
    import topbar from './components/global/topbar';
    import sidebar from './components/global/sidebar';

    export default {
        name: 'App',
        components: {
            topbar,
            sidebar
        }
    }
</script>

<style>

</style>
