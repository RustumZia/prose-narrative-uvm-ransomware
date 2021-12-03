


const cover = document.getElementById("article-cover");
const coverBuffer = document.getElementById("cover-buffer");

window.onresize = function() {
    // cover.clientWidth = document.body.clientWidth
    // console.log(cover.clientWidth);
    coverBuffer.style.height = `${cover.clientHeight}px`
}
window.onresize()

window.onload = window.onresize

const video = document.getElementById("header-video");
window.onscroll = (e) => {
    cover.style.opacity = Math.min(1, 1 / (window.scrollY / 400))
    
    if (window.scrollY > window.innerHeight / 4) {
        video.pause()
    } else if (video.paused) {
        video.play()
    }
}
