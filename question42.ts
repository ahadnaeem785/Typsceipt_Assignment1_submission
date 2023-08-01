let Magicians=["Albert","Cena","Jack"]

function make_great(mag:string[]){
    for(let i=mag.length - 1;i>=0;i--){
       mag[i] = "The Great " + mag[i]
    }
    return mag
}

function show_magician(mag:string[]){
    for(let i=0;i<mag.length;i++){
       console.log(mag[i])
    }
}

Magicians = make_great(Magicians);
// console.log(Magicians);

show_magician(Magicians);