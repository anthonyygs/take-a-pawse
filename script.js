(async () => {


let time_end = false
let times_closed
let { time_input_storage = 10 } = await browser.storage.local.get("time_input_storage")
let time_to_count = time_input_storage

const time_input = document.getElementById("time-input")


if (time_input) {


  time_input.value = time_input_storage

  time_input.addEventListener("change", () => { 

    browser.storage.local.set({

      time_input_storage: time_input.value 

    });
  })
}

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
    time_to_count = time_input_storage

  }
}

if (time_check) {

  time_to_count = 0
  time_end = true;

} else {

  time_to_count = time_input_storage
  time_end = time_to_count <= 0

}

const language_checkbox = document.querySelectorAll(".language-checkbox")

let { language_storage } = await browser.storage.local.get("language_storage")

const english_checkbox = document.getElementById("english")
const portuguese_checkbox = document.getElementById("portuguese")
const spanish_checkbox = document.getElementById("spanish")
const french_checkbox = document.getElementById("french")



const user_language = navigator.language.slice(0,2)


if (language_checkbox && !language_storage && portuguese_checkbox &&  spanish_checkbox && english_checkbox && french_checkbox) {


  if (user_language === "pt") {

    portuguese_checkbox.checked = true

    browser.storage.local.set({

      language_storage: "portuguese"

    });


  } else if (user_language === "es") {

    spanish_checkbox.checked = true

    browser.storage.local.set({

      language_storage: "spanish"

    });

  } else if (user_language === "en") {

    english_checkbox.checked = true

    browser.storage.local.set({

      language_storage: "english"

    });


  } else if (user_language === "fr") {

    french_checkbox.checked = true

    browser.storage.local.set({

      language_storage: "french"

    });


  } else {

    english_checkbox.checked = true

    browser.storage.local.set({

      language_storage: "english"

    });


}}

if (language_checkbox && language_storage && english_checkbox && portuguese_checkbox && spanish_checkbox && french_checkbox) {

  if (language_storage == "english") { english_checkbox.checked = true}
  else if (language_storage == "portuguese") { portuguese_checkbox.checked = true }
  else if (language_storage == "spanish") { spanish_checkbox.checked = true }
  else if (language_storage == "french") { french_checkbox.checked = true }

}


if (language_checkbox) { 
  
  language_checkbox.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        browser.storage.local.set({
          language_storage: checkbox.id

        });
    }
  });
});
}


let text_1 = ""
let top_text_left = ""
let top_text_right = ""
let bottom_text_text = ""

const settings_p = document.getElementById("settings-p")
const title = document.getElementById("title")
const no_wait_text = document.getElementById("no-wait-text")
const time_to_close_text = document.getElementById("time-to-close-text")

