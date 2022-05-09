<template>
    <div class="header_container">
        <header class="container header">
            <img src="/images/Logo800.png" alt="test">
            <language-switcher
                v-slot="{ links }"
                active-class="router-link-exact-active">
                <div class="lang_dropdown">
                    <div
                        class="language_selected"
                        type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {{ langs[SiteLang] }}
                    </div>
                    <ul class="dropdown-menu language_list" aria-labelledby="dropdownMenuButton1" role="menu">
                        <li v-for="link in links" :key="link.langIndex">
                            <router-link
                                :to="link.url"
                                :class="link.activeClass"
                                exact-active-class=""
                                class="language_item">
                                {{ link.langName }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </language-switcher>
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
            return this.$i18n.locale
        }
    },
}
</script>

<style scoped>
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
