let guestsx:string[]=["Hamza","Abdullah","Zain"];
for(let people of guestsx){
    console.log(`hey ${people},today your dinner is at my home.`);  
}
console.log("Hey everyone!I found a bigger dinner table");
guestsx.push("Jahanzaib");
guestsx.splice(2,0,"Asad")
guestsx.unshift("Ahad");
console.log("NEW GUESTS");
console.log(guestsx);
console.log("INVITATION");
for(let peeps of guestsx){
  console.log(`hey ${peeps} today your dinner is at my home.`);   
}
console.log("SORRY GUYS! I CAN INVITE ONLY TWO GUESTS");
  
// console.log(`Soory ${guestsx[5]} i cant invite you on dinner`);
// guestsx.pop()
// console.log(`Sorry ${guestsx[4]} i cant invite you on dinner`);
// guestsx.pop()
// console.log(`Sorry ${guestsx[3]} i cant invite you on dinner`);
// guestsx.pop()
// console.log(`Sorry ${guestsx[2]} i cant invite you on dinner`);
// guestsx.pop()
// 
// console.log(guestsx)

for(let i = guestsx.length; i>2; i--){
  let out = guestsx.pop()
  console.log(out, " Removed from dinner list")
}
for(let peeps of guestsx){
    console.log(`Hey ${guestsx}!I invite you to dinner today`);
  }
  guestsx.pop()
  guestsx.pop()
  console.log(guestsx);
  console.log("The list is Empty");










