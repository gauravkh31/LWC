import { LightningElement } from 'lwc';

export default class MyComp2 extends LightningElement {
    carList = ["ford", "honda", "bmw", "audi", "toyota", "volvo", "tesla", "jeep","ford"];


    programmingList = [
    {
      id: "06868",
      language: "HTML"
    },
    {
      id: "19797",
      language: "CSS"
    },
    {
      id: "298789",
      language: "Javascript"
    },
    {
      id: "398798",
      language: "Apex"
    },
    {
      id: "48967",
      language: "Aura"
    },
    {
      id: "58798",
      language: "Java"
    }
  ];


  ceoList = [
    {
      id: "1",
      name: "Satya Nadella", 
      company: "microsoft"
    },
    {
      id: "2",
      name: "Tim Cook", 
      company: "apple"
    },
    {
      id:   "3",
      name: "Mark Zuckerberg", 
      company: "facebook"
    },
    {
      id: "4",
      name: "Jeff Bezos", 
      company: "amazon"
    },
    {
      id: "5",
      name: "Larry Page", 
      company: "google"
    },
    {
      id: "6",
      name: "Sundar Pichai", 
      company: "google"
    }
  ]
}