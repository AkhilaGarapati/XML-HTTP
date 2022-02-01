// var request = new XMLHttpRequest();
// request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
// request.send();
//  request.onload = function(){
//      var data= JSON.parse(request.response);
//      console.log(data);
//      for(var i=0; i<data.length;i++)
//      {
//         console.log(data[i].name,(data[i].population));
//         // console.log(data[i].population);
//      }
    
//  };
// var b= 2^2;
// console.log(b);
let a1=[1,2,3,4];
let a2=[6,7,8,9];
let a3=[...a1, ...a2];
console.log(a3);