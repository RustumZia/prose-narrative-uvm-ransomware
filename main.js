
/****************************************************/

const cover = document.getElementById("article-cover");
const coverBuffer = document.getElementById("cover-buffer");
const gradient = document.getElementById("gradient-bg");

window.onresize = function() {
    coverBuffer.style.height = `${cover.clientHeight}px`;
}
window.onresize();

window.onload = window.onresize;

const video = document.getElementById("header-video");
window.onscroll = (e) => {
    cover.style.opacity = Math.min(1, 1 / (window.scrollY / 400));
    if (window.scrollY > window.innerHeight / 3 + gradient.clientHeight) {
        video.pause();
    } else if (video.paused) {
        video.play();
    }
}

/****************************************************/

const stickers = document.getElementsByClassName("clinger");
for (let i = 0; i < stickers.length; ++i) {
    elem = stickers[i];
    otherId = elem.getAttribute("clingto");
    if (otherId == null) {
        console.log("clinger has no clingto attribute ", elem);
        continue;
    }
    other = document.getElementById(otherId);
    if (other == null) {
        console.log("could not find clingto element of id ", otherId);
        continue;
    }

    elem.style.top = (other.getBoundingClientRect().top + window.pageYOffset) + "px";
}

/****************************************************/

const sectionHeaders = document.getElementsByClassName("section-head");
const outline = document.getElementById("outline");
for (let i = 0; i < sectionHeaders.length; ++i) {
    const headerElem = sectionHeaders[i];
    
    const link = document.createElement("a");
    headerElem.id ||= headerElem.innerText.replace(" ", "-").toLowerCase();
    link.href = "#" + headerElem.id;
    link.innerText = headerElem.innerText;

    outline.appendChild(link);
    
}


/****************************************************/

