"use strict";

const person = {
    name: "John",
    phone: "+79989598",
    parents: {
        mom: 'Oleg',
        dad: 'Mike'
    }
}

const clone = JSON.parse(JSON.stringify(person));

person.parents.mom = 'Ann';

console.log(person);
console.log(clone);