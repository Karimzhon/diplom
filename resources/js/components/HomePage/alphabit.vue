<template>
<div class="alphabit">
    <p class="title">
        {{ $t('qazaqsha alfavit') }}
    </p>
    <div class="alfavit_list">
        <li class="alfavit_item" v-for="(item, key) in new_alphavit" :key="key">
            {{ item.name }}
            <div class="poka_none">
                <span class="play_music" @click="playMuz(item.music)"><img src="/images/sound.svg" style="width: 28px;" alt="X"></span>
            </div>
        </li>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "alphabit",
    props: {
        lang: String
    },
    data() {
        return {
            new_alphavit: [],
        }
    },
    created() {
        this.getAlphavit();
    },
    methods: {
        playMuz(val) {
            const audio = new Audio(val);
            audio.play();
        },
        getAlphavit() {
            axios.get('/api/letters').then(response => {
                this.new_alphavit = response.data.items
            })
        }
    }
}
</script>

<style scoped>
.alfavit_list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
}

.alfavit_item {
    list-style: none;
    width: 80px;
    height: 80px;
    border: 2px solid #41f3f3;
    padding: 5px;
    background: linear-gradient(46deg, #ff34f9eb 0%, #0077FF 120%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #41f3f3;
    font-size: 28px;
    line-height: 28px;
    cursor: pointer;
}

.alfavit_item:hover .poka_none {
    height: 120px;
    width: 120px;
}

.poka_none {
    height: 0;
    width: 0;
    overflow: hidden;
    position: absolute;
    transition: .5s;
    background: linear-gradient(45deg, #0075ff, #85ffd9);
    color: #a30087;
    z-index: 2;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>
