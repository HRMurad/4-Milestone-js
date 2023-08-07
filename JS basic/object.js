var MyPhone = {
  name: "Samsung",
  model: "A22",
  price: 1200,
  warrenty: true,
};
// jus declare output
console.log(MyPhone);

// change the value of any properties
MyPhone.price = 20000;
console.log(MyPhone);

// get a specific value name
var myPhoneModel = MyPhone.model;
console.log(myPhoneModel);
// or
console.log(MyPhone.price);

// to get all properties
var gettingProperties = Object.keys(MyPhone);
console.log(gettingProperties);

// to get all values
var gettingValues = Object.values(MyPhone);
console.log(gettingValues);
