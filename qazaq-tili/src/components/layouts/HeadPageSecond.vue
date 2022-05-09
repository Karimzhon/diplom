<template>
    <div class="header_container">
        <header class="container header">
            <img src="/images/Logo800.png" alt="test">
        </header>
    </div>
</template>

<script>

export default {
    name: "HeadPage",
    data() {
        return {
            langs: {
                'qaz': 'Qazaqsha',
                'kz': 'Қазақша',
            }
        }
    },
    computed: {
        SiteLang() {
            console.log('hello')
            return this.$i18n.locale
        }
    },
}
</script>

<style>
.header_container {
    z-index: 9;
    background-color: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 10px 20px 0 #e3e3e3;
    border-bottom: 1px solid #efefef;
}
header {
    max-width: 720px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
}
</style>