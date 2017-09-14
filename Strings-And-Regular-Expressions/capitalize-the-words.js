function capitalizeTheWords(string) {
    return string.replace(/\w\S*/g, function(string){return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();})
}

console.log(capitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!'));;
