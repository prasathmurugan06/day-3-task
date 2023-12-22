// question 1:

let obj1={name:"person 1",age:5};
let obj2={age:5,name:"person 1"};
var result=JSON.stringify(obj1);
var result1=JSON.stringify(obj2);
if(result===result1){
   console.log("json is equal");
}else{
   console.log("json is not equal");
}

// question 2: country flags

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
   var data= request.response;
   var result=JSON.parse(data);
   console.log(result);
   for (var i=0; i< result.length;i++){
      console.log(result[i].flags.png);
   }
}

// question 3: countries names,regions,sub-region and populations

var country = new XMLHttpRequest();
country.open("GET","https://restcountries.com/v3.1/all",true)
country.send();
country.onload=function(){
   var data1= country.response;
   var result1=JSON.parse(data1);
   console.log(result1);
   for (var i=0; i< result1.length;i++){
      console.log(result1[i].name.common,result1[i].region,result1[i].subregion);
   }
}


