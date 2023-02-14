 
import *as logik from "./logik"

export const searchEngineBU: logik.listMemba[] = [new logik.listMemba("excite.com",32,"excite.com"),new logik.listMemba("Ekoru",30,"ekoru.org"), new logik.listMemba("Fastbot.de",31,"Fastbot.de"), new logik.listMemba("Epicsearch",16,"epicsearch.in")];
export const chattingAppsBU = [new logik.listMemba("Zoho",57,"messag.zoho.com")];
export const streamingUnlimitedBU = [];
export const cloudsBU = [];
export const youtubesocialsBU = [];
export const videoEditorsBU = [new logik.listMemba("kostenpflichtiges Programm",29,"google.com")];


export const alleListenBU: {[key: string]: logik.listMemba[]}= {"searchEngines": searchEngineBU, "chattingApps": chattingAppsBU, "streamingUnlimited": streamingUnlimitedBU, "clouds":cloudsBU, "youtubesocials": cloudsBU,"videoEditors": videoEditorsBU};