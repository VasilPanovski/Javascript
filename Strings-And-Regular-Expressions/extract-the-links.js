function extractTheLinks(input) {
    let links = [];
    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;
    for(let sentence of input) {
        let match = null;
        while(match = regex.exec(sentence)) {
            console.log(match[0]);
        }
    }
}

extractTheLinks(
    'Join WebStars now for free, at www.web-stars.com You can also support our partners: Internet - www.internet.com WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'
)
