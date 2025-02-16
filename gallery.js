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

    console.log(percentage);
    track.style.transform = `translate(${change}%, -50%)`;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";

    track.dataset.prevPercentage = change;
}