import {data} from "./data.js";

function mkAudioTag(url: string): HTMLAudioElement {
	let audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;

    return audio; 
}

function range(n: number): number[] {
    return [...Array(n).keys()];
}

const div = document.getElementById("sound-board");
const table = document.createElement("table");

for (let wd of data) {
    let tr = document.createElement("tr");

    for (let col of range(2)) {
        let td = document.createElement("td");
        
        if (col === 0) {
            td.appendChild(document.createTextNode(wd.text));
        } else if (col === 1 && wd.soundFile) {
            td.appendChild(mkAudioTag(wd.soundFile));
        } else if (col === 1 && wd.page) {
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