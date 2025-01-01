
        // singleton  (study in next file)
        // object.create


        //object literals


        let sym=Symbol();

        let jsUser={
            name:"raza",
            "lname":"siddique",
            [sym]:"symbol",
            age:22,
            location:"bhopal",
            email:"raza11@gmail.com",
            isLoggedIn:false,
            Hobbies:["badminto","driving"]
        }

        console.log(jsUser.email);
        console.log(jsUser["lname"]);
        console.log(jsUser[sym]);
        
        Object.freeze(jsUser)   // object will not change  

        jsUser.email="newmail.com" //change the value of key
        console.log(jsUser.email);

        console.log(jsUser);
        

        jsUser.greeting=function(){

            console.log(`hello js in function, ${this.name}`);

        }     // check first that jsUser(object) should not be freezed
        console.log(jsUser.greeting());
        