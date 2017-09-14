function townsToJson(table) {
    let towns = [];
    for (let town of table.slice(1)) {
        let [townName, latitude, longitude] = town.split(/\s*\|\s*/).filter(e => e !== '');
        let townObj = {Town: townName, Latitude: Number(latitude), Longitude: Number(longitude)};
        towns.push(townObj)
    }

    console.log(JSON.stringify(towns))

}


townsToJson(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |','| Beijing | 39.913818 | 116.363625 |']);