(async () => {


const font = new FontFace(
  "SpaceGrotesk",
  `url(${browser.runtime.getURL("Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf")})`
);

let time_to_count = 10
const time_checkbox = document.getElementById("time-checkbox")
const { time_check = true } = await browser.storage.local.get("time_check")



if (time_checkbox) {


  time_checkbox.addEventListener("change", () => { 

    if (time_checkbox.checked) {

      time_checkbox.checked = true


      browser.storage.local.set({

        time_check: true
        

      })

      
    } else {

      time_checkbox.checked = false

      browser.storage.local.set({

        time_check: false

      })
    }
  })

  if (time_check) {

    time_checkbox.checked = true


  } else {

    time_checkbox.checked = false


  }


  if (time_checkbox.checked) {

    time_to_count = 0


  } else {

    time_to_count = 10

  }

}




if (time_check) {

  time_to_count = 0


} else {

  time_to_count = 10


}

  


let { 

    instagram = true, 
    tiktok = true, 
    reddit = true, 
    youtube = true, 
    x = true, 
    whatsapp = true, 
    telegram = true, 
    facebook = true,
    discord = true, 
    linkedin = true, 
    snapchat = true, 
    pinterest = true, 
    threads = true,
    mastodon = true,
    bluesky = true,
    twitch = true,
    messenger = true


} = await browser.storage.local.get([
    "instagram", "tiktok", "reddit", "youtube", "x", 
    "whatsapp", "telegram", "facebook",
    "discord", "linkedin", "snapchat", "pinterest", "threads",
    "mastodon", "bluesky", "twitch", "messenger"
]);


const activate_button = document.querySelectorAll(".activate-button");

const facebook_icon = document.getElementById("facebook-icon")
const instagram_icon = document.getElementById("instagram-icon")
const tiktok_icon = document.getElementById("tiktok-icon")
const reddit_icon = document.getElementById("reddit-icon")
const youtube_icon = document.getElementById("youtube-icon")
const x_icon = document.getElementById("x-icon")
const whatsapp_icon = document.getElementById("whatsapp-icon")
const telegram_icon = document.getElementById("telegram-icon")
const discord_icon = document.getElementById("discord-icon")
const linkedin_icon = document.getElementById("linkedin-icon")
const snapchat_icon = document.getElementById("snapchat-icon")
const pinterest_icon = document.getElementById("pinterest-icon")
const threads_icon = document.getElementById("threads-icon")
const mastodon_icon = document.getElementById("mastodon-icon")
const bluesky_icon = document.getElementById("bluesky-icon")
const twitch_icon = document.getElementById("twitch-icon")
const messenger_icon = document.getElementById("messenger-icon")





activate_button.forEach(button => {

  if (facebook && button.id === "facebook-button") { button.classList.add("activate_button_clicked"); facebook_icon.style.color = "#0061d0"; }
  if (instagram && button.id === "instagram-button") { button.classList.add("activate_button_clicked"); instagram_icon.style.color = "#d42b81"; }
  if (tiktok && button.id === "tiktok-button") { button.classList.add("activate_button_clicked"); tiktok_icon.style.color = "#000000"; }
  if (reddit && button.id === "reddit-button") { button.classList.add("activate_button_clicked"); reddit_icon.style.color = "#ff4500"; }
  if (youtube && button.id === "youtube-button") { button.classList.add("activate_button_clicked"); youtube_icon.style.color = "#e60023"; }
  if (x && button.id === "x-button") { button.classList.add("activate_button_clicked"); x_icon.style.color = "#000000"; }
  if (discord && button.id === "discord-button") { button.classList.add("activate_button_clicked"); discord_icon.style.color = "#5561ea"; }
  if (linkedin && button.id === "linkedin-button") { button.classList.add("activate_button_clicked"); linkedin_icon.style.color = "#0062c1"; }
  if (snapchat && button.id === "snapchat-button") { button.classList.add("activate_button_clicked"); snapchat_icon.style.color = "#f7f400"; }
  if (pinterest && button.id === "pinterest-button") { button.classList.add("activate_button_clicked"); pinterest_icon.style.color = "#cc001f"; }
  if (threads && button.id === "threads-button") { button.classList.add("activate_button_clicked"); threads_icon.style.color = "#000000"; }
  if (whatsapp && button.id === "whatsapp-button") { button.classList.add("activate_button_clicked"); whatsapp_icon.style.color = "#21c063"; }
  if (telegram && button.id === "telegram-button") { button.classList.add("activate_button_clicked"); telegram_icon.style.color = "#1d91c1"; }
  if (telegram && button.id === "telegram-button") { button.classList.add("activate_button_clicked"); telegram_icon.style.color = "#1d91c1"; }
  if (mastodon && button.id === "mastodon-button") { button.classList.add("activate_button_clicked"); mastodon_icon.style.color = "#563acc"; }
  if (twitch && button.id === "twitch-button") { button.classList.add("activate_button_clicked"); twitch_icon.style.color = "#9146ff"; }
  if (bluesky && button.id === "bluesky-button") { button.classList.add("activate_button_clicked"); bluesky_icon.style.color = "#0085ff"; }
  if (messenger && button.id === "messenger-button") { button.classList.add("activate_button_clicked"); messenger_icon.style.color = "#0084ff"; }

});



activate_button.forEach(button => {

  button.addEventListener("click", () => {

    button.classList.toggle("activate_button_clicked");

    if (button.id === "mastodon-button") {
      if (mastodon === false) {
        mastodon = true 
        mastodon_icon.style.color = "#563acc"

        browser.storage.local.set({
          mastodon: true
        })
      } else {
        mastodon =  false
        mastodon_icon.style.color = "#989898"

        browser.storage.local.set({
          mastodon: false
        })
      }
    }

    if (button.id === "twitch-button") {
      if (twitch === false) {
        twitch = true 
        twitch_icon.style.color = "#9146ff"

        browser.storage.local.set({
          twitch: true
        })
      } else {
        twitch =  false
        twitch_icon.style.color = "#989898"

        browser.storage.local.set({
          twitch: false
        })
      }
    }

    if (button.id === "bluesky-button") {
      if (bluesky === false) {
        bluesky = true 
        bluesky_icon.style.color = "#0085ff"

        browser.storage.local.set({
          bluesky: true
        })
      } else {
        bluesky =  false
        bluesky_icon.style.color = "#989898"

        browser.storage.local.set({
          bluesky: false
        })
      }
    }

    if (button.id === "messenger-button") {
      if (messenger === false) {
        messenger = true 
        messenger_icon.style.color = "#0084ff"

        browser.storage.local.set({
          messenger: true
        })
      } else {
        messenger =  false
        messenger_icon.style.color = "#989898"

        browser.storage.local.set({
          messenger: false
        })
      }
    }

    

    if (button.id === "facebook-button") {
      if (facebook === false) {
        facebook = true 
        facebook_icon.style.color = "#0061d0"


        browser.storage.local.set({
          facebook: true
        })


      } else {
        facebook =  false
        facebook_icon.style.color = "#989898"

        browser.storage.local.set({
          facebook: false
        })

      }
    }

    if (button.id === "instagram-button") {
      if (instagram === false) {
        instagram = true 
        instagram_icon.style.color = "#d42b81"

        browser.storage.local.set({
          instagram: true
        })
      } else {
        instagram =  false
        instagram_icon.style.color = "#989898"

        browser.storage.local.set({
          instagram: false
        })

      }
    }

    if (button.id === "tiktok-button") {
      if (tiktok === false) {
        tiktok = true 
        tiktok_icon.style.color = "#000000"

        browser.storage.local.set({
          tiktok: true
        })

      } else {
        tiktok =  false
        tiktok_icon.style.color = "#989898"

        browser.storage.local.set({
          tiktok: false
        })
      }
    }

    if (button.id === "reddit-button") {
      if (reddit === false) {
        reddit = true 
        reddit_icon.style.color = "#ff4500"


        browser.storage.local.set({
          reddit: true
        })

      } else {
        reddit =  false
        reddit_icon.style.color = "#989898"

        browser.storage.local.set({
          reddit: false
        })
      }
    }

    if (button.id === "youtube-button") {
      if (youtube === false) {
        youtube = true 
        youtube_icon.style.color = "#e60023"


        browser.storage.local.set({
          youtube: true
        })


      } else {
        youtube =  false
        youtube_icon.style.color = "#989898"

        browser.storage.local.set({
          youtube: false
        })
      }
    }

    if (button.id === "x-button") {
      if (x === false) {
        x = true 
        x_icon.style.color = "#000000"

        browser.storage.local.set({
          x: true
        })

      } else {
        x =  false
        x_icon.style.color = "#989898"


        browser.storage.local.set({
          x: false
        })
      }
    }


    if (button.id === "whatsapp-button") {
      if (whatsapp === false) {
        whatsapp = true 
        whatsapp_icon.style.color = "#21c063"

        browser.storage.local.set({
          whatsapp: true
        })

      } else {
        whatsapp =  false
        whatsapp_icon.style.color = "#989898"

        browser.storage.local.set({
          whatsapp: false
        })
      }
    }


    if (button.id === "telegram-button") {
      if (telegram === false) {
        telegram = true 
        telegram_icon.style.color = "#1d91c1"

        browser.storage.local.set({
          telegram: true
        })

      } else {
        telegram =  false
        telegram_icon.style.color = "#989898"

        browser.storage.local.set({
          telegram: false
        })
      }
    }

    if (button.id === "discord-button") {
      if (discord === false) {
        discord = true 
        discord_icon.style.color = "#5561ea"

        browser.storage.local.set({
          discord: true
        })

      } else {
        discord =  false
        discord_icon.style.color = "#989898"

        browser.storage.local.set({
          discord: false
        })
      }
    }

    if (button.id === "linkedin-button") {
      if (linkedin === false) {
        linkedin = true 
        linkedin_icon.style.color = "#0062c1"


        browser.storage.local.set({
          linkedin: true
        })

      } else {
        linkedin =  false
        linkedin_icon.style.color = "#989898"


        browser.storage.local.set({
          linkedin: false
        })

      }
    }

    if (button.id === "snapchat-button") {
      if (snapchat === false) {
        snapchat = true 
        snapchat_icon.style.color = "#f7f400"


        browser.storage.local.set({
          snapchat: true
        })


      } else {
        snapchat =  false
        snapchat_icon.style.color = "#989898"


        browser.storage.local.set({
          snapchat: false
        })
      }
    }

    if (button.id === "pinterest-button") {
      if (pinterest === false) {
        pinterest = true 
        pinterest_icon.style.color = "#cc001f"


        browser.storage.local.set({
          pinterest: true
        })
      } else {
        pinterest =  false
        pinterest_icon.style.color = "#989898"

        browser.storage.local.set({
          pinterest: false
        })
      }
    }

    if (button.id === "threads-button") {
      if (threads === false) {
        threads = true 
        threads_icon.style.color = "#000000"

        browser.storage.local.set({
          threads: true
        })

      } else {
        threads =  false
        threads_icon.style.color = "#989898"

        browser.storage.local.set({
          threads: false
        })
      }
    }

  });
});



let social_media_sites = [
  "facebook.com",
  "instagram.com",
  "tiktok.com",
  "reddit.com",
  "youtube.com",
  "x.com", "twitter.com",
  "whatsapp.com", "web.whatsapp.com",
  "telegram.org", "web.telegram.org",
  "discord.com",
  "linkedin.com",
  "snapchat.com",
  "pinterest.com",
  "threads.net"
];


if (instagram === false) { social_media_sites = social_media_sites.filter(item => item !== "instagram.com");}
if (facebook === false) { social_media_sites = social_media_sites.filter(item => item !== "facebook.com");}
if (tiktok === false) { social_media_sites = social_media_sites.filter(item => item !== "tiktok.com");}
if (reddit === false) { social_media_sites = social_media_sites.filter(item => item !== "reddit.com");}
if (youtube === false) { social_media_sites = social_media_sites.filter(item => item !== "youtube.com");}
if (x === false) { social_media_sites = social_media_sites.filter(item => item !== "x.com" && item !== "twitter.com");}
if (whatsapp === false) { social_media_sites = social_media_sites.filter(item => item !== "whatsapp.com" && item !== "web.whatsapp.com");}
if (telegram === false) { social_media_sites = social_media_sites.filter(item => item !== "telegram.org" && item !== "web.telegram.org");}
if (discord === false) { social_media_sites = social_media_sites.filter(item => item !== "discord.com");}
if (linkedin === false) { social_media_sites = social_media_sites.filter(item => item !== "linkedin.com");}
if (snapchat === false) { social_media_sites = social_media_sites.filter(item => item !== "snapchat.com");}
if (pinterest === false) { social_media_sites = social_media_sites.filter(item => item !== "pinterest.com");}
if (threads === false) { social_media_sites = social_media_sites.filter(item => item !== "threads.net");}



const is_blocked = social_media_sites.some(site => location.hostname.includes(site));

if (!is_blocked) return



let time_end = false
let times_closed

const today = new Date().toDateString()
const { today_storage } = await browser.storage.local.get("today_storage")


if (today_storage && today_storage !== today) {

  browser.storage.local.set({
    today_storage: today
  })


  times_closed = 0

  browser.storage.local.set({

    times_closed_storage: times_closed

  })

} else if (today_storage && today_storage === today) {

  const { times_closed_storage } = await browser.storage.local.get("times_closed_storage")
  times_closed = times_closed_storage ?? 0
  
}

else  {

  times_closed = 0

  browser.storage.local.set({

    times_closed_storage: times_closed

  })

  browser.storage.local.set({
    today_storage: today
  })

  
}


const background = document.createElement('div')


background.style.all = "initial"

background.style.width = '100vw'
background.style.height = '100vh'
background.style.display = 'flex'
background.style.alignItems = 'center'
background.style.justifyContent = 'center'
background.style.zIndex = '99999999999'
background.style.backgroundColor = "#00000080"
background.style.top = '0'
background.style.left = '0'
background.style.position = 'fixed'


const content = document.createElement('div')

content.style.all = "initial"

content.style.width = '520px'
content.style.height = '400px'
content.style.borderRadius = '5px'
content.style.backgroundColor = 'white'
content.style.border = "2px solid black"
content.style.display = 'flex'
content.style.flexDirection = 'column'
content.style.color = "black"
content.style.boxSizing = 'border-box'
content.style.fontFamily = "Arial, sans-serif"



content.innerHTML = `

<div id="top-bar">

  <p id="top-text">Closed ${times_closed} times today</p>

  <button id="close-button"></button>


</div>

<hr id="top-division">

<div id="middle">


  <div id="text-box">

    <p id="line-one"> </p>
    <p id="line-two"> </p>
    <p id="line-three"> </p> 

  </div>

  <div id="img-box-box">

  </div>
</div>


<div id="bottom">

    <p id="bottom-text">Like the project? Give it a ★ on <a id="github-link" href="https://github.com/">GitHub</a>.</p>    
 
</div>
`

background.appendChild(content)
document.body.appendChild(background);


function normalize(container) {
  const elements = container.querySelectorAll("*")

  elements.forEach(el => {

    el.style.all = "unset"
    el.style.boxSizing = "border-box"

  })
}


normalize(content)

const top = document.getElementById("top-bar")

const middle = document.getElementById("middle")

const bottom = document.getElementById("bottom")


top.style.width = "100%"
top.style.height = "45px"
top.style.paddingRight = "10px"
top.style.paddingLeft = "15px"
top.style.display = 'flex'
top.style.flexDirection = "row"
top.style.alignItems = "center"
top.style.justifyContent = "space-between"

middle.style.display = "flex"
middle.style.flex = "1"
middle.style.padding = "8px"
middle.style.flexDirection = "column"
middle.style.alignItems = "center"
middle.style.setProperty("font-size", "26px", "important")
middle.style.position = "relative"


let img_folder = 0
let cat_number = 0

const img_box_box = document.getElementById("img-box-box") 

img_box_box.style.width = "100%"
img_box_box.style.height = "82%"
img_box_box.style.display = "flex"
img_box_box.style.justifyContent = "center"
img_box_box.style.alignItems = "center"

const img_box = document.createElement("div")

img_box.style.width = "180px"
img_box.style.marginTop = "13px"
img_box.style.height = "180px"
img_box.style.objectFit = "center"
img_box.style.display = "flex"
img_box.style.justifyContent = "center"
img_box.style.alignItems = "center"
img_box.style.overflow = "hidden"


const img = document.createElement("img");



if (times_closed == 0 ) {

  img_folder = 1


} else if (times_closed == 1 ) {

  img_folder = 2


} else if (times_closed == 2 ) {

  img_folder = 3


} else if (times_closed == 3 ) {

  img_folder = 4


} else if (times_closed == 4 ) {

  img_folder = 5


} else if (times_closed == 5 ) {

  img_folder = 6


} else if (times_closed == 6 ) {

  img_folder = 7


} else if (times_closed == 7 ) {

  img_folder = 8


} else {

  img_folder = 9


}

if (img_folder !== 9) {

  cat_number = (Math.floor(Math.random() * 3)) + 1;
  
} else {

  cat_number = (Math.floor(Math.random() * 9)) + 1;

}

function showGif() {

  img.src =  browser.runtime.getURL(`cats/${img_folder}/${cat_number}.gif`)

}


img.style.width = "180px"
img.style.marginTop = "13px"

img_box.append(img)
middle.append(img_box_box)
img_box_box.append(img_box)


const text_box = document.getElementById("text-box")

text_box.style.width = "100%"
text_box.style.height = "18%"
text_box.style.display = "flex"
text_box.style.flexDirection = "column"
text_box.style.gap = "5px"

bottom.style.width = "100%"
bottom.style.display = "flex"
bottom.style.height = "20px"
bottom.style.flexDirection = "row"
bottom.style.justifyContent = "space-between"
bottom.style.alignItems = "flex-end"
bottom.style.padding = "8px"
bottom.style.setProperty("font-size", "16px", "important")

const top_text = document.getElementById("top-text")

top_text.style.fontSize = "15px"
top_text.style.color = "#000000"
top_text.style.setProperty("font-size", "14.5px", "important")


const github_link = document.getElementById("github-link")

github_link.style.color = "#23417d"
github_link.style.textDecoration = "underline"
github_link.style.cursor = "pointer"

const bottom_text = document.getElementById("bottom-text")

bottom_text.style.setProperty("font-size", "14.5px", "important")
bottom_text.style.color = "#000000"

const close_button = document.getElementById("close-button")



if (time_to_count == 0) {

  close_button.innerText = "X"
  close_button.style.setProperty("font-size", "20px", "important")
  close_button.style.color = "#000000"
  close_button.style.cursor = "pointer"

  
}



close_button.style.width = "25px"
close_button.style.height = "25px"
close_button.style.display = "flex"
close_button.style.justifyContent ="center"
close_button.style.alignItems = "center"
close_button.style.color = "#484848"
close_button.style.fontSize = "17px"

const top_division = document.getElementById("top-division")

top_division.style.margin = "0"
top_division.style.color = "rgba(163, 163, 163, 0.452)"
top_division.style.border = "1px solid black"


const line_three = document.getElementById("line-three")

line_three.style.fontSize = "16px"
line_three.style.color = "#004680"
line_three.style.fontFamily = "SpaceGrotesk"
line_three.style.fontWeight = "900"
line_three.style.backgroundColor = "#dedede"
line_three.style.lineHeight = "26px"
line_three.style.wordSpacing = "2px"


const line_two = document.getElementById("line-two")

line_two.style.fontSize = "16px"
line_two.style.color = "#004680"
line_two.style.fontFamily = "SpaceGrotesk"
line_two.style.fontWeight = "900"
line_two.style.backgroundColor = "#dedede"
line_two.style.lineHeight = "26px"
line_two.style.wordSpacing = "2px"

const line_one = document.getElementById("line-one")

line_one.style.color = "#004680"
line_one.style.fontSize = "16px"
line_one.style.fontFamily = "SpaceGrotesk"
line_one.style.fontWeight = "900"
line_one.style.backgroundColor = "#dedede"
line_one.style.lineHeight = "26px"
line_one.style.wordSpacing = "2px"

let text_1 = "> Hey, you're about to open a social media site!"
let text_2 = "> Take a moment to see if it is what you really want <3."
let text_3 = "> load_media( 'kitty_reaction.gif' ) "



let index_1 = 0
let index_3 = 0
let index_4 = 0
let index_5 = 0


function typeEffect() {



  if (index_1 < text_1.length) {

    if (index_1 === 0) {

      index_1++; 

      setTimeout(typeEffect, 1000);
      line_one.textContent += text_1.charAt(0);
      return;

    }



    line_one.textContent += text_1.charAt(index_1);

    index_1++;
    setTimeout(typeEffect, 65); 
  
  } else if (index_3 < text_3.length) {

      if (index_3 === 0) {

      index_3++; 

      setTimeout(typeEffect, 500);
      line_three.textContent += text_3.charAt(0);
      return;
      
    }


    line_three.textContent += text_3.charAt(index_3)
    index_3++;
    setTimeout(typeEffect, 65); 

  } else if (index_4 < 3){

    line_three.textContent += "."
    setTimeout(typeEffect, 300); 
    index_4++
    
    if (index_4 === 0) {
      index_5++
    }
    
  } else if (index_5 < 1) {

    line_three.textContent = text_3
    index_4 = 0

    index_5++


    setTimeout(typeEffect, 300); 


  } else {
    

    setTimeout(showGif, 10)
    line_three.textContent = text_3

  }


}

typeEffect();

const p = document.querySelectorAll("p")




font.load().then((loadedFont) => {

  document.fonts.add(loadedFont);

  top_text.style.fontFamily = "SpaceGrotesk, sans-serif";
  bottom_text.style.fontFamily = "SpaceGrotesk, sans-serif";
  close_button.style.fontFamily = "SpaceGrotesk, sans-serif";
  

});



p.forEach(x => {
  x.style.margin = "0"
})



function count() {

  time_to_count--;

  if (time_to_count > 0) {

    
    close_button.innerText = time_to_count


  } else {

    close_button.innerText = "X"
    close_button.style.setProperty("font-size", "20px", "important")
    close_button.style.color = "#000000"
    close_button.style.cursor = "pointer"
    clearInterval(interval)
    time_end = true
    
  }
}


const interval = setInterval(count, 1000)



close_button.addEventListener("click", () => {

  if (time_end) {

    background.remove()

    times_closed++



  browser.storage.local.set({

    times_closed_storage: times_closed

  })
  }

})

})();