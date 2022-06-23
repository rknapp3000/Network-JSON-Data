
const axios = require('axios');

//helper method to get full list of people in people.JSON file
async function PeopleDetails() {
    let { data } = await axios.get('http://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data;
};

async function peopleErrorChecking(val){ 
let people = await PeopleDetails();
if (val < 1 || val > people.length) { throw "Error: argument is out of bounds."}
if (val === null) {throw "Error: argument cannot be null."};
if (typeof val != 'number') {throw "Error: Invalid argument type."};
if (val === undefined) { throw" Error: value is undefined."};
}

async function getPersonById(id) {
    let people = await PeopleDetails();
    await peopleErrorChecking(id); 

    foundPerson = people[id - 1];

    return foundPerson.firstName + " " + foundPerson.lastName; 
};

async function lexIndex(index) {
    let people = await PeopleDetails();
    await peopleErrorChecking(index); 

    people.sort(function (a, b) {
        let firs = a.lastName
        let las = b.lastName;
        return firs.localeCompare(las);
    });
    return people[index].firstName + " " + people[index].lastName;
};

async function firstNameMetrics() {
    let people = await PeopleDetails();
    
    let letters = 0;
    let vowels = 0;
    let consonants = 0;
    let vowelList = "aeiouAEIOU";
    let shortest = people[0].firstName;
    let longest = "";
    let details = {};

    for (let i = 0; i < people.length; i++) {
        let first = people[i].firstName.split(' ').join(''); 
        letters = letters + first.length; 
        if (first.length >= longest.length)
        longest = first; 
        if (first.length < shortest.length)
        shortest = first; 
        for (let j = 0; j < first.length; j++) {
            if (vowelList.indexOf(first[j]) !== -1)
                vowels ++; 
            else
                consonants ++; 
        }
    }
    details['totalLetters'] = letters;
    details['totalVowels'] = vowels;
    details['totalConsonants'] = consonants;
    details['longestName'] = longest;
    details['shortestName'] = shortest;

    return details; 
};

module.exports = { getPersonById, lexIndex, firstNameMetrics }; 
