const express = require('express')
const app = express()
const port = 3000

const cards = require('./cards');

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/index', function (req, res) {
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
      description: 'My head is egg.\nDraw youserlf.',
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

  res.render('index', { data: cards.html(elements)});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))