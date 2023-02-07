import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    {title: "search Engines", url: "/folder/search-engines", icon: "search-outline"},
    {title: "Chatting Apps", url: "/folder/chatting-apps", icon: "paper-plane"},
    {title: "Streaming Unimited", url: "/folder/streaming-unlimited", icon: "time-outline"},
    {title: "cloud/downloads", url: "/folder/cloud-downloads", icon: "cloud-outline"},
    {title: "Youtube + social media", url: "/folder/youtube-social", icon: "happy-outline"},
    {title: "Video editors", url: "/folder/video-editors", icon: "desktop"}
  ];

  constructor() {}
}
