

export class listMemba{
    initPos: number;
     title: string;
     link: string;
     incfirst: number;
     movement: number;
  

    constructor(title: string, initPos: number,  link: string, incfirst = 0, movement = 0){
  this.initPos = initPos;
  this.title = title;
  this.link = "https://" + link;
  this.incfirst = incfirst;
  this.movement = movement;
    }
  }
export const searchEngineBU: listMemba[] = [new listMemba("excite.com",32,"excite.com"),new listMemba("Info",33,"Info.com"),new listMemba("Ekoru",30,"ekoru.org"), new listMemba("Fastbot.de",31,"Fastbot.de"), new listMemba("Epicsearch",16,"epicsearch.in"),new listMemba("Visymo",29,"search.visymo.com")];



export const chattingAppsBU = [new listMemba("Google Suche",61,"google.com"),new listMemba("Zoho",57,"messag.zoho.com"), new listMemba("Pokemon Showdown",54,"play.pokemonshown.net")];
export const streamingUnlimitedBU = [];
export const cloudsBU = [];
export const youtubesocialsBU = [new listMemba("Tiktok L",28,"tiktok.com")];
export const videoEditorsBU = [new listMemba("movie maker online",27,"moviemakeronline.com"),new listMemba("kostenpflichtiges Programm",29,"google.com"), new listMemba("Alternative zu Platz 2",28,"app.store.com")];


export var alleListenBU: {[key: string]: listMemba[]}= {"searchEngines": searchEngineBU, "chattingApps": chattingAppsBU, "streamingUnlimited": streamingUnlimitedBU, "clouds":cloudsBU, "youtubesocials": cloudsBU,"videoEditors": videoEditorsBU};

