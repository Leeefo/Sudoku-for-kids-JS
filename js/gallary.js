let qString;

let imgsTitle = ["Pokemone", "Princesses", "Spongebob", "Looney Tunes"]

window.addEventListener("load", () => {
    qString = window.location.search

    const searchParams = new URLSearchParams(location.search);
    let options = {}
    for (const [key, value] of searchParams.entries()) {
        options[key] = value;
    }

    const n = options.gameLevel == 1 ? 4 : 9;
    const sqrtN = options.gameLevel == 1 ? 2 : 3;

    function renderImgGroup() {
        let imgContainers = document.querySelectorAll(".img-container")
        console.log(sqrtN)
        for (let containerNum = 0; containerNum < imgContainers.length; containerNum++) {


            imgContainers[containerNum].classList.add(`row-cols-${sqrtN}`)
            for (let i = 1; i < n + 1; i++) {
                imgContainers[containerNum].innerHTML += `<div class="pb-2"><img src="images/${containerNum + 1}/${i}.jpg"></div>`
            }
            imgContainers[containerNum].innerHTML += `<a data-imgs="${containerNum + 1}" class="col-12 btn btn-primary mt-4">${imgsTitle[containerNum]}</a>`
        }
    }
    renderImgGroup()

    document.querySelectorAll("a").forEach(btn => {
        btn.href = `board.html${qString}&imgs=${btn.dataset.imgs}`
    })

})