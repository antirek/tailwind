const pug = require('pug');


const visitcard = {
    render: (ele) => {
        return pug.renderFile('visitcard.pug', ele);
    }
}

const elements = [
    {
        type: 'meta',
        title: 'Hello page',
        author: 'Bregan',
        background: 'http://wewrwer.ru/dsfdsf.jpg'
    },
    {
        type: 'visitcard',
        photo: 'http://',
        name: 'Allow',
        contacts: {
            phone: '78978974359',
            phone2: null,
            phone3: null,
            email: 'sddfkdfl;gk@bnbn.ru',
        },
    },
];

const html = visitcard.render(elements[1]);

console.log('html', html);