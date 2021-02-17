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
    //  console.log(hours.length)
    //  console.log(cookiePerHour);
    //  console.log(this.total);
    //  console.log("--")
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



// branch = [L1,L2,L3,L4] it is array of objects 
// so when to get a specific property objectName.property

new Store('Seattle',23,65,6.3);
// new Store('Tokyo',3,24,1.2);
// new Store('Dubai',11,38,3.7);
// new Store('Paris',20,38,2.3);
// new Store('Lima',2,16,4.6);


for (let i = 0; i < branches.length; i++) {
  branches[i].render();
 
}

footerRender();

let form1 = document.getElementById("new-branch");
form1.addEventListener("submit", function(e){
e.preventDefault();
const location = e.target.location1.value;
const minCustomers = e.target.minCustomers1.value;
const maxCustomers = e.target.maxCustomers1.value;
const avgCookies = e.target.avgCookies1.value;
let newBranch = new Store (location,minCustomers,maxCustomers,avgCookies);
// El9.remove();
// delete footer
newBranch.render();
footerRender();
})


// const location2 = new Store('Tokyo',3,24,1.2);
// location2.cookiePerHourCal();
// location2.render();


// const location3 = new Store('Dubai',11,38,3.7);
// location3.cookiePerHourCal();
// location3.render();


// const location4 = new Store('Paris',20,38,2.3);
// location4.cookiePerHourCal();
// location4.render();


// const location5 = new Store('Lima',2,16,4.6);
// location5.cookiePerHourCal();
// location5.render();



// console.log(branches)
// footerRender();

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