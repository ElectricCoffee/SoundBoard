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

    let soundSource: HTMLAudioElement | HTMLAnchorElement;

    if (wd.soundFile) {
        soundSource = mkAudioTag(wd.soundFile);
    } else if (wd.page) {
        let link = document.createElement("a");
        link.href = wd.page;
        link.text = "Link to page";
        
        soundSource = link;
    }

    row.appendChild(soundSource);
    div.appendChild(row);
}