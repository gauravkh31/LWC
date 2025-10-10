import { LightningElement } from 'lwc';

export default class RenderListDemo extends LightningElement {


    superStars = ["spiderman", "superman", "batman", "ironman", "captain america", "thor"];


    arrayOfObjects = [
        { id: 1, fname: "spiderman", lname:"sharma", age: 21 },
        { id: 2, fname: "superman", lname:"verma", age: 25 },
        { id: 3, fname: "batman", lname:"gupta", age: 23 },
        { id: 4, fname: "ironman", lname:"singh", age: 27 },
        { id: 5, fname: "captain america", lname:"kumar", age: 22 },
        { id: 6, fname: "thor", lname:"yadav", age: 24 }
    ]
}