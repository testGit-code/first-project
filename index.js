//primitive - string, number
//reference - objects, arrays
//return keyword
//closures

var surname = "bojja";
function hello(){
    var name = "teja";
    console.log(age);
    return function inner(){
     var age = 27;
      return "fullname" + surname + name + 28;
    }
}

var getName = hello();
console.log(getName());




