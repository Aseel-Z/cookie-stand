'use strict'
function getRandomCustomers(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min  
}
const hours = ['Locations','6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','Location Total'];
let branches = [];

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

function Store(location,minCustomers,maxCustomers,avgCookies) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.total = 0;
  this.hrCookies = [];
  branches.push(this)
}

Store.prototype.cookiePerHourCal = function(){
  for (let m = 0; m < hours.length-2; m++) {
     let cookiePerHour = Math.floor(getRandomCustomers(this.minCustomers,this.maxCustomers)*this.avgCookies);
     this.hrCookies.push(cookiePerHour);
     this.total += cookiePerHour;
  }
  
}
Store.prototype.render = function(){

  this.cookiePerHourCal();
 
  let trEl2 = document.createElement('tr');
  tableEl.appendChild(trEl2);

  let tdEl3 = document.createElement('th');
  trEl2.appendChild(tdEl3);
  tdEl3.textContent = this.location;
  
  for (let j = 0; j < hours.length-2; j++) {
    let tdEl4 = document.createElement('td');
    trEl2.appendChild(tdEl4);
    tdEl4.textContent = this.hrCookies[j];
  }

  let tdEl5 = document.createElement('td');
  trEl2.appendChild(tdEl5);
  tdEl5.textContent = this.total;
 }

function footerRender() {
let El9 = document.createElement('tr');
tableEl.appendChild(El9);

const El11 = document.createElement('th');
El9.appendChild(El11);
El11.textContent = "Total/Hour";
let totalOfTotals = 0;
for (let i = 0; i < hours.length-2; i++) {
  let hourTotal = 0;
 for (let k = 0; k < branches.length; k++) {
   hourTotal += branches[k].hrCookies[i];
   totalOfTotals += hourTotal;
 }

 let El12 = document.createElement('td');
 El9.appendChild(El12);
 El12.textContent = hourTotal;
}
let El13 = document.createElement('td');
El9.appendChild(El13);
El13.textContent = totalOfTotals;
}

new Store('Seattle',23,65,6.3);
new Store('Tokyo',3,24,1.2);
new Store('Dubai',11,38,3.7);
new Store('Paris',20,38,2.3);
new Store('Lima',2,16,4.6);


for (let i = 0; i < branches.length; i++) {
  branches[i].render();
}

footerRender();