const axios = require('axios');
const net = require('net');

//helper method to get all of the data in people.JSON file
async function PeopleDetails() {
    let { data } = await axios.get('http://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data;
};

//helper method to get all of the data in work.JSON file 
async function workDetails() {
    let { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json');
    return data;
};

//ERROR CHECKING METHODS ----------------------------------------------
async function errorChecking(val1, val2) { 
    if (val1 === undefined || val1 === null) {
        throw "Error: The first name parameter is not defined."
    } else if (typeof val1 !== "string") {
        throw "Error: argument must be a string"
    }
    if (val2 === undefined || val2 === null) {
        throw "Error: The last name parameter is not defined"
    } else if (typeof val2 !== "string") {
        throw "Error: argument must be a string"
    }
}

async function ipErrorChecking(val){ 
    if(val === null || val === undefined){ throw "Error: Ip is undefined."};
    if(!net.isIPv4(val)){ throw "Error: IP address is an invalid type."};
};
// -------------------------------------------------------------------------------
// helper method for where do they work.
async function getPerson(firstName, lastName) {
    await errorChecking(firstName, lastName); //checking errors
    const people = await PeopleDetails(); //bringing in all of the data from the people.JSON file

    let person = people.find((person) => (person.firstName === firstName && 
                                          person.lastName === lastName)); //searching data

    if (!person) {
        throw firstName + " " + lastName + " was not found in data"
    }
    return person;
}

async function whereDoTheyWork(firstName, lastName) {
    const person = await getPerson(firstName, lastName);
    const worky = await workDetails();

    let workDeets = worky.find((workDeets => workDeets.ssn === person.ssn));
    let personDeets = firstName + " " + lastName + " - " + workDeets.jobTitle + " at " + workDeets.company

    if (workDeets.willBeFired) {
        personDeets = personDeets + ". They will be fired."
    } else {
        personDeets = personDeets + ". They will not be fired."
    }

    return personDeets;
}


async function findTheHacker(ip) { 
    workDeets = await workDetails();
    peopleDeets = await PeopleDetails();
    await ipErrorChecking(ip); 

    let w = workDeets.find(workDeets => workDeets.ip === ip)
    if(w === null || w === undefined) { throw "The hacker is not found in the data."}

    let p = peopleDeets.find(peopleDeets => peopleDeets.ssn === w.ssn)
    if(p !== null || p !== undefined)
    {
        return p.firstName + " " + p.lastName + " is the hacker!"
    }
};

module.exports = { whereDoTheyWork, findTheHacker }; 
