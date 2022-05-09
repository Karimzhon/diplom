<template>
<div class="alphabit">
    <p class="title">
        {{ $t('qazaqsha alfavit') }}
    </p>
    <div class="alfavit_list">
        <li class="alfavit_item" v-for="(item, key) in alfavit" :key="key">
            {{ item.name }}
            <div class="poka_none">
                <span class="play_music" @click="playMuz(item.music)"><img src="/images/sound.svg" style="width: 28px;" alt="X"></span>
            </div>
        </li>
    </div>
</div>
</template>

<script>
export default {
    name: "alphabit",
    props: {
        lang: String
    },
    data() {
        return {
            alfavit: [
                {
                    name: 'A a',
                    music: '/muz/a.mp3'
                },
                {
                    name: 'Ä ä',
                    music: '/muz/a2.mp3'
                },
                {
                    name: 'B b',
                    music: '/muz/b.mp3'
                },
                {
                    name: 'D d',
                    music: '/muz/d.mp3'
                },
                {
                    name: 'E e',
                    music: '/muz/e.mp3'
                },
                {
                    name: 'F f',
                    music: '/muz/f.mp3'
                },
                {
                    name: 'G g',
                    music: '/muz/g.mp3'
                },
                {
                    name: 'Ğ ğ',
                    music: '/muz/g2.mp3'
                },
                {
                    name: 'H h',
                    music: '/muz/h.mp3'
                },
                {
                    name: 'İ i',
                    music: '/muz/i.mp3'
                },
                {
                    name: 'I ı',
                    music: '/muz/i2.mp3'
                },
                {
                    name: 'J j',
                    music: '/muz/j.mp3'
                },
                {
                    name: 'K k',
                    music: '/muz/k.mp3'
                },
                {
                    name: 'L l',
                    music: '/muz/l.mp3'
                },
                {
                    name: 'M m',
                    music: '/muz/m.mp3'
                },
                {
                    name: 'N n',
                    music: '/muz/n.mp3'
                },
                {
                    name: 'Ñ ñ',
                    music: '/muz/n2.mp3'
                },
                {
                    name: 'O o',
                    music: '/muz/o.mp3'
                },
                {
                    name: 'Ö ö',
                    music: '/muz/o2.mp3'
                },
                {
                    name: 'P p',
                    music: '/muz/p.mp3'
                },
                {
                    name: 'Q q',
                    music: '/muz/q.mp3'
                },
                {
                    name: 'R r',
                    music: '/muz/r.mp3'
                },
                {
                    name: 'S s',
                    music: '/muz/s.mp3'
                },
                {
                    name: 'Ş ş',
                    music: '/muz/s2.mp3'
                },
                {
                    name: 'T t',
                    music: '/muz/t.mp3'
                },
                {
                    name: 'U u',
                    music: '/muz/u.mp3'
                },
                {
                    name: 'Ū ū',
                    music: '/muz/u2.mp3'
                },
                {
                    name: 'Ü ü',
                    music: '/muz/u3.mp3'
                },
                {
                    name: 'V v',
                    music: '/muz/v.mp3'
                },
                {
                    name: 'Y y',
                    music: '/muz/y.mp3'
                },
                {
                    name: 'Z z',
                    music: '/muz/z.mp3'
                }
            ]
        }
    },
    methods: {
        playMuz(val) {
            const audio = new Audio(val);
            audio.play();
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