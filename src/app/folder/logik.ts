import *as db from "./db"
import *as dbbu from "./dbbackup"



export class listMemba{
  initPos: number;
   title: string;
   link: string;
   incfirst: number;
   movement: number;

   
  constructor(title: string, initPos: number,  link: string, incfirst = 0, movement: number = 0){
this.initPos = initPos;
this.title = title;
this.link = "https://" + link;
this.incfirst = incfirst;
this.movement = movement;
  }
}


export function listSort(folder: string){

for (let key in db.alleListen) {
    let value = db.alleListen[key];

    value.forEach(element => {
    element.movement = 0;
  });
    if(value.length > 1){
    var diezahl = Math.round(Math.random()* (value.length))
  
   if(diezahl >= value.length-1)    //doppelte Chance für letztes Dings
    {
        diezahl = value.length-1
    }
   
  if(diezahl != 0){                 
    if(diezahl == 1 && value[diezahl-1].incfirst > 0){
        value[diezahl-1].incfirst--;
        value[diezahl-1].movement = 2;
        
    }
    else{
    arrayMove(value,diezahl,diezahl-1);             //Zahl wird bewegt
    value[diezahl-1].movement = 2;  
  }  
}

  else if (diezahl == 0) {                          //Wenn die Zahl = 0 ist wird incfirst um 1 erhöht rolf
    value[0].incfirst++;
    value[diezahl].movement = 2;
  }
  
  
///////////////////////////////////////
//////AB HIER DANN RUNTER//////////////
//////////////////////////////////////  
  
  
  
  db.alleListen[key] = value;
   diezahl = Math.round(Math.random()*(value.length))
   if(diezahl >= value.length-1)
   {
    diezahl = value.length-1;
   
    dbbu.alleListenBU[folder].push(value.splice(diezahl,1)[0]);
    
    
   }
   else 
   {
    if(diezahl == 0 && value[diezahl].incfirst > 0)
    {
        value[diezahl].incfirst--;
        value[diezahl+1].movement = 1;
    }
    else{
    arrayMove(value,diezahl, diezahl + 1);
    value[diezahl+1].movement = 1;
    }
}


}
}

}
function arrayMove(arr: any[], from: number, to: number): void{
    arr.splice(to, 0, arr.splice(from, 1)[0]);
}

export function neueItemsRein(neuName: string, neuLink: string, liste: string)
{

  dbbu.alleListenBU[liste].splice(db.alleListen[liste].length-2,2);
db.alleListen[liste] = db.alleListen[liste].concat(dbbu.alleListenBU[liste]);
for (let item of db.alleListen[liste])
{
  item.initPos = db.alleListen[liste].indexOf(item) + 1;
}
db.alleListen[liste].push(new listMemba(neuName,db.alleListen[liste].length + 1, neuLink))
dbbu.alleListenBU[liste].splice(0);
return db.alleListen[liste];
}

