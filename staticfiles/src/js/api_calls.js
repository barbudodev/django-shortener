import DOM from './DOM';

const urlInput = document.querySelector('#url-input');
const sendBtn = document.querySelector('#send-btn');
const container = document.querySelector('#container');

function getLinkURL(slug) {
    const rootUrl = location.protocol + '//' + location.host + location.pathname;
    return rootUrl + slug + '/'
}

const post = (link_to) => {
    let success;
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
            if (res.status == 201) {
                success = true;
            } else {
                success = false;
            }
            return res.json()
        })
        .then(res => {
            if (success) {
                const slug = res.slug;
                const hrefURL = getLinkURL(slug);
                const msg = DOM.createEl('p', 'Your link: ')
                const anchor = DOM.createAnchor(hrefURL, hrefURL);
                msg.appendChild(anchor);
                container.appendChild(msg);
            } else {
                const msg = DOM.createEl('p', 'please, insert a valid link');
                container.appendChild(msg);
            }
        });
}

sendBtn.addEventListener('click',
    () => {
        const link_to = urlInput.value;
        console.log(link_to)
        post(link_to);
    }
)