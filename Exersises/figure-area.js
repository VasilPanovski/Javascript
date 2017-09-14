function getFigureArea(w, h, W, H) {
    let s1 = w * h;
    let s2 = W * H;
    let diffS = Math.min(w, W) * Math.min(h, H);
    let s = s1 + s2 - diffS;
    console.log(s);
}

getFigureArea(2, 4, 5, 3);