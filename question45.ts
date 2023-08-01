function CarInfo(manufacturer:string,model:string,...args:any[]):any{
let car:any={
    manufacturer,
    model,
};
for(let i=0;i<args.length;i+=2){
    let key=args[i];
    let value=args[i+1];
    car[key]=value;
  
};
return car
}
let mycar=CarInfo("Toyota","Camry","Color","Black","Extra_feature","Sunroof");
console.log(mycar);
