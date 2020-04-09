var data = new Date();
console.log(data);

var dataString = new Date('1998-11-11');
console.log(dataString.getMonth()+1); 
console.log(dataString.getFullYear());
console.log(dataString.getDate()+1);

var dataParam = new Date(1998,11,11);
console.log(dataParam.getDate());
console.log(dataParam.getDate());
//como ao recuperar ele pega de um array então sempre vai estr vindo um valor a menos no mes e no dia por isso a necessidade de somar +1