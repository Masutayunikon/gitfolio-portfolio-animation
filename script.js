
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let container = document.getElementById("container");



for(let i = 0; i < 10; i++) {
    let child = document.createElement("img");
    child.src = "https://www.researchgate.net/profile/Christophe-Montagne/publication/237756523/figure/fig1/AS:341107117445120@1458337682113/Image-originale-256-x-256-pixels.png"
    child.alt = "uwu"
    child.className = "img"
    child.id = ''+i;
    let b = (getRandomInt(2) === 1) ? 1 : -1
    let a = getRandomInt(45) * b;
    child.style.transform = 'rotate('+a+'deg)'
    container.appendChild(child);
}

Draggable.create(".img", {bounds:".container", inertia:true});
