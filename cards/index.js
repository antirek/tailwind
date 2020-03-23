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

const questions = {
    render: (ele) => {
        return pug.renderFile(__dirname + '/questions.pug', ele);
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
        type: 'buttons',
        style: 'icons',
        buttons: [
            {
                id: '',
                text: 'Напиши в WhatsApp',
                icon: 'whatsapp',
                url: 'http://www.mobilon.ru/',
                bgColor: 'bg-green-500',
                bgHoverColor: 'bg-green-400',
                textColor: 'text-white',
            },
            {
                id: '',
                text: 'Viber',
                icon: 'viber',
                url: '7836584658',
                bgColor: 'bg-purple-800',
                bgHoverColor: 'bg-purple-600',
                textColor: 'text-white',
            },
            {
                id: '',
                text: 'Telegram',
                icon: 'viber',
                url: '7836584658',
                bgColor: 'bg-blue-500',
                bgHoverColor: 'bg-blue-400',
                textColor: 'text-white',
            },
        ],
    },
    {
        type: 'faq',
        style: 'compact',
        questions: [
            {
                question: 'How do you do?',
                answer: 'All right!',
            },
            {
                question: 'How do you do?',
                answer: 'All right!',
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