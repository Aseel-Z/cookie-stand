'use strict'
function getRandomCustomers(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min  
}
let hours = ['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'];
const seattle = {
    location: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    total: 0,
    hrCookies:[],
    cookiePerHourCal: function(){
        for (let i = 0; i < hours.length; i++) {
           let cookiePerHour = Math.floor(getRandomCustomers(this.minCustomers,this.maxCustomers)*this.avgCookies);
           this.hrCookies.push(cookiePerHour);
           this.total +=  cookiePerHour;
        }
    },
    render: function(){

    this.cookiePerHourCal();

    const container = document.getElementById('sales');
    console.log(container);
    
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;
    const ulEl = document.createElement('ul');
    h2El.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li'); 
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.hrCookies[i]} cookies`;
    };
    const liEl1 = document.createElement('li');
    ulEl.appendChild(liEl1);
    liEl1.textContent = `Total: ${this.total} cookies`;
    },
     } 

console.log(seattle);


const tokyo = {
    location: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    total: 0,
    hrCookies:[],
    cookiePerHourCal: function(){
        for (let i = 0; i < hours.length; i++) {
           let cookiePerHour = Math.floor(getRandomCustomers(this.minCustomers,this.maxCustomers)*this.avgCookies);
           this.hrCookies.push(cookiePerHour);
           this.total +=  cookiePerHour;
        }
    },
    render: function(){

    this.cookiePerHourCal();

    const container = document.getElementById('sales');
    console.log(container);
    
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location
    const ulEl = document.createElement('ul');
    h2El.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li'); 
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.hrCookies[i]} cookies`;
    };
    const liEl1 = document.createElement('li');
    ulEl.appendChild(liEl1);
    liEl1.textContent = `Total: ${this.total} cookies`;
    },
     } 

console.log(tokyo);

const dubai = {
    location: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    total: 0,
    hrCookies:[],
    cookiePerHourCal: function(){
        for (let i = 0; i < hours.length; i++) {
           let cookiePerHour = Math.floor(getRandomCustomers(this.minCustomers,this.maxCustomers)*this.avgCookies);
           this.hrCookies.push(cookiePerHour);
           this.total +=  cookiePerHour;
        }
    },
    render: function(){

    this.cookiePerHourCal();

    const container = document.getElementById('sales');
    console.log(container);
    
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;
    const ulEl = document.createElement('ul');
    h2El.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li'); 
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.hrCookies[i]} cookies`;
    };
    const liEl1 = document.createElement('li');
    ulEl.appendChild(liEl1);
    liEl1.textContent = `Total: ${this.total} cookies`;
    },
     } 

console.log(dubai);


const paris = {
    location: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    total: 0,
    hrCookies:[],
    cookiePerHourCal: function(){
        for (let i = 0; i < hours.length; i++) {
           let cookiePerHour = Math.floor(getRandomCustomers(this.minCustomers,this.maxCustomers)*this.avgCookies);
           this.hrCookies.push(cookiePerHour);
           this.total +=  cookiePerHour;
        }
    },
    render: function(){

    this.cookiePerHourCal();

    const container = document.getElementById('sales');
    console.log(container);
    
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;
    const ulEl = document.createElement('ul');
    h2El.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li'); 
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.hrCookies[i]} cookies`;
    };
    const liEl1 = document.createElement('li');
    ulEl.appendChild(liEl1);
    liEl1.textContent = `Total: ${this.total} cookies`;
    },
     } 

console.log(paris);


const lima = {
    location: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    total: 0,
    hrCookies:[],
    cookiePerHourCal: function(){
        for (let i = 0; i < hours.length; i++) {
           let cookiePerHour = Math.floor(getRandomCustomers(this.minCustomers,this.maxCustomers)*this.avgCookies);
           this.hrCookies.push(cookiePerHour);
           this.total +=  cookiePerHour;
        }
    },
    render: function(){

    this.cookiePerHourCal();

    const container = document.getElementById('sales');
    console.log(container);
    
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;
    const ulEl = document.createElement('ul');
    h2El.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li'); 
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.hrCookies[i]} cookies`;
    };
    const liEl1 = document.createElement('li');
    ulEl.appendChild(liEl1);
    liEl1.textContent = `Total: ${this.total} cookies`;
    },
     } 

console.log(lima);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();