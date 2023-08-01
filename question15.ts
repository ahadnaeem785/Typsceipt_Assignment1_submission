let guests:string[]=["Saif","Abdullah","Zain"]
for(let people of guests){
    console.log(`hey ${people},today your dinner is at my home.`);
    
}
console.log(guests[0]+" is not coming");
guests.shift()
guests.unshift("Ahad")
for(let people of guests){
    console.log(`hey ${people},today your dinner is at my home.`);
    
}