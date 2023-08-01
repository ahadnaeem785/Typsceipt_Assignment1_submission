let guestss:string[]=["Hamza","Abdullah","Zain"];
for(let people of guestss){
    console.log(`hey ${people},today your dinner is at my home.`);
    
}
console.log("Hey everyone!I found a bigger dinner table");
guestss.unshift("Ahad");
guestss.push("Jahanzaib");
guestss.splice(2,0,"Asad")
console.log("NEW GUESTS");
console.log(guestss);
console.log("INVITATION");

for(let peeps of guestss){
    console.log(`hey ${peeps} today your dinner is at my home.`);
    
}



