let solution = (function () {
    return {
        add: function (v1, v2) {
            return [v1[0] + v2[0], v1[1] + v2[1]];
        },
        multiply: function (v1, scalar) {
            return [v1[0] * scalar, v1[1] * scalar];
        }, 
        length: function (v1) {
            return Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1])
        },
        dot: function (v1, v2) {
            return v1[0] * v2[0] + v1[1] * v2[1];
        },
        cross: function (v1, v2) {
            return v1[0] * v2[1] - v1[1] * v2[0];
        }
    }
})();


console.log(solution.cross([3, 7], [1, 0]));