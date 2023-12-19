import *as db from "./db"
import { listMemba } from "./listMemba";
import *as dbbu from "./dbbackup";



export function listSort(folder: string) {
  
    let value = db.alleListen[folder]; //vielleicht entfernen rolf

    value.forEach(element => {
      element.movement = 0;
    });
    if (value.length > 1) {
      var diezahl = Math.round(Math.random() * (value.length+1))-1;

      if (diezahl >= value.length - 1)    //doppelte Chance für letztes Dings
      {
        diezahl = value.length - 1
      }

      if (diezahl > 0) {
        if (diezahl == 1 && value[0].incfirst > 0) {
          value[0].incfirst--;
          value[diezahl].movement = 2;
        }
        else {
           arrayMove(value, diezahl, diezahl - 1);             //Zahl wird bewegt
          value[diezahl - 1].movement = 2; // Up
        }
      }

      else if (diezahl <= 0) {                          //Wenn die Zahl = 0 ist wird incfirst um 1 erhöht rolf
        value[0].incfirst++;
        
        value[0].movement = 2;
      }


      ///////////////////////////////////////
      //////AB HIER DANN RUNTER//////////////
      //////////////////////////////////////



      db.alleListen[folder] = value;
      diezahl = Math.round(Math.random() * (value.length+1))-1;
      if (diezahl >= value.length - 1) {
        diezahl = value.length - 1;
        var temp = value.splice(diezahl, 1)[0];
        dbbu.alleListenBU[folder].push(temp);
        
       
      }
      else {
        if(diezahl <= 0){
          diezahl = 0;
        }
        if (diezahl == 0 && value[0].incfirst > 0) {
          value[0].incfirst--;
          
          value[0].movement = 1;
        }
        else {
          arrayMove(value, diezahl, diezahl + 1);
          value[diezahl + 1].movement = 1;
        }
      }


    }
  }

function arrayMove(arr: any[], from: number, to: number): void {
  
  arr.splice(to, 0, arr.splice(from, 1)[0]);
}

export function neueItemsRein(neuName: string, neuLink: string, liste: string) {
  db.alleListen[liste][0].incfirst = 0;
  if(dbbu.alleListenBU[liste].length <= 9){
    dbbu.alleListenBU[liste].shift();
  }
 else{ 
  dbbu.alleListenBU[liste].shift();
  dbbu.alleListenBU[liste].shift();
  dbbu.alleListenBU[liste].unshift(new listMemba(neuName, db.alleListen[liste].length + 1, neuLink))
}
  for (let i = dbbu.alleListenBU[liste].length-1;i>= 0; i--){
    db.alleListen[liste].push(dbbu.alleListenBU[liste][i])
  }
  for (let item of db.alleListen[liste]) {
    item.initPos = db.alleListen[liste].indexOf(item) + 1;
  }
  
  
  dbbu.alleListenBU[liste].splice(0);
  
  return db.alleListen[liste];
}


/* export async function arrayDownload() {
  const supabase: SupabaseClient = await createClient('https://vyszskhjcwuqmabooktk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5c3pza2hqY3d1cW1hYm9va3RrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDgwODk4NSwiZXhwIjoxOTk2Mzg0OTg1fQ.ML-V693c02_Wio1WdSzT-cSF88eicXDkGFl33PKQbpQ')

  for (let key in db.alleListen) {

    db.alleListen[key].splice(0);
    var { data } = await supabase.from(db.alleListenStr[key]).select('*')
    for (var i = 0; i < ((await supabase.rpc('row_count', { tablename: db.alleListenStr[key] })).data); i++) {
      var dasObjekt = data?.find(element => element?.["Platzierung"] == i)
      db.alleListen[key].push(new listMemba(dasObjekt?.['title'], dasObjekt?.['initPos'], dasObjekt?.['link'], dasObjekt?.['incfirst']))
    }


  }
}

async function arrayTest() 
{
  const supabase: SupabaseClient = await createClient('https://vyszskhjcwuqmabooktk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5c3pza2hqY3d1cW1hYm9va3RrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDgwODk4NSwiZXhwIjoxOTk2Mzg0OTg1fQ.ML-V693c02_Wio1WdSzT-cSF88eicXDkGFl33PKQbpQ')
  const result = await supabase
    .from('chattingAppsBU')
    .select('*');
  let firstRow = result.data?.[0]?.['title'];          // MERKEN!!!!!
  console.log(firstRow);
}

async function incFirst(newNum: number, key: string): Promise<void> {
  const supabase: SupabaseClient = await createClient('https://vyszskhjcwuqmabooktk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5c3pza2hqY3d1cW1hYm9va3RrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDgwODk4NSwiZXhwIjoxOTk2Mzg0OTg1fQ.ML-V693c02_Wio1WdSzT-cSF88eicXDkGFl33PKQbpQ')
  supabase.from(key).update({ incfirst: newNum }).eq('Platzierung', 0);
}


*/