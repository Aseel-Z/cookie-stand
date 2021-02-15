'use strict'
function getRandomCustomers(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min  
}
let hours = ['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'];

function Store(location,minCustomers,maxCustomers,total,hrCookies) {
  this.location = 'Seattle';
  this.minCustomers = 23;
  this.maxCustomers = 65;
  this.avgCookies = 6.3;
  this.total = 0;
  this.hrCookies = [];
}

Store.prototype.cookiePerHourCal = function(){
  for (let i = 0; i < hours.length; i++) {
     let cookiePerHour = Math.floor(getRandomCustomers(this.minCustomers,this.maxCustomers)*this.avgCookies);
     this.hrCookies.push(cookiePerHour);
     this.total +=  cookiePerHour;
     console.table(this)
  }

Store.prototype.render = function(){

  this.cookiePerHourCal();

  const container = document.getElementById('sales');
  console.log(container);
  
  const articleEl = document.createElement('article');
  container.appendChild(articleEl);

  const tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);
 
  const thE1 = document.createElement('th');
  tableEl.appendChild(thE1);
  thE1.textContent = this.location

  for (let i = 0; i < 6; i++) {
    let trEl = document.createElement('td'); 
    table.appendChild(trEl);
    trEl.textContent = this.hrCookies[i];
  };
  
  for (let i = 0; i < hours.length; i++) {
    let tdEl = document.createElement('td'); 
    ulEl.appendChild(tdEl);
    liEl.textContent = `${hours[i]}: ${this.hrCookies[i]} cookies`;
  };
  const liEl1 = document.createElement('');
  ulEl.appendChild(liEl1);
  liEl1.textContent = `Total: ${this.total} cookies`;
  }



// const seattle = {
//     location: 'Seattle',
//     minCustomers: 23,
//     maxCustomers: 65,
//     avgCookies: 6.3,
//     total: 0,
//     hrCookies:[],
   

// console.log(seattle);


// const tokyo = {
//     location: 'Tokyo',
//     minCustomers: 3,
//     maxCustomers: 24,
//     avgCookies: 1.2,
//     total: 0,
//     hrCookies:[],


// const dubai = {
//     location: 'Dubai',
//     minCustomers: 11,
//     maxCustomers: 38,
//     avgCookies: 3.7,
//     total: 0,
//     hrCookies:[],
 


// const paris = {
//     location: 'Paris',
//     minCustomers: 20,
//     maxCustomers: 38,
//     avgCookies: 2.3,
//     total: 0,
//     hrCookies:[],

   


// const lima = {
//     location: 'Lima',
//     minCustomers: 2,
//     maxCustomers: 16,
//     avgCookies: 4.6,
//     total: 0,
//     hrCookies:[],


// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();