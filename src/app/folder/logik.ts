import *as db from "./db"
export function listSort(){

for (let key in db.alleListen) {
    let value = db.alleListen[key];
   if(value.length >= 1){
    var diezahl = Math.round(Math.random()* (value.length))
  
   if(diezahl >= value.length-1)
    {
        diezahl = value.length-1
    }
   
  if(diezahl != 0){
        arrayMove(value,diezahl,diezahl-1);
  }
  
  
  db.alleListen[key] = value;
   diezahl = Math.round(Math.random()*(value.length))
   if(diezahl >= value.length-1)
   {
    diezahl = value.length-1;
    value.splice(diezahl,1)

   }
   else
   {
    arrayMove(value,diezahl, diezahl + 1);

    }

}
}
}
function arrayMove(arr: any[], from: number, to: number){
    arr.splice(to, 0, arr.splice(from, 1)[0]);
}


class listMemba{
   initPos: number;
    title: string;
    link: string;
    incfirst: number;

   constructor(pos: number, titlee: string, link: string, inc: number){
this.initPos = pos;
this.title = titlee;
this.link = link;
this.incfirst = inc;
   }
}