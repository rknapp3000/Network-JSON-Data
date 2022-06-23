const people = require("./people"); 
const weather = require("./weather"); 
const work = require("./work"); 

async function main () { 
    console.log("testing getPersonById 1: ----------------------------------->"); 
    
    try {
        console.log(await people.getPersonById(43)); 
    } catch (error) {
        console.log(error); 
    }
    // try {
    //     console.log(await people.getPersonById(-1)); 
    // } catch (error) {
    //     console.log(error); 
    // }
    // try {
    //     console.log(await people.getPersonById(1000)); 
    // } catch (error) {
    //     console.log(error); 
    // }
    // try {
    //     console.log(await people.getPersonById()); 
    // } catch (error) {
    //     console.log(error); 
    // }

    console.log("\n"); 
    console.log("testing method 2 lexIndex: ----------------------------------->"); 
    
    try {
        console.log(await people.lexIndex(2));  
    } catch (error) {
        console.log(error); 
    }
    // try {
    //     console.log(await people.lexIndex(-1));  
    // } catch (error) {
    //     console.log(error); 
    // }
    // try {
    //     console.log(await people.lexIndex(1000));  
    // } catch (error) {
    //     console.log(error); 
    // }
    // try {
    //     console.log(await people.lexIndex());  
    // } catch (error) {
    //     console.log(error); 
    // }



    console.log("\n"); 
    console.log("testing method 3 firstNameMetrics: ----------------------------------->"); 
    
    try {
        console.log(await people.firstNameMetrics());  
    } catch (error) {
        console.log(error); 
    }
    
    console.log("\n"); 
    console.log("testing method 4 shouldTheyGoOutside: ----------------------------------->"); 
    
    try {
        console.log(await weather.shouldTheyGoOutside("Scotty", "Barajaz")); 
    } catch (error) {
        console.log(error); 
    }
    try {
        console.log(await weather.shouldTheyGoOutside("Calli", "Ondrasek")); 
    } catch (error) {
        console.log(error); 
    }
    // try {
    //     console.log(await weather.shouldTheyGoOutside()); 
    // } catch (error) {
    //     console.log(error); 
    // }
    // try {
    //     console.log(await weather.shouldTheyGoOutside("Bob")); 
    // } catch (error) {
    //     console.log(error); 
    // }
    // try {
    //     console.log(await weather.shouldTheyGoOutside("Bob", "Smith")); 
    // } catch (error) {
    //     console.log(error); 
    // }


    console.log("\n"); 
    console.log("testing method 5 whereDoTheyWork: ----------------------------------->"); 
    
    try {
        console.log(await work.whereDoTheyWork("Demetra", "Durrand")); 
    } catch (error) {
        console.log(error); 
    }
    try {
        console.log(await work.whereDoTheyWork("Hank", "Tarling")); 
    } catch (error) {
        console.log(error); 
    }
    // try {
    //     console.log(await work.whereDoTheyWork()); 
    // } catch (error) {
    //     console.log(error); 
    // }
    // try {
    //     console.log(await work.whereDoTheyWork("Bob")); 
    // } catch (error) {
    //     console.log(error); 
    // }
    // try {
    //     console.log(await work.whereDoTheyWork("Bob", "Smith")); 
    // } catch (error) {
    //     console.log(error); 
    // }


    console.log("\n"); 
    console.log("testing method 6 findTheHacker: ----------------------------------->"); 

    try {
        console.log(await work.findTheHacker("79.222.167.180")); 
    } catch (error) {
        console.log(error); 
    }
    // try {
    //     console.log(await work.findTheHacker("foobar")); 
    // } catch (error) {
    //     console.log(error); 
    // }
    // try {
    //     console.log(await work.findTheHacker()); 
    // } catch (error) {
    //     console.log(error); 
    // }


    console.log("\n"); 
}

main(); 