var hours = ['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'];
const Seattle = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    hrCookies:[],
    randCustomers: function(){
     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers
    },
    ranCookiesHour: function(){
    let total = 0
     for (let i = 0; i < array.hours; i++) {
         hrCookies[i] = this.randCustomers*this.avgCookies;
         let out = hours[i]+": "+hrCookies[i]+" cookies";
         this.hrCookies.push(out);
         console.log(out);
         total = total + cookiesHour
     }
     console.log("Total:"+total+" cookies") 
    },
    
   
//    render: function() {
//       constant h1E1 = document.createElement('h1');
//       main.appendChild(h1E1);
     
//       constant ulE2 = document.createElement('ul');
//       main.appendChild(ulE2);
     
//       for (let i = 0; i < hours.length; i++) {
//           constant ilE3 = document.createElement('li');
//           ulE2.appendChild(ilE3)
//           ilE3.textContent = 
//           constant ilE3 = array[i]; 
//       }
          
//       }
     
    
      }
   }

}
