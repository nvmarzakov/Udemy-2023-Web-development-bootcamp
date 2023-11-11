function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        let numberOfPeoples = names.length;
        let  randomName = Math.floor(Math.random() * numberOfPeoples);
        let randomPerson = names[randomName]

        return `${randomPerson} is going to buy lunch today!`
       
       
        
        
    
    
    /******Don't change the code below*******/    
    }

    console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));
