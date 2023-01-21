import { NumberSymbol } from "@angular/common";
import *as db from "./db"
export function listSort(){

for (let key in db.alleListen) {
    let value = db.alleListen[key];
  value.forEach(element => {
    element.movement = 0;
  });
    if(value.length >= 1){
    var diezahl = Math.round(Math.random()* (value.length))
  
   if(diezahl >= value.length-1)    //doppelte Chance für letztes Dings
    {
        diezahl = value.length-1
    }
   
  if(diezahl != 0){                 
    if(diezahl == 1 && value[diezahl-1].incfirst > 0){
        value[diezahl-1].incfirst--;
    }
    else{
    arrayMove(value,diezahl,diezahl-1);             //Zahl wird bewegt
    }  
}

  else if (diezahl == 0) {                          //Wenn die Zahl = 0 ist wird incfirst um 1 erhöht rolf
    value[0].incfirst++;
  }
  value[diezahl-1].movement = 2;
  
///////////////////////////////////////
//////AB HIER DANN RUNTER//////////////
//////////////////////////////////////  
  
  
  
  db.alleListen[key] = value;
   diezahl = Math.round(Math.random()*(value.length))
   if(diezahl >= value.length-1)
   {
    diezahl = value.length-1;
    value.splice(diezahl,1)

   }
   else 
   {
    if(diezahl == 0 && value[diezahl].incfirst > 0)
    {
        value[diezahl].incfirst--
    }
    else{
    arrayMove(value,diezahl, diezahl + 1);
    }
}

value[diezahl+1].movement = 1;
}
}
}
function arrayMove(arr: any[], from: number, to: number){
    arr.splice(to, 0, arr.splice(from, 1)[0]);
}


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
