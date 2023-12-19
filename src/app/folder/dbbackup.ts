import { listMemba } from "./listMemba";

export const searchEngineBU: listMemba[] = [];
export const chattingAppsBU: listMemba[] = [];
export const streamingUnlimitedBU: listMemba[] = [];
export const cloudsBU: listMemba[] = [];
export const youtubesocialsBU: listMemba[] = [new listMemba("Tiktok L",28,"tiktok.com")];
export const videoEditorsBU: listMemba[] = [new listMemba("movie maker online",27,"moviemakeronline.com"),new listMemba("kostenpflichtiges Programm",29,"google.com"), new listMemba("Alternative zu Platz 2",28,"app.store.com"), new listMemba("jetziges Humble Bundle Angebot",27,"humblebundle.com")];

export const alleListenBU: {[key: string]: listMemba[]} = {"search-engines": searchEngineBU, "chatting-apps": chattingAppsBU, "streaming-unlimited": streamingUnlimitedBU, "cloud-downloads":cloudsBU,"video-editors": videoEditorsBU, "youtube-social": cloudsBU};
export const alleListenBUStr: {[key: string]: string} = {"chatting-apps": "chattingAppsBU","search-engines": "searchEnginesBU" , "streaming-unlimited": "streamingUnlimitedBU", "cloud-downloads": "cloudsBU", "youtube-social": "youtubesocialsBU", "video-editors": "videoEditorsBU"}