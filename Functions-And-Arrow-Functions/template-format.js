function printXml(tokens) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
    for (let i = 0; i < tokens.length; i+=2) {
        xml += `  <question>\n    ${tokens[i]}\n  </question>\n`;
        xml += `  <answer>\n    ${tokens[i+1]}\n  </answer>\n`;
    }
    xml += '</quiz>';
    console.log(xml);
}

printXml(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);