'use strict'
const Seattle = {
    name: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    hrCookies:[],
    randCustomers: function(){
     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers
    },
    render: function(){
     const container = document.getElementById('sales');
     console.log(container);
     const section1 = document.createElement('section');
     container.appendChild(section1)
     const h1E1 = document.createElement('h1');
     section1.appendChild(h1E1);
     const ulE2 = document.createElement('ul');
     section1.appendChild(ulE2);
     const hours = ['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'];
     let total = 0
     for (let i = 0; i < array.hours; i++) {
         cookSale = this.randCustomers*this.avgCookies;
         cookSale = hrCookies[i]
         let out = hours[i]+": "+hrCookies[i]+" cookies";
         this.hrCookies.push(out);
         total = total + cookSale;
         const Eli = document.createElement('li');
         ulE2.appendChild(Eli);
         Eli.textContent = out
    } 
    const E4li = document.createElement
    section1.appendChild(E4li)
    E4li.textContent = "Total:"+total+" cookies"
    
     }
     
    },
    console.log(Seattle);
    Seattle.render();


    const Tokyo = {
        name: 'Tokyo',
        minCustomers: 23,
        maxCustomers: 65,
        avgCookies: 6.3,
        hrCookies:[],
        randCustomers: function(){
         return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers
        },
        render: function(){
         const container = document.getElementById('sales');
         console.log(container);
         const section1 = document.createElement('section');
         container.appendChild(section1)
         const h1E1 = document.createElement('h1');
         section1.appendChild(h1E1);
         const ulE2 = document.createElement('ul');
         section1.appendChild(ulE2);
         const hours = ['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'];
         let total = 0
         for (let i = 0; i < array.hours; i++) {
             cookSale = this.randCustomers*this.avgCookies;
             cookSale = hrCookies[i]
             let out = hours[i]+": "+hrCookies[i]+" cookies";
             this.hrCookies.push(out);
             total = total + cookSale;
             const Eli = document.createElement('li');
             ulE2.appendChild(Eli);
             Eli.textContent = out
        } 
        const E4li = document.createElement
        section1.appendChild(E4li)
        E4li.textContent = "Total:"+total+" cookies"
        
         }
         
        },
        console.log(Tokyo);
        Tokyo.render(); 
   

    
     