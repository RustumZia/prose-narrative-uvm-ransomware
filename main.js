const cover = document.getElementById("article-cover");
const coverBuffer = document.getElementById("cover-buffer");

window.onresize = function() {
    // cover.clientWidth = document.body.clientWidth
    // console.log(cover.clientWidth);
    coverBuffer.style.height = `${cover.clientHeight}px`;
}
window.onresize();

window.onload = window.onresize;

const video = document.getElementById("header-video");
window.onscroll = (e) => {
    cover.style.opacity = Math.min(1, 1 / (window.scrollY / 400));
    
    if (window.scrollY > window.innerHeight / 4) {
        video.pause();
    } else if (video.paused) {
        video.play();
    }
}


const stickers = document.getElementsByClassName("clinger");
for (let i = 0; i < stickers.length; ++i) {
    elem = stickers[i];
    otherId = elem.getAttribute("clingto");
    if (otherId == null) {
        console.log("clinger has no clingto attribute ", elem)
        continue;
    }
    other = document.getElementById(otherId);
    if (other == null) {
        console.log("could not find clingto element of id ", otherId);
        continue;
    }

    elem.style.top = (other.getBoundingClientRect().top + window.pageYOffset) + "px";
    console.log(elem.style.top, other.offsetTop);
}
