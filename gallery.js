const track = document.getElementById("image-track");
let change;

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
    track.classList.add("dragging");
}

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;
    
    const deltaConverted = mouseDelta / maxDelta * -100;

    const percentage = parseFloat(track.dataset.prevPercentage) + deltaConverted;


    change = Math.min(0, Math.max(-100, percentage));
    console.log(change);
    track.style.transform = `translate(${change}%, -50%)`;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.classList.remove("dragging");
    track.dataset.prevPercentage = change;
}

window.onwheel = e => {
    const scrollDelta = e.deltaY / window.innerWidth * -100;
    const percentage = parseFloat(track.dataset.prevPercentage) + scrollDelta;

    console.log(percentage);
    change = Math.min(0, Math.max(-100, percentage));
    track.style.transform = `translate(${change}%, -50%)`;
    track.dataset.prevPercentage = change;
}