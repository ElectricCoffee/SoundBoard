export type AudioMIME = "audio/basic" | "audio/mid" | "audio/mpeg" | "audio/x-aiff" | "audio/x-mpegurl" | "audio/x-pn-realaudio" | "audio/x-wav";

export interface WebData {
    text: string;
    src: string | AudioData;
}

export interface AudioData {
    url: string;
    contentType?: AudioMIME;
}

export const data: Array<WebData> = [ 
    {
        text: "Anyone need some healing?",
        src: { 
            url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/f/fb/Anyone_need_some_healing.ogg", 
        },
    },
    {
        text: "Come here and get stabilised!",
        src: { 
            url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/f/f9/S76_-_come_here_and_get_stabilized.ogg", 
        },
    },
    {
        text: "Get over here and heal up!",
        src: { 
            url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/6/64/S76_-_Get_over_here_and_heal_up.wav", 
        },
    },
    {
        text: "Everyone, heal up.",
        src: { 
            url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/d/da/Everyone_heal_up.ogg", 
        },
    },
    {
  	    text: "Time to heal up",
        src: { 
            url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/f/f7/Time_to_heal_up.ogg", 
        },
    },
    {
        text: "Team, heal up here",
        src: { 
            url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/8/8d/S76_-_Team%2C_heal_up_here.ogg", 
        },
    },
    {
        text: "Never leave a team-mate behind",
        src: { 
            url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/6/6f/S76_-_Never_leave_a_teammate_behind.ogg" 
        },
    },
    {
        text: "Did someone call a doctor?",
        src: { 
            url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/8/81/Did_someone_call_a_doctor.mp3", 
        },
    },
    {
        text: "I've got you",
        src: { 
            url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/7/79/I%27ve_got_you.mp3", 
        },
    },
    {
        text: "Patching you up",
        src: { 
            url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/c/c4/Patching_you_up.mp3", 
        },
    },
    {
        text: "Let's get you back out there",
        src: { 
            url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/6/66/Let%27s_get_you_back_out_there.mp3", 
        },
    },
    {
        text: "I'm taking care of you",
        src: { 
            url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/f/f2/I%27m_taking_care_of_you.mp3", 
        },
    },
    {
        text: "I'm still here",
        src: { 
            url: "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/9/99/I%27m_still_here.mp3", 
        },
    },
    {
        text: "Get zem! Raus! Raus!",
        src: { 
            url: "https://wiki.teamfortress.com/w/images/6/63/Medic_specialcompleted05.wav",
            contentType: "audio/x-wav"
        }
    },
    {
        text: "Thanks, mate!",
        src: { 
            url: "https://wiki.teamfortress.com/w/images/4/4b/Sniper_thanks01.wav", 
            contentType: "audio/x-wav",
        },
    },
    {
        text: "Get bloody going!",
        src: {
             url: "https://wiki.teamfortress.com/w/images/1/19/Sniper_go01.wav", 
             contentType: "audio/x-wav",
        },
    },
    {
        text: "Incoming (quiet)",
        src: {
             url: "https://wiki.teamfortress.com/w/images/9/91/Sniper_incoming04.wav", 
             contentType: "audio/x-wav",
        },
    },
    {
        text: "Incoming!",
        src: {
             url: "https://wiki.teamfortress.com/w/images/4/4c/Sniper_incoming02.wav", 
             contentType: "audio/x-wav",
        },
    },
    {
        text: "Good shot, mate!",
        src: {
             url: "https://wiki.teamfortress.com/w/images/9/91/Sniper_niceshot02.wav", 
             contentType: "audio/x-wav",
        },
    },
    {
        text: "Oh nooo",
        src: {
             url: "https://wiki.teamfortress.com/w/images/6/6b/Heavy_negativevocalization02.wav", 
             contentType: "audio/x-wav",
        },
    },
    {
        text: "Crickets at night",
        src: { 
            url: "http://soundbible.com/mp3/Summer Crickets Chirping-SoundBible.com-1519333525.mp3", 
        },
    },
    {
        text: "Rimshot",
        src: { 
            url: "http://soundbible.com/mp3/Joke Sting-SoundBible.com-1968971319.mp3", 
        },
    },
    {
        text: "Octopath Traveler: Victory Theme",
        src: "https://www.youtube.com/watch?v=jThszYYm8JU",
    },
    {
        text: "Resident Evil 4: Save",
        src: "https://www.youtube.com/watch?v=zSGPoLCY0xU",
    },
    {
        text: "Octopath Traveler: My Quiet Forest Home",
        src: "https://www.youtube.com/watch?v=At20FsThT8Y",
    },
    {
        text: "Octopath Traveler: The Frostlands",
        src: "https://www.youtube.com/watch?v=hPQY6J7naE0",
    },
    {
        text: "Octopath Traveler: The Coastlands",
        src: "https://www.youtube.com/watch?v=FME_gtmjssg",
    },
    {
        text: "Octopath Traveler: Decisive Battle I",
        src: "https://www.youtube.com/watch?v=D2rlF98Jes8",
    },
    {
        text: "Zelda: Breath of the Wild: Tarrey Town",
        src: "https://www.youtube.com/watch?v=cECdXHvrmNc",
    },
    {
        text: "Zelda: Majora's Mask: Song of Healing",
        src: "https://www.youtube.com/watch?v=XDX4ZwUeOok",
    },
    {
        text: "Zelda: Breath of the Wild: Snowy Mountain Shrine",
        src: "https://www.youtube.com/watch?v=D1p9ZGwaXV0"
    },
    {
        text: "Zelda: Breath of the Wild: Sheikah Tower",
        src: "https://www.youtube.com/watch?v=mGVsWJcZeTc",
    },
    {
        text: "Music Box, Harp, & Hammered Dulcimer",
        src: "https://wintergatan.bandcamp.com/track/music-box-harp-hammered-dulcimer",
    }
]