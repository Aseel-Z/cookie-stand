'use strict'
function getRandomCustomers(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min  
}
let hours = ['Locations','6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','Location Total'];
const branches = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima','Total/Hour']
function Store(location,minCustomers,maxCustomers,total) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.total = total;
  this.hrCookies = [];
}

Store.prototype.cookiePerHourCal = function(){
  for (let i = 0; i < hours.length; i++) {
     let cookiePerHour = Math.floor(getRandomCustomers(this.minCustomers,this.maxCustomers)*this.avgCookies);
     this.hrCookies.push(cookiePerHour);
     this.total +=  cookiePerHour;
    //  console.table(this)
  }

Store.prototype.render = function(){

  this.cookiePerHourCal();

  const container = document.getElementById('sales');
  console.log(container);
  
  const articleEl = document.createElement('article');
  container.appendChild(articleEl);

  const tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);
 
  const trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  
  for (let i = 0; i < hours.length; i++) {
    let thEl = document.createElement('th'); 
    trEl.appendChild(thEl);
    thEl.textContent = hours[i];
  };
 
  for (let i = 0; i < branches.length; i++) {
    let trEl2 = document.createElement('tr');
    tableEl.appendChild(trEl2);

    let tdEl3 = document.createElement('td');
    trEl2.appendChild(tdEl3);
    tdEl3.textContent = branches[i];

    for (let j = 0; j < hours.length; j++) {
      let tdEl4 = document.createElement('td');
      trEl2.appendChild(tdEl4);
      tdEl4.textContent = this.hrCookies[i];
    }
    
  }
 }}

new Store('Seattle',23,65,6.3);
//  console.log (Store.cookiePerHourCal());
//  console.log(Store.render());
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