import { data } from "./data.js";
const div = document.getElementById("sound-board");
function mkAudioTag(url, mime) {
    let audio = document.createElement("audio");
    let source = document.createElement("source");
    audio.controls = true;
    source.src = url;
    if (mime) {
        source.type = mime;
    }
    audio.appendChild(source);
    return audio;
}
function mkLink(url) {
    let link = document.createElement("a");
    link.href = url;
    link.text = "Link to page";
    return link;
}
for (let wd of data) {
    let row = document.createElement("div");
    row.className = "inline";
    let span = document.createElement("span");
    span.innerText = wd.text;
    span.className = "text";
    row.appendChild(span);
    let soundSource;
    if (typeof wd.src === "string") {
        soundSource = mkLink(wd.src);
    }
    else {
        soundSource = mkAudioTag(wd.src.url, wd.src.contentType);
    }
    row.appendChild(soundSource);
    div.appendChild(row);
}
//# sourceMappingURL=main.js.map