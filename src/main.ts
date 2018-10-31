import {data, AudioMIME, AudioData} from "./data.js";

const div = document.getElementById("sound-board");

function mkAudioTag(url: string, mime?: AudioMIME): HTMLAudioElement {
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

function mkLink(url: string): HTMLAnchorElement {
    let link = document.createElement("a");
    link.href = url;

    let origin = link.origin.split('.');
    let siteName: string;

    if (origin.length == 3) { // if url of the form www.example.com
        siteName = origin[1];
    } else { // if url of the form example.com
        siteName = origin[0];
    }

    link.text = "Link to " + siteName;
    return link;
}

for (let wd of data) {
    let row = document.createElement("div");
    row.className = "grid-row";
    
    let span = document.createElement("span");
    span.innerText = wd.text;
    span.className = "text";
    row.appendChild(span);

    let soundSource: HTMLAudioElement | HTMLAnchorElement;

    if (typeof wd.src === "string") {
        soundSource = mkLink(wd.src);
    } else {
        soundSource = mkAudioTag(wd.src.url, wd.src.contentType);
    }

    row.appendChild(soundSource);
    div.appendChild(row);
}