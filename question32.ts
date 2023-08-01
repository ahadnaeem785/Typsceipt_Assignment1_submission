let current_users=["Ahad","Saif","Zain","Abdullah","Asad"]
let new_users=["Ahad","Asad","Hamza","Noman","Raza"]
for(let i of new_users){

    if(current_users.includes(i)){
        console.log(`${i} is need to enter a new username`);
        
    }else{
        console.log(`${i} Username is available`);
        
    }
}
  