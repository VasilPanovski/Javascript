function jasonToTable(jsonArr) {
    let html = '<table>\n';
    for (let obj of jsonArr) {
        let currentObj = JSON.parse(obj);
        html += `\t<tr>\n\t\t<td>${htmlEscape(currentObj.name)}</td>\n\t\t<td>${htmlEscape(currentObj.position)}</td>\n\t\t<td>${Number(currentObj.salary)}</td>\n\t<tr>\n`;
    }

    html += '</table>';

    console.log(html);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

jasonToTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);