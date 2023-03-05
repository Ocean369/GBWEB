const Items = {
    images: [{
        url: 'images/1.jpg',
        title: 'Мельница у реки'
    },
    {
        url: 'images/2.jpg',
        title: 'Горы осенью',
    },
    {
        url: 'images/3.jpg',
        title: 'Деревня летом'
    },
    {
        url: 'images/4.gif',
        title: 'Котик'
    }
    ],
    audio: [
        {
            url: 'audio/1.mp3',
            title: 'Пение птиц'
        },
        {
            url: 'audio/2.mp3',
            title: 'Ручеек в ущелье'
        },
        {
            url: 'audio/3.mp3',
            title: 'Закат в лесу'
        }
    ],
    video: [
        {
            url: 'video/1.mp4',
            title: 'Never Gonna Give You Up'
        },
        {
            url: 'video/2.mp4',
            title: 'Морской прибой'
        }
    ]
};

export default function createCartImages() {
    const mediaBox = document.querySelector('.gallery_mediaBox');
    let textHTML = '';
    for (let type in Items) {
        const count = Items[type].length;
        for (let i = 0; i < count; i++) {
            import(`../media/${Items[type][i].url}`).then((item) => {
                console.log(item.default);
                const div = document.createElement('div');
                div.classList.add('cart');
                mediaBox.insertAdjacentElement('beforeend', div);

                switch (type) {
                    case 'audio':
                        div.insertAdjacentHTML('beforeend', `<div class='cart_audio'>
                        <audio controls src='${item.default}'/>
                        </div>`);
                        div.insertAdjacentHTML('beforeend', `<p>${Items[type][i].title}</p>`)
                        break;
                    case 'video':
                        const video = document.createElement('video');
                        video.src = item.default;
                        video.setAttribute('controls', "controls");
                        div.insertAdjacentElement('beforeend', video);
                        div.insertAdjacentHTML('beforeend', `<p>${Items[type][i].title}</p>`);
                        break;
                    case 'images':
                        const img = new Image();
                        img.src = item.default;
                        img.alt = Items[type][i].title;
                        div.insertAdjacentElement('beforeend', img);
                        div.insertAdjacentHTML('beforeend', `<p>${Items[type][i].title}</p>`);
                }
            })
        }
    }
}