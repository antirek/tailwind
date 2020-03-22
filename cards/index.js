const pug = require('pug');

const visitcard = {
    render: (ele) => {
        return pug.renderFile(__dirname + '/visitcard.pug', ele);
    }
}

const buttons = {
    render: (ele) => {
        return pug.renderFile(__dirname + '/buttons.pug', ele);
    }
}

const elements = [
    {
        type: 'meta',
        title: 'Hello page',
        author: 'Bregan',
        background: 'http://wewrwer.ru/dsfdsf.jpg',
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
    {
        type: 'buttonplace',
        style: 'icons',
        buttons: [
            {
                id: '',
                text: 'Напиши в WhatsApp',
                type: 'whatsapp',
                number: '7836584658'
            },
            {
                id: '',
                text: 'Viber',
                type: 'viber',
                number: '7836584658'
            },
        ],
    },
];

const html = () => {
    let ht = [];
    ht.push(visitcard.render(elements[1]));
    ht.push(buttons.render(elements[2]));
    return ht.join("");
};

module.exports = {
    html,
}