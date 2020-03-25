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


const renderers = {
    visitcard,
    buttons,
}

const html = (elements) => {
    let ht = [];
    for (let el of elements) {
        const type = el.type;
        if (renderers[type]) {
            ht.push(renderers[type].render(el));
        }
    }
    // ht.push(visitcard.render(elements[1]));
    // ht.push(buttons.render(elements[2]));
    return ht.join("");
};

module.exports = {
    html,
}