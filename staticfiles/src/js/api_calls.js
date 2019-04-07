import DOM from './DOM';

const inputUrl = document.querySelector('.shortener__input');
const submitBtn = document.querySelector('.shortener__btn');
const container = document.querySelector('#container');
const messagePara = document.querySelector('.message');
const anchor = document.querySelector('.link_to');

function getLinkURL(slug) {
    const rootUrl = location.protocol + '//' + location.host + location.pathname;
    return rootUrl + slug + '/'
}

function addSucessMsg(message, link_to) {
    container.className = 'shortener__message-success';
    messagePara.textContent = message;
    anchor.href = link_to;
    anchor.textContent = link_to;
}

function addErrorMsg(message) {
    container.className = 'shortener__message-error';
    messagePara.textContent = message;
    anchor.href = '';
    anchor.textContent = '';
}

const post = (link_to) => {
    let success, status;
    fetch('http://127.0.0.1:8000/api/shortener/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                link_to: link_to
            })
        })
        .then(res => {
            res.status == 201 ? success= true : success= false;
            return res.json()
        })
        .then(res => {
            if (success) {
                const slug = res.slug;
                const hrefURL = getLinkURL(slug);
                addSucessMsg('shortened successfully!', hrefURL);
            } else {
                addErrorMsg('Please, insert a valid URL');
            }
        });
}

submitBtn.addEventListener('click',
    (e) => {
        e.preventDefault();
        const link_to = inputUrl.value;
        post(link_to);
    }
)