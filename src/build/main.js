import { data } from "./data.js";
const div = document.getElementById("sound-board");
// Creates an audio tag with audio source, css class, and MIME type if applicable.
function mkAudio(url, mime) {
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
// Strips the URL of all but its domain
// http://example.com becomes example
// http://foo.example.com also becomes example
function stripURL(url) {
    let regex = /https?:\/\//gi;
    let siteComponents = url.origin.replace(regex, "").split('.');
    siteComponents.pop(); // pop the TLD
    return siteComponents.pop(); // pop and return the domain
}
// creates an anchor tag to the url
// includes a link text which contains the name of the linked site
function mkAnchor(url) {
    let link = document.createElement("a");
    link.href = url;
    let siteName = stripURL(link);
    link.text = "Link to " + siteName;
    return link;
}
// creates a span with associated text and class
function mkSpan(text) {
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
    let soundSource;
    if (typeof wd.src === "string") {
        soundSource = mkAnchor(wd.src);
    }
    else {
        soundSource = mkAudio(wd.src.url, wd.src.contentType);
    }
    row.appendChild(soundSource);
    div.appendChild(row);
}
//# sourceMappingURL=main.js.map