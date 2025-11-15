import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: false
})
export class AppComponent {
  public appPages = [
    {title: "Search Engines", url: "/folder/search-engines", icon: "search-outline"},
    {title: "Chat Bots", url: "/folder/chat-bots", icon: "chatbubbles-outline"},
    {title: "Chatting Apps", url: "/folder/chatting-apps", icon: "paper-plane"},
    {title: "Streaming Unlimited", url: "/folder/streaming-unlimited", icon: "time-outline"},
    {title: "Cloud/Downloads", url: "/folder/cloud-downloads", icon: "cloud-outline"},
    {title: "Youtube + Social Media", url: "/folder/youtube-social", icon: "happy-outline"},
    {title: "Video Editors", url: "/folder/video-editors", icon: "desktop"},
    {title: "Email", url: "/folder/email", icon: "mail-outline"}
  ];

  constructor(private platform: Platform) {
    this.initializeApp();
}
initializeApp() {
  this.platform.ready().then(() => {
    // Function to run when the app is first opened
    this.doSomething();
  });
}
async doSomething() {
  console.log("DO SOMETHING")
}
}
