let data = [
    {
        text: "Anyone need some healing?",
        url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/f/fb/Anyone_need_some_healing.ogg",
    },
    {
        text: "Come here and get stabilised!",
        url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/f/f9/S76_-_come_here_and_get_stabilized.ogg",
    },
    {
        text: "Get over here and heal up!",
        url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/6/64/S76_-_Get_over_here_and_heal_up.wav",
    },
    {
        text: "Everyone, heal up.",
        url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/d/da/Everyone_heal_up.ogg",
    },
    {
        text: "Time to heal up",
        url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/f/f7/Time_to_heal_up.ogg",
    },
    {
        text: "Team, heal up here",
        url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/8/8d/S76_-_Team%2C_heal_up_here.ogg",
    },
    {
        text: "Never leave a team-mate behind",
        url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/6/6f/S76_-_Never_leave_a_teammate_behind.ogg"
    },
    {
        text: "Did someone call a doctor?",
        url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/8/81/Did_someone_call_a_doctor.mp3",
    },
    {
        text: "I've got you",
        url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/7/79/I%27ve_got_you.mp3",
    },
    {
        text: "Patching you up",
        url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/c/c4/Patching_you_up.mp3",
    },
    {
        text: "Let's get you back out there",
        url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/6/66/Let%27s_get_you_back_out_there.mp3",
    },
    {
        text: "I'm taking care of you",
        url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/f/f2/I%27m_taking_care_of_you.mp3",
    },
    {
        text: "I'm still here",
        url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/9/99/I%27m_still_here.mp3",
    }
];
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
        else if (col === 1) {
            td.appendChild(mkAudioTag(wd.url));
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
div.appendChild(table);
//# sourceMappingURL=main.js.map