export default {
    kz: {
        name: 'Қазақша',
        load: () => {
            return import('./kz.json');
        },
    },
    qaz: {
        name: 'Qazaqsha',
        load: () => {
            return import('./qaz.json');
        },
    },
};