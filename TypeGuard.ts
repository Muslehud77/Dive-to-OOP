{
    // type guards
    // typeof --> type guard
        
    type Alphanumeric = string | number


    const add = (param1:Alphanumeric,param2:Alphanumeric): Alphanumeric=>{
        if(typeof param1==='number' && typeof param2 === 'number'){

            return param1+param2
        }else{
            return parseInt(param1.toString()) + parseInt(param2.toString()); 
        }

    }

    const res1 = add("2",3)
    console.log(res1);


    // in guard

    type NormalUser = {
        name:string;

    }

    type AdminUser ={
        name : string;
        role:"admin"
    }


    const getUser = (user : NormalUser | AdminUser)=>{
        if('role' in user){
            console.log(`My name is ${user.name} and i am the ${user.role}`);
        }else{
             console.log(`My name is ${user.name}`);
        }
        return
    }

    const user1 = {
         name:'x',
         role: 'admin'

    }

    const user2 = {
        name:"y"
    }

    console.log(getUser(user2));


}