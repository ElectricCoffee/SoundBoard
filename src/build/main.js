import { data } from "./data.js";
function mkAudioTag(url) {
    let audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    return audio;
}
let div = document.getElementById("sound-board");
let table = document.createElement("table");
for (let wd of data) {
    let tr = document.createElement("tr");
    for (let col = 0; col < 2; col++) {
        let td = document.createElement("td");
        if (col === 0) {
            td.appendChild(document.createTextNode(wd.text));
        }
        else if (col === 1 && wd.soundFile) {
            td.appendChild(mkAudioTag(wd.soundFile));
        }
        else if (col === 1 && wd.page) {
            let link = document.createElement("a");
            link.href = wd.page;
            link.text = "Link to page";
            td.appendChild(link);
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
div.appendChild(table);
//# sourceMappingURL=main.js.map