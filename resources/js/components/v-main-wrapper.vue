<template>
    <div>
        <head-page></head-page>
        <div class="container">
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
        <foot-page></foot-page>
    </div>
</template>

<script>
import HeadPage from "./layouts/HeadPage";
import FootPage from "./layouts/FootPage";

export default {
    name: "v-main-wrapper",
    components: {
        HeadPage,
        FootPage
    },
    props: {},
    data() {
        return {}
    },
    computed: {}
}
</script>

<style scoped>
.main {
    margin: 100px -12px 35px;
}
</style>