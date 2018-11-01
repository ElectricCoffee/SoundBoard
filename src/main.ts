import {data, AudioMIME} from "./data.js";

const div = document.getElementById("sound-board");

/** 
 * Creates an audio tag with audio source, css class, and MIME type if applicable. 
 * @param {string} url - The URL of the audio source
 * @param {AudioMIME} [mime] - The MIME type of the audio source
 */
function mkAudio(url: string, mime?: AudioMIME): HTMLAudioElement {
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

/** 
 * Strips the URL of all but its domain
 * http://example.com becomes example
 * http://foo.example.com also becomes example
 * @param {HTMLHyperlinkElementUtils} url - The link tag housing the url
 */
function stripURL(url: HTMLHyperlinkElementUtils): string {
    let regex = /https?:\/\//gi;
    let siteComponents = url.origin.replace(regex, "").split('.');

    siteComponents.pop(); // pop and discard the TLD
    return siteComponents.pop(); // pop and return the domain
}

/**
 * Creates an anchor tag to the url.
 * Includes a link text which contains the name of the linked site
 * @param {string} url - The URL of the anchor
 */
function mkAnchor(url: string): HTMLAnchorElement {
    let link = document.createElement("a");
    link.href = url;
    link.text = "Link to " + stripURL(link);
    return link;
}

/**
 * Creates a span with associated text and class
 * @param {string} text - The text to be included in the span
 */
function mkSpan(text: string): HTMLSpanElement {
    let span = document.createElement("span");
    span.innerText = text;
    span.className = "text";
    return span;
}

// iterate over the data set and populate the grid
for (let wd of data) {
    let row = document.createElement("div");
    row.className = "grid-row";
    
    let span = mkSpan(wd.text);
    row.appendChild(span);

    let soundSource: HTMLAudioElement | HTMLAnchorElement;

    if (typeof wd.src === "string") {
        soundSource = mkAnchor(wd.src);
    } else {
        soundSource = mkAudio(wd.src.url, wd.src.contentType);
    }

    row.appendChild(soundSource);
    div.appendChild(row);
}