const letters_kz = {
    'а': 'a', 'А': 'A', 'ә': 'ä', 'Ә': 'Ä', 'б': 'b', 'Б': 'B', 'в': 'v', 'В': 'V', 'г': 'g', 'Г': 'G', 'ғ': 'ğ',
    'Ғ': 'Ğ', 'д': 'd', 'Д': 'D', 'е': 'e', 'Е': 'E', 'ж': 'j', 'Ж': 'J', 'з': 'z', 'З': 'Z', 'и': 'i', 'И': 'I',
    'і': 'ı', 'І': 'I', 'й': 'i', 'Й': 'I', 'к': 'k', 'К': 'K', 'қ': 'q', 'Қ': 'Q', 'л': 'l', 'Л': 'L', 'м': 'm',
    'М': 'M', 'н': 'n', 'Н': 'N', 'ң': 'ñ', 'Ң': 'Ñ', 'о': 'o', 'О': 'O', 'ө': 'ö', 'Ө': 'Ö', 'п': 'p', 'П': 'P',
    'р': 'r', 'Р': 'R', 'с': 's', 'С': 'S', 'т': 't', 'Т': 'T', 'у': 'u', 'У': 'U', 'ү': 'ü', 'Ү': 'Ü', 'ұ': 'ū',
    'Ұ': 'Ū', 'ф': 'f', 'Ф': 'F', 'х': 'x', 'Х': 'X', 'һ': 'h', 'Һ': 'H', 'ч': 'ch', 'Ч': 'ch', 'ш': 'ş', 'Ш': 'Ş',
    'ю': 'iu', 'э': 'e', 'Э': 'E', 'Ю': 'İu', 'я': 'ia', 'Я': 'İa', 'ы': 'y', 'Ы': 'Y', ' ': ' '
};
export const func = {
    translate: (data, key) => {
        let split = data.split('');
        let new_str_array = [];
        if (key === 'kz') {
            for (let i = 0; i < split.length; i++) {
                new_str_array[i] = letters_kz[split[i]] ?? split[i]
            }
        } else {
            for (let i = 0; i < split.length; i++) {
                for (let j in letters_kz) {
                    if (split[i] === letters_kz[j]) {
                        new_str_array[i] = j
                        break
                    }
                    else {
                        new_str_array[i] = split[i]
                    }
                }
            }
        }
        return new_str_array.join('')
    }
}
