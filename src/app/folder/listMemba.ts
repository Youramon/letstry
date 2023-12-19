export enum Richtung {
    None,
    Down,
    Up,
    StrongUp,
    StrongDown,
  }
export class listMemba{
    initPos: number;
     title: string;
     link: string;
     incfirst: number;
     movement: Richtung;
  
  
    constructor(title: string, initPos: number,  link: string, incfirst = 0, movement: Richtung = 0){
  this.initPos = initPos;
  this.title = title;
  this.link = "https://" + link;
  this.incfirst = incfirst;
  this.movement = movement;
    }
  }