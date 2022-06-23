const axios = require('axios');
const people = require("./people"); 

//helper method to get full list of people in people.JSON file
async function PeopleDetails() {
    let { data } = await axios.get('http://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data;
};

//helper method to get full list of weather in weather.JSON file
async function weatherDetails() {
    let { data } = await axios.get('http://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json');
    return data;
};


async function errorChecking(val1, val2){ 
    if(val1 === null || val2 === null) { throw "Error: The input name is null."};     
    if(val1 === undefined || val2 === undefined) { throw "Error: The input name is undefined.";}
    if(typeof(val1) != 'string' || typeof(val2) != 'string') { throw "Error: The input name is not found in the data.";}
}

async function shouldTheyGoOutside(firstName, lastName) {
    weatherdeets = await weatherDetails();
    peopledeets = await PeopleDetails();

    await errorChecking(firstName, lastName); 
    
    let peeps = peopledeets.find(peopledeets => peopledeets.firstName === firstName && 
                                                peopledeets.lastName === lastName); 
    
    if(peeps === null || peeps === undefined) {throw "Error: name is not found in data."};

    let weather = weatherdeets.find(weatherdeets => weatherdeets.zip === peeps.zip);
    
    if(weather.temp >= 34) {
        return "Yes, " + peeps.firstName + " should go outside.";
    } else {
        return "No, " + peeps.firstName + " should not go outside.";
    }
}

module.exports = { shouldTheyGoOutside }; 

