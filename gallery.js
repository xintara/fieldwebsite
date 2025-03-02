const track = document.getElementById("image-track");
let change;

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;
    
    const deltaConverted = mouseDelta / maxDelta * -100;

    const percentage = parseFloat(track.dataset.prevPercentage) + deltaConverted;
    change = Math.min(0, Math.max(-100, percentage));

    track.animate({
        transform: `translate(${change}%, -50%)`
    }, {duration: 1200, fill: "forwards"});
    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + change}% 50%`
        }, {duration: 1200, fill: "forwards"});
    }
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = change;
}

window.onwheel = e => {
    const scrollDelta = e.deltaY / window.innerWidth * -100;
    const percentage = parseFloat(track.dataset.prevPercentage) + scrollDelta;

    change = Math.min(0, Math.max(-100, percentage));
    track.animate({
        transform: `translate(${change}%, -50%)`
    }, {duration: 1200, fill: "forwards"});
    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + change}% 50%`
        }, {duration: 1200, fill: "forwards"});
    }
    track.dataset.prevPercentage = change;
}