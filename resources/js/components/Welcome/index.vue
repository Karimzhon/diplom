<template>
    <div class="welcome_page">
        <head-page></head-page>
        <p class="page_title">
            Qazaq Tili веб-программасына қош келдіңіз!
        </p>
        <div class="page_desc">
            Бұл веб-программа арқылы сыз қазақ(кириллица) мәтіндерін қазақ(латын) әліппесі бойынша транслитерация
            етуіңіз мүмкін. Файл және суреттерден мәтіндерді алуға болады
        </div>
        <p class="choose_lang_title">Тілді таңдаңыз</p>
        <div class="language">
            <language-switcher v-slot="{ links }" tag="ul" active-class="my-custom-class">
                <li class="lang_select" :class="link.activeClass" v-for="link in links" :key="link.langIndex">
                    <router-link :to="link.url + 'home/'">{{ link.langName }}</router-link>
                </li>
            </language-switcher>
        </div>
    </div>
</template>

<script>
import HeadPage from "../layouts/HeadPageSecond";

export default {
    name: "index",
    components: {
        HeadPage,
    },
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

<style scoped>
.welcome_page {
    height: calc(100vh - 227px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.page_title {
    font-size: 21px;
    font-weight: 600;
}

.page_desc {
    text-align: left;
    color: #43005e;
}
.router-language-switcher {
    display: flex;
}
.lang_select {
    margin-right: 20px;
}
</style>