if (language_storage === "english") {

  text_1 = "Hey, you're about to open a social media site!"
  top_text_left = "Closed"
  top_text_right = "times today"
  bottom_text_text = "if you like the project, give it a ☆ on"

  if (english_checkbox && french_checkbox && portuguese_checkbox && spanish_checkbox && title && settings_p && no_wait_text) {
    
    english_checkbox.parentNode.lastChild.textContent = "English"
    french_checkbox.parentNode.lastChild.textContent = "French"
    portuguese_checkbox.parentNode.lastChild.textContent = "Portuguese"
    spanish_checkbox.parentNode.lastChild.textContent = "Spanish"
    title.innerText = "Social Medias:",
    settings_p.innerText = "Settings:",
    no_wait_text.innerText = "No wait to close"
    time_to_close_text.innerText = "Time to close"
  
  }

} else if (language_storage === "portuguese")  {

  text_1 = "Ei, você está prestes a abrir uma rede social!"
  top_text_left = "Fechado"
  top_text_right = "vezes hoje"
  bottom_text_text = "Se você gostou do projeto dê uma ☆ no "

  if (english_checkbox && french_checkbox && portuguese_checkbox && spanish_checkbox && title && settings_p) {
    
    english_checkbox.parentNode.lastChild.textContent = "Inglês"
    french_checkbox.parentNode.lastChild.textContent = "Francês"
    portuguese_checkbox.parentNode.lastChild.textContent = "Português"
    spanish_checkbox.parentNode.lastChild.textContent = "Espanol"
    title.innerText = "Redes sociais:"
    settings_p.innerText = "Configurações:"
    no_wait_text.innerText = "Sem espera para fechar"
    time_to_close_text.innerText = "Tempo para fechar"
  }

} else if (language_storage === "spanish") {

  text_1 = "¡Oye! Estás a punto de abrir una red social."
  top_text_left = "Cerrado"
  top_text_right = "veces hoy"
  bottom_text_text = "Si te gusta el proyecto, danos una ☆ en "

  if (english_checkbox && french_checkbox && portuguese_checkbox && spanish_checkbox && title && settings_p) {
    
    english_checkbox.parentNode.lastChild.textContent = "Inglés"
    french_checkbox.parentNode.lastChild.textContent = "Francés"
    portuguese_checkbox.parentNode.lastChild.textContent = "Portugués"
    spanish_checkbox.parentNode.lastChild.textContent = "Español"
    title.innerText = "Redes sociales:"
    settings_p.innerText = "Configuración:"
    no_wait_text.innerText = "Sin espera para cerrar"
    time_to_close_text.innerText = "Tiempo para cerrar"
  
  }

}  else if (language_storage === "french") {

  text_1 = "Hé ! Tu es sur le point d'ouvrir un réseau social !"
  top_text_left = "Fermé"
  top_text_right = "fois aujourd'hui"
  bottom_text_text = "Si tu aimes ce projet, ajoute une ☆ sur "

  if (english_checkbox && french_checkbox && portuguese_checkbox && spanish_checkbox && title && settings_p) {
    
    english_checkbox.parentNode.lastChild.textContent = "Anglais"
    french_checkbox.parentNode.lastChild.textContent = "Français"
    portuguese_checkbox.parentNode.lastChild.textContent = "Portugais"
    spanish_checkbox.parentNode.lastChild.textContent = "Espagnol"
    title.innerText = "Réseaux sociaux :"
    settings_p.innerText = "Paramètres :"
    no_wait_text.innerText = "Fermer sans attendre"
    time_to_close_text.innerText = "Temps pour fermer"
  }
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

const social_media_names = {
  facebook, instagram, tiktok, reddit, youtube, x, discord, linkedin, 
  snapchat, pinterest, threads, whatsapp, telegram, mastodon, twitch, 
  bluesky, messenger
};

activate_button.forEach(button => {

  const platform = button.id.replace("-button", "");
  const icon = document.getElementById(`${platform}-icon`);


  if (social_media_names[platform] && icon) {
    button.classList.add("activate_button_clicked");
    icon.style.color = "#152549";
  }
});

activate_button.forEach(button => {
  button.addEventListener("click", async () => {

    const platform = button.id.replace("-button", "");
    const icon = document.getElementById(`${platform}-icon`);
    social_media_names[platform] = !config[platform];
    button.classList.toggle("activate_button_clicked", social_media_names[platform]);

    if (icon) {
      icon.style.color = social_media_names[platform] ? "#152549" : "#989898";
    }

    await browser.storage.local.set({
      [platform]: social_media_names[platform]
    });
    
  });
});

let social_media_sites = [
  "facebook.com",
  "instagram.com",
  "tiktok.com",
  "reddit.com",
  "youtube.com",
  "twitch.tv",
  "x.com", "twitter.com",
  "whatsapp.com", "web.whatsapp.com",
  "messenger.com",
  "telegram.org", "web.telegram.org",
  "discord.com",
  "linkedin.com",
  "snapchat.com",
  "pinterest.com",
  "threads.net",
  "bsky.app", 
  "mastodon.social", 
  "mastodon.online", 
  "mstdn.social", 
  "mastodon.world", 
  "pawoo.net",
  "infosec.exchange",
  "fosstodon.org",   
  "me.dm"           
];

if (instagram === false) { social_media_sites = social_media_sites.filter(item => item !== "instagram.com");}
if (facebook === false) { social_media_sites = social_media_sites.filter(item => item !== "facebook.com");}
if (tiktok === false) { social_media_sites = social_media_sites.filter(item => item !== "tiktok.com");}
if (reddit === false) { social_media_sites = social_media_sites.filter(item => item !== "reddit.com");}
if (youtube === false) { social_media_sites = social_media_sites.filter(item => item !== "youtube.com");}
if (twitch === false) { social_media_sites = social_media_sites.filter(item => item !== "twitch.tv");}
if (x === false) { social_media_sites = social_media_sites.filter(item => item !== "x.com" && item !== "twitter.com");}
if (whatsapp === false) { social_media_sites = social_media_sites.filter(item => item !== "web.whatsapp.com");}
if (messenger === false) { social_media_sites = social_media_sites.filter(item => item !== "messenger.com");}
if (telegram === false) { social_media_sites = social_media_sites.filter(item => item !== "web.telegram.org");}
if (discord === false) { social_media_sites = social_media_sites.filter(item => item !== "discord.com");}
if (linkedin === false) { social_media_sites = social_media_sites.filter(item => item !== "linkedin.com");}
if (snapchat === false) { social_media_sites = social_media_sites.filter(item => item !== "snapchat.com");}
if (pinterest === false) { social_media_sites = social_media_sites.filter(item => item !== "pinterest.com");}
if (threads === false) { social_media_sites = social_media_sites.filter(item => item !== "threads.net");}
if (bluesky === false) { social_media_sites = social_media_sites.filter(item => item !== "bsky.app");}


if (mastodon === false) { 

  social_media_sites = social_media_sites.filter(item => 
    item !== "mastodon.social" && 
    item !== "mastodon.online" && 
    item !== "mstdn.social" && 
    item !== "mastodon.world" && 
    item !== "pawoo.net" && 
    item !== "infosec.exchange" && 
    item !== "fosstodon.org" && 
    item !== "me.dm"
  );

}

const siteEncontrado = social_media_sites.find(site => location.hostname.includes(site));

const response = await browser.runtime.sendMessage({
  action: "check_reload",
  site: siteEncontrado
});


if (response && response.should_activate === false) {

  return;

} 

if (!siteEncontrado) return;











const font_1 = new FontFace(
  "SpaceGrotesk",
  `url(${browser.runtime.getURL("Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf")})`
);

const font_2 = new FontFace(
  "Sniglet",
  `url(${browser.runtime.getURL("Sniglet/Sniglet-Regular.ttf")})`
);

const font_3 = new FontFace(
  "Nunito",
  `url(${browser.runtime.getURL("Nunito/Nunito-Medium.ttf")})`
);


font_1.load().then((loadedFont) => {

  document.fonts.add(loadedFont);

});

font_2.load().then((loadedFont) => {

  document.fonts.add(loadedFont);

});

font_3.load().then((loadedFont) => {

  document.fonts.add(loadedFont);

});


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
const content = document.createElement('div')

background.style.all = "initial"
background.style.width = '100vw'
background.style.height = '100vh'
background.style.display = 'flex'
background.style.backgroundColor = '#ffffff55'
background.style.alignItems = 'center'
background.style.justifyContent = 'center'
background.style.zIndex = '99999999999'
background.style.top = '0'
background.style.left = '0'
background.style.position = 'fixed'

content.style.all = "initial"
content.style.width = '520px'
content.style.height = '480px'
content.style.borderRadius = '5px'
content.style.backgroundImage = `url(${browser.runtime.getURL('imgs/background.png')})`
content.style.backgroundRepeat = 'no-repeat'
content.style.backgroundSize = 'contain'
content.style.backgroundPosition = 'center'
content.style.padding = "30px"
content.style.display = 'flex'
content.style.flexDirection = 'column'
content.style.color = "black"
content.style.boxSizing = 'border-box'
content.style.fontFamily = "Arial, sans-serif"
content.style.position = "relative"


const black_cat_img = document.createElement('img');
const top = document.createElement('div');
const top_text = document.createElement('p');
const close_button = document.createElement('button');
const top_division = document.createElement('hr');
const middle = document.createElement('div');
const text_box = document.createElement('div');
const line_one = document.createElement('p');
const img_box_box = document.createElement('div');
const bottom = document.createElement('div');
const bottom_text = document.createElement('p');
const github_link = document.createElement('a');


top_text.textContent = `${top_text_left} ${times_closed} ${top_text_right}`;
line_one.textContent = text_1; 
bottom_text.textContent = bottom_text_text;


top.append(top_text, close_button);
text_box.append(line_one);
middle.append(text_box, img_box_box);
bottom.append(bottom_text);
bottom_text.appendChild(github_link);


content.append(
  black_cat_img, 
  top, 
  top_division, 
  middle, 
  bottom
);

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

top.style.width = "100%"
top.style.height = "45px"
top.style.paddingRight = "10px"
top.style.paddingLeft = "15px"
top.style.paddingBottom = "5px"
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

bottom.style.fontWeight = "500"
bottom.style.width = "100%"
bottom.style.display = "flex"
bottom.style.height = "40px"
bottom.style.flexDirection = "row"
bottom.style.justifyContent = "space-between"
bottom.style.alignItems = "flex-end"
bottom.style.padding = "8px"
bottom.style.setProperty("font-size", "14px", "important")

let img_folder = 0
let cat_number = 0

const img_box = document.createElement("div")
const img = document.createElement("img");

img_box_box.style.width = "100%"
img_box_box.style.height = "82%"
img_box_box.style.display = "flex"
img_box_box.style.justifyContent = "center"
img_box_box.style.alignItems = "center"

img_box.style.width = "220px"
img_box.style.height = "220px"
img_box.style.display = "flex"
img_box.style.overflow = "hidden"
img_box.style.borderRadius = "10px"
img_box.style.border = "3px solid black"
img_box.style.marginTop = "-10px"
img_box.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.37)"

img.style.width = "100%"
img.style.height = "100%"
img.style.objectFit = "cover"

black_cat_img.src = `${browser.runtime.getURL("imgs/black-cat.png")}`
black_cat_img.style.width = "300px"
black_cat_img.style.position = "absolute"
black_cat_img.style.top = "-54px"
black_cat_img.style.right = "-25px"

github_link.href = "https://github.com/anthonyygs/take-a-pawse"
github_link.textContent = " GitHub"
github_link.style.color = "#3662c1"
github_link.style.textDecoration = "underline"
github_link.style.cursor = "pointer"


if (times_closed < 10 ) {

  img_folder = times_closed

} else {

  img_folder = 10

}

if (img_folder === 0) { cat_number = (Math.floor(Math.random() * 5)) + 1;

} else if (img_folder !== 10) {

  cat_number = (Math.floor(Math.random() * 3)) + 1;
  
} else {

  cat_number = (Math.floor(Math.random() * 15)) + 1;

}

img.src =  browser.runtime.getURL(`cats/${img_folder}/${cat_number}.gif`)

img_box.append(img)
middle.append(img_box_box)
img_box_box.append(img_box)

text_box.style.width = "100%"
text_box.style.height = "18%"
text_box.style.display = "flex"
text_box.style.flexDirection = "column"
text_box.style.gap = "14px"

top_text.style.fontSize = "15px"
top_text.style.color = "#000000"
top_text.style.setProperty("font-size", "14.5px", "important")
top_text.style.fontFamily = "Nunito"

bottom_text.style.setProperty("font-size", "14px", "important")
bottom_text.style.color = "#212121"
bottom_text.style.fontFamily = "SpaceGrotesk"
bottom_text.style.paddingBottom = "4px"
bottom_text.style.width = "100%"
bottom_text.style.textAlign = "center"

close_button.style.zIndex = "9999999999999999999"
close_button.style.width = "25px"
close_button.style.height = "25px"
close_button.style.display = "flex"
close_button.style.justifyContent ="center"
close_button.style.alignItems = "center"
close_button.style.color = "#484848"
close_button.style.fontSize = "17px"

top_division.style.margin = "0"
top_division.style.color = "rgba(163, 163, 163, 0.452)"

line_one.style.color = "#000000"
line_one.style.fontSize = "20px"
line_one.style.fontFamily = "Sniglet"
line_one.style.fontWeight = "500"
line_one.style.width = "100%"
line_one.style.paddingTop = "2px"
line_one.style.paddingBottom = "2px"
line_one.style.lineHeight = "26px"
line_one.style.textAlign = "center"
line_one.textContent = text_1

let interval;

function count() {
  if (time_to_count > 0) {

    close_button.innerText = time_to_count;
    time_to_count--;

  } else {

    close_button.innerText = '';
    close_button.style.backgroundImage = `url(${browser.runtime.getURL('imgs/x.png')})`
    close_button.style.backgroundRepeat = 'no-repeat'
    close_button.style.backgroundSize = 'contain'
    close_button.style.backgroundPosition = 'center'
    close_button.style.cursor = "pointer";
    time_end = true; 
    
    if (interval) {

      clearInterval(interval);

    }

    setInterval(() => { 
      
      black_cat_img.src = `${browser.runtime.getURL("imgs/black-cat-sleeping.png")}`

     }, 500);
  }
}

count();

if (!time_end) {
  interval = setInterval(count, 1000);
}

close_button.addEventListener("click", () => {

  if (time_end) {

    background.remove()
    times_closed++
    browser.storage.local.set({ times_closed_storage: times_closed })
  
  }
})


})();