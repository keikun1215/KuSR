const stocks = {
    "hazmat": 2,
};

stockstuck(stocks["hazmat"], "hazmat.png", 1).forEach(i => {
    document.getElementById("hazmatstock").appendChild(i)
});

[...document.getElementsByClassName("titem")].forEach(pitem => {
    let item = document.createElement("div")
    item.classList.add("item")
    item.classList.add("itmg")
    let img = document.createElement("img")
    img.src = "img/" + pitem.getAttribute("name")
    img.classList.add("ha")
    item.appendChild(img)
    let txt = document.createElement("p")
    txt.textContent = pitem.getAttribute("amount")
    txt.classList.add("itxt")
    item.appendChild(txt)
    pitem.appendChild(item)
})

function stockstuck(s, n, sc = 64) {
    let res = []
    let nmuch = s % sc
    let much = (s - nmuch) / sc
    if (sc == 1) sc == ""
    console.log(nmuch, much)
    for (let _ of ((start, end) => [...Array(end + 1).keys()].slice(start))(1, much)) {
        let item = document.createElement("div")
        item.classList.add("titem")
        item.setAttribute("name", n)
        item.setAttribute("amount", sc)
        res.push(item)
    }
    let item = document.createElement("div")
    item.classList.add("titem")
    item.setAttribute("name", n)
    item.setAttribute("amount", nmuch)
    if (nmuch > 0) res.push(item)
    return res
}
