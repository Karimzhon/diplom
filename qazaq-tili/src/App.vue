<template>
    <div id="app">
        <v-main-wrapper/>
    </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper';

export default {
    components: {vMainWrapper},
    name: 'App',
    data() {
        return {}
    },
    methods: {}
}
</script>

<style scoped>
#app {
    max-width: 720px;
    margin: auto;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
