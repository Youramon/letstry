class listMemba{
    initPos: number;
     title: string;
     link: string;
     incfirst: number;
     movement: number;
  
  
    constructor(title: string, initPos: number,  link: string, incfirst = 0, movement: number= 0){
  this.initPos = initPos;
  this.title = title;
  this.link = "https://" + link;
  this.incfirst = incfirst;
  this.movement = movement;
    }
  }

export const searchEngines = [new listMemba("Bing",4,"bing.com"), new listMemba("dogpile", 12,"dogpile.com"),new listMemba("Aol", 20, "Aol.com"),  new listMemba("kagi",1,"kagi.com"),new listMemba("etour", 18,"etour.com"), new listMemba("google", 7,"google.com")];

export const chattingApps = [new listMemba("Messages by Google",8,"messages.google.com"),new listMemba("WhatsApp",4,"play.google.com/store/apps/details?id=com.whatsapp&hl=en&gl=US&pli=1"),new listMemba("Cubie",47, "www.techinasia.com/featured-google-play-store-lessons-cubie-messenger"),  new listMemba("LINE", 10,"line.me"),new listMemba("Apple Nachrichten",6,"support.apple.com/de-de/messages"), new listMemba("Facebook messenger", 15,"Messenger.com")]

export const streamingUnlimited = [new listMemba("DoodStream",14,"doodstream.com"), new listMemba("HighStream",32,"highstream.tv"), new listMemba("dubz",38,"dubz.co"), new listMemba("UpToBox",4,"uptobox.com"),new listMemba("Supervideo",40,"supervideo.tv"), new listMemba("mixdrop.co",20,"mixdrop.co")]

export const clouds = [new listMemba("Storj",40,"storj.io"),new listMemba("bacloud",45,"www.bacloud.com/en/cloud-drive"),new listMemba("Mail.ru Cloud",3,"cloud.mail.ru"),new listMemba("dropbox",13,"dropbox.com"),new listMemba("uptobox.com",5,"uptobox.com"),new listMemba("iCloud",20,"icloud.com"), new listMemba("OneDrive",3,"Onedrive.live.com"),new listMemba("Yandex.disk",26,"disk.yandex.com/?source=hostroot_desktop_new"),new listMemba("Filecoin",9,"filecoin.io"), new listMemba("Google drive",1,"drive.google.com/drive/u/0/my-drive"), ]

export const youtubesocials = [new listMemba("Facebook.com",1,"Facebook.com"), new listMemba("youtube.com",2,"youtube.com"), new listMemba("Newgrounds.com",3,"Newgrounds.com"), new listMemba("Veoh.com",4,"veoh.com"), new listMemba("joinpeertube.org",5,"joinpeertube.org"), new listMemba("9GAG",6,"9gag.com"), new listMemba("4shared.com",7,"4shared,com"), new listMemba("Dailymotion",8,"Dailymotion.com"), new listMemba("DTube",9,"d.tube"), new listMemba("reddit",10,"reddit.com"), new listMemba("Vimeo",11,"Vimeo.com"), new listMemba("Liveleak.com",12,"Liveleak.com"), new listMemba("Instagram",14,"Instagram.com"), new listMemba("Internet Archive",15,"archive.org"), new listMemba("Tumblr",16,"tumblr.com"), new listMemba("Bitchute",17,"bitchute.com"), new listMemba("Odysee.com",18,"Odysee.com"), new listMemba("Pinterest",19,"Pinterest.com"), new listMemba("Twitch.tv",20,"Twitch.tv"), new listMemba("Twitter",21,"Twitter.com"), new listMemba("iFunny",22,"ifunny.co"), new listMemba("Imgflip",23,"imgflip.com"), new listMemba("MeWe",24,"mewe.com"), new listMemba("Vero",25, "Vero.co"), new listMemba("Minds.com",26,"Minds.com"), new listMemba("4chan.org",27,"4chan.org")]

export const videoEditors = [new listMemba("Shotcut",2,"Shotcut.org",4), new listMemba("VSDC Video editor Pro",5,"videosoftdev.com"), new listMemba("Magix vegas Pro 16 edit",1,"www.vegascreativesoftware.com/index.php?id=351&_oB=vegas-pro-365&_oC=subscription&_oD=12m1m&L=25&AffiliateID=149&phash=0xe1EsmN8WOp27sZ&pk_campaign=Brand_Vegas_Pro_DE_(G)&pk_kwd=magix%20vegas%20pro&pk_source=googleAds&pk_medium=cpc&pk_content=615755549455&gclid=CjwKCAiA_6yfBhBNEiwAkmXy5-zT-R26PQd-RHDWdXHvU0CxPhCCNuSB-6pOMk_5_pkLT9ZOn1qgxhoC89QQAvD_BwE"),new listMemba("Openshot",6,"www.openshot.org")]

export const alleListen: {[key: string]: listMemba[]} = {"chatting-apps": chattingApps, "search-engines": searchEngines, "streaming-unlimited": streamingUnlimited, "cloud-downloads": clouds, "youtube-social": youtubesocials, "video-editors": videoEditors};

export const alleListenStr: {[key: string]: string} = {"chatting-apps": "chattingApps","search-engines": "searchEngines" , "streaming-unlimited": "streamingUnlimited", "cloud-downloads": "clouds", "youtube-social": "youtubesocials", "video-editors": "videoEditors"}

export var popover: any;
export function setPopover(po: any) { popover = po; }









