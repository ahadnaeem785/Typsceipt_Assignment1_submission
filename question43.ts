let magicians1:string[]=["Albert","Cena","Jack"]
let magicians2:string[]=["Albert","Cena","Jack"]
function Make_great(mag:string[]){
    for(let i=magicians2.length-1;i>=0;i--){
        mag[i]="The Great"+mag[i]
    }
    return mag
}
function Show_magician(mag:string[]){
    for(let i=0;i<magicians1.length;i++){
        console.log(mag[i]);
        
    }
}
magicians2=Make_great(magicians2)

Show_magician(magicians1)
Show_magician(magicians2)