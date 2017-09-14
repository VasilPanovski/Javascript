function orderRectangles(rectArray) {
    let rectangles = [];
    for (let [width, height] of rectArray) {
        rectangles.push(createRect(width, height));
    }

    rectangles.sort((a, b) => a.compareTo(b));

    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function (other) {
                let firstCriteria = other.area() - rect.area();
                let secondCriteria = other.width - rect.width;
                return firstCriteria || secondCriteria;
            }
        };

        return rect;
    }

    return rectangles;
}

// console.log(orderRectangles([[10,5], [3,20], [5,12]]));
console.log(orderRectangles([[10,5],[5,12]]));
