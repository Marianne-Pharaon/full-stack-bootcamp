let FiveNumbers= [1,2,3,4,5];
console.log(FiveNumbers)


let personalInfo={ 
"name":" haya",
"age":"12",
"height":"165",
"location":"zahle",
"nationality":"lebanese",

}
console.log(personalInfo);


let nextThreeNumbers=[8,6,9];


const fiveNumbers = [1, 2, 3, 4, 5];
const nextThreeNumbers = [6, 7, 8];

const allNumbers = [...fiveNumbers, ...nextThreeNumbers];

console.log(allNumbers);



const personalInfo = {
    name: "Alice",
    age: 30,
  };
  
  const additionalInfo = {
    occupation: "Engineer",
    hobby: "Photography",
    education: "Computer Science",
  };
  
  const fullInfo = { ...personalInfo, ...additionalInfo };
  
  console.log(fullInfo);

  


  const fiveNumbers = [1, 2, 3, 4, 5];

const [firstNum, secondNum, thirdNum] = fiveNumbers;

console.log(firstNum);  
console.log(secondNum); 
console.log(thirdNum);  



const personalInfo = {
    name: "Alice",
    location: "New York",
    nationality: "USA",
  };
  
  const { name, location, nationality } = personalInfo;
  
  console.log(name);        
  console.log(location);    
  console.log(nationality); 


  const personalInfo = {
    name: "Alice",
    contactInfo: {
      email: "alice@example.com",
      phone: "123-456-7890",
    },
  };
  
  const { name, contactInfo: { email, phone } } = personalInfo;
  
  console.log(name);  
  console.log(email); 
  console.log(phone); 

  



  const fiveNumbers = [1, 2, 3, 4, 5];

const [firstNum, secondNum, ...restOfNumbers] = fiveNumbers;

console.log(firstNum);       
console.log(secondNum);      
console.log(restOfNumbers);  



const object1 = {
    name: "Alice",
    age: 30,
    occupation: "Engineer",
  };
  
  const object2 = {
    age: 31,
    hobby: "Photography",
  };
  
  const mergedObject = { ...object1, ...object2 };
  
  console.log(mergedObject);
  

  
