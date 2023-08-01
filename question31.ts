let username=["admin","ahad","ahmad","asad","akbar"]

if(username.length>0){
console.log("Array is not empty");
}else{
    console.log("We need to find some users");
}

for(let i=username.length;i>0;i--)
{
    let out=username.pop();
}
console.log(username);

if(username.length==0){
    console.log("We need some users");
}




