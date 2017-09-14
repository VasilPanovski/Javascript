function solve(message) {
    let messagePattern = /^<message((?:\s+[a-z]+="[a-zA-Z0-9.\s]+")*?)>(.*?)<\/message>$/g;

    let groups = messagePattern.exec(message);
    if (!groups) {
        console.log('Invalid message format');
        return;
    }

    let [match, attributes, text] = groups;
    let attrPattern = /\s+([a-z]+)="([A-Za-z0-9 .]+)"\s*?/g;

    let attributeTokens = attrPattern.exec(attributes);

    let senderName, receiverName;
    let hasSenderAttr = false;
    let hasReceiverAttr = false;
    while (attributeTokens) {
        if (attributeTokens[1] === 'to') {
            receiverName = attributeTokens[2];
            hasReceiverAttr = true;
        } else if(attributeTokens[1] === 'from'){
            senderName = attributeTokens[2];
            hasSenderAttr = true
        }
        attributeTokens = attrPattern.exec(attributes)
    }

    if (!hasSenderAttr || !hasReceiverAttr) {
        console.log('Missing attributes');
        return;
    }

    let html = `<article>\n  <div>From: <span class="sender">${senderName}</span></div>\n  <div>To: <span class="recipient">${receiverName}</span></div>\n  <div>\n    <p>${text}</p>\n  </div>\n</article>`
    console.log(html)
}


// solve(`<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>`);
// solve(`<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>`)
solve(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old Let's go out for a beer</message>`);