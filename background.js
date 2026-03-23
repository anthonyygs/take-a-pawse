
const social_media_sites = [
  "facebook.com", "instagram.com", "tiktok.com", "reddit.com", "youtube.com",
  "twitch.tv", "x.com", "twitter.com", "whatsapp.com", "messenger.com",
  "telegram.org", "discord.com", "linkedin.com", "snapchat.com",
  "pinterest.com", "threads.net", "bsky.app", 
  "mastodon.social", 
  "mastodon.online", 
  "mstdn.social", 
  "mastodon.world", 
  "pawoo.net",
  "infosec.exchange",
  "fosstodon.org",   
  "me.dm"  
];


browser.runtime.onMessage.addListener((message, sender) => {
    
  if (message.action === "check_reload") {
    return (async () => {

      try {
        const tabId = sender.tab.id;
        const current_site = message.site;
     
        const last_site = await browser.sessions.getTabValue(tabId, "last_site_found");

        if (last_site === current_site) {
         
          return { should_activate: false };
        } else {
          
          await browser.sessions.setTabValue(tabId, "last_site_found", current_site);
          return { should_activate: true };
        }
      } catch (banana) {
        return { should_activate: true }; 
      }
    })();
  }
});


browser.tabs.onUpdated.addListener(async (tabId, change_info) => {

  if (change_info.url) {
    
    const url = new URL( change_info.url);
    
    const is_social_media = social_media_sites.some(site => url.hostname.includes(site));

    if (!is_social_media) {

      await browser.sessions.removeTabValue(tabId, "last_site_found");
    }
  }
});