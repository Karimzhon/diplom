<template>
    <div>
        <p class="test_class">{{ $t('Basty bet') }}</p>
        <p class="online_converter">
            {{ $t('online converter') }}
        </p>
        <p v-show="wait_please">Күте тұрыңыз ...</p>
        <div style="display: flex;
justify-content: space-between;align-items: center;">
            <div class="choose_file">
                <div>
                    <label for="photoinput" class="btn">{{ $t('choose photo') }}</label>
                    <input type="file" name="photoinput"
                           accept="image/jpeg, image/png"
                           style="visibility:hidden; width: 100px;"
                           id="photoinput"
                           @change="handleFileChange">
                </div>
            </div>
            <div class="choose_file">
                <div>
                    <label for="inputfile" class="btn">{{ $t('choose file') }}</label>
                    <input type="file" name="inputfile"
                           style="visibility:hidden; width: 100px;"
                           accept=".txt"
                           id="inputfile">
                </div>
            </div>
        </div>
        <div class="search">
            <textarea rows="10" @input="translate(str)" v-model="str"></textarea>
            <div class="result">{{ new_str }}</div>
        </div>
        <div class="online_converter__info">
            {{ $t('online converter info') }}
        </div>

        <alfavit :lang="SiteLang"></alfavit>
    </div>
</template>

<script>
import Alfavit from './alphabit'
const { createWorker } = require('tesseract.js');

export default {
    name: "index",
    components: {
        'alfavit': Alfavit,
    },
    data() {
        return {
            str: '',
            wait_please: false,
            test_text: 'Men Qazaqstanda duniege keldım, Qazaqstan menıñ jüregımde',
            new_str: '',
            vybrano: false,
            langs: {
                'qaz': 'Qazaqsha',
                'kz': 'Қазақша',
            },
        }
    },
    computed: {
        SiteLang() {
            return this.$i18n.locale
        }
    },
    mounted() {
        this.str = '';
        let self = this;
        this.changeVybrano(false, this.str);
        let text = this.SiteLang == 'kz' ? "256 кб-тан кіші файлды таңдаңыз" : "256 kb-tan kışı faildy tañdañyz";
        document.getElementById('inputfile')
            .addEventListener('change', function() {
                console.log(this.files[0])
                if (this.files[0].size > 256000) {
                    alert(text)
                } else {
                    var fr=new FileReader();
                    fr.onload=function(){
                        self.str = fr.result
                        self.translate(self.str)
                    }

                    fr.readAsText(this.files[0]);
                }
            })
    },
    methods: {
        translate(value) {
            this.new_str = this.$func.translate(value, this.SiteLang)
        },
        changeVybrano(bo, val) {
            this.vybrano = bo
            setTimeout(this.translate, 2000, val)
        },
        handleFileChange(e) {
            this.wait_please = true;
            const worker = createWorker({
                logger: m => console.log(m), // Add logger here
            });
            let lang = localStorage.getItem('VueAppLanguage') === 'qaz' ? 'eng' : 'kaz';
            (async () => {
                await worker.load();
                await worker.loadLanguage(lang);
                await worker.initialize(lang);
                const { data: { text } } = await worker.recognize(e.target.files[0]);
                this.str = text;
                this.new_str = this.$func.translate(text, this.SiteLang)
                this.wait_please = false;
                await worker.terminate();
            })();
        }
      }
}
</script>

<style>
.router-language-switcher {
    padding: 10px 20px;
    list-style: none;
    margin: 0;
}

.choose_file {
    width: 148px;
    display: flex;
    align-items: center;
}

p.file_text {
    margin: 0 20px 0 10px;
}

.search {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

.search textarea {
    width: 100%;
    max-width: 700px;
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 5px;
    border-color: #b1b1b1;
}

.result {
    height: max-content;
    min-height: 150px;
    width: 100%;
    max-width: 700px;
    border: 1px solid #b1b1b1;
    padding: 20px;
    border-radius: 5px;
    text-align: left;
}

.search textarea:focus-visible {
    border: 1px solid #0066ff;
    outline: 1px solid #0066ff;
}

.online_converter {
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    color: #018122;
}
.choose_file input {
    display: none;
}
.online_converter__info {
    font-size: 18px;
    line-height: 27px;
    color: #333333;
    margin-top: 30px;

}
</style>