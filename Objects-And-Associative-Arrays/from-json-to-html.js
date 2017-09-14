function jsonToHtml(json) {
    let objects = JSON.parse(json);
    let html = '<table>\n  <tr>';
    let keys = Object.keys(objects[0]);
    for (let key of keys) {
        html += `<th>${key}</th>`;
    }

    html += '</tr>\n';

    for(let obj of objects) {
        html += '  <tr>';
        Object.keys(obj).forEach(k => html += `<td>${htmlEscape(String(obj[k]))}</td>`);
        html += '</tr>\n';
    }

    html += '</table>';

    console.log(html);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

jsonToHtml('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');