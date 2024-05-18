//Object to JsonString
// var studentDetails = {
//   firstName: "Abhishek",
//   lastName: "Bhuyan",
//   age: 20,
//   address: {
//     city: "Bhubaneswar",
//     state: "Odisha",
//     country: "India",
//   },
// };
//using  JSON.stringify only
// const stringValue = JSON.stringify(studentDetails);
// console.log(stringValue);

//using second Argument which is replacer
//Problem statement i have a key in Object as FirstName in the first Add prefix IN before the value of the FirstNamekey
//input
// {
//     firstName:"Abhishek"
// }
// //output will be
// {
//     firstName:"IN Abhishek"
// }

// function replacerFunction(key, value) {
//   if (key === "firstName") {
//     return "IN" + value;
//   }
//   return undefined;
// }

// const stringValue = JSON.stringify(studentDetails, replacerFunction);
// console.log(stringValue);

// function replacerFunction(key, value) {
//   console.log("key", key=="s" ? "__" : "", "value", value);
//   return value;
// }

// let strinValue = JSON.stringify(studentDetails, replacerFunction, 20);
// console.log(strinValue);

// const greekycommunityMembers = [
//   {
//     name: "Abhishek",
//     id: 121,
//     numberOfSessionAttended: 3,
//     isActiveMember: true,
//   },
//   { name: "Priya", id: 122, numberOfSessionAttended: 0, isActiveMember: false },
//   { name: "Rahul", id: 123, numberOfSessionAttended: 5, isActiveMember: true },
//   { name: "Sneha", id: 124, numberOfSessionAttended: 2, isActiveMember: true },
//   { name: "Ankit", id: 125, numberOfSessionAttended: 1, isActiveMember: false },
// ];
// // console.log(...greekycommunityMembers);

// function replacerFunction(key, value) {
//   if (Array.isArray(value)) {
//     // CSSFontFeatureValuesRule.
//     value.forEach((element, index) => {
//       //console.log(element, index);
//       if(typeof element==='object'){
//         for(let pro in element){
//             console.log(pro,element[pro]);
//         }
//       }
//     });
//   }
//   return value;
// }

// let strinValue = JSON.stringify(greekycommunityMembers, replacerFunction, 20);
// console.log(strinValue);

//1.create a function to Convert a JavaScript Value to JSON String

// let bankDetails = {
//   id: "csyui",
//   lenderProfileId: "ide=212",
//   bankName: "cync-blr",
//   bankId: "1234567890",
//   branchName: "cync-blr",
//   branchId: "1234567890",
//   accountNumber: "1234567890",
//   ifscCode: "1234567890",
// };

// let bankDetailsDuplicate = {
//   id: "csyui",
//   lenderProfileId: "ide=212",
//   bankName: "cync-blr",
//   bankId: "1234567890",
//   branchName: "cync-blr",
//   branchId: "1234567890",
//   accountNumber: "1234567890",
//   ifscCode: "1234567890",
// };

// console.log(bankDetails);
// function covertToJson(value) {
//   return JSON.stringify(value, null, 4);
// }

// let value = covertToJson(bankDetails);
// let valueClone = covertToJson(bankDetailsDuplicate);
// console.log(value);
// console.log(value == valueClone);

//2.create a function to Modify Object Values and Convert to JSON String:

// let users = [
//   {
//     name: "Abhi",
//     isActive: true,
//     numberOfSessionsAttended: 3,
//     id: 121,
//   },
//   {
//     name: "John",
//     isActive: false,
//     numberOfSessionsAttended: 5,
//     id: 122,
//   },
//   {
//     name: "Jane",
//     isActive: true,
//     numberOfSessionsAttended: 2,
//     id: 123,
//   },
// ];

// let users = {
//   user1: {
//     name: "Abhi",
//     isActive: true,
//     numberOfSessionsAttended: 3,
//     id: 121,
//   },
//   user2: {
//     name: "John",
//     isActive: false,
//     numberOfSessionsAttended: 5,
//     id: 122,
//   },
//   user3: {
//     name: "Jane",
//     isActive: true,
//     numberOfSessionsAttended: 2,
//     id: 123,
//   },
// };

// function replacerFunction(key, value) {
//   if (Array.isArray(value)) {
//     value.forEach((ele, index) => {
//         ele.name="IN" + ele.name;
//       //    return (ele["name"]);
//     });
//     // return value
//   }
//   return value;
// }

function replacerFunction(key, value) {
  if (typeof value === "object" && value !== null) {
    let modifiedObject = {};
    for (let prop in value) {
      if (
        typeof value[prop] === "object" &&
        value[prop] !== null &&
        value[prop].hasOwnProperty("name")
      ) {
        modifiedObject[prop] = {
          ...value[prop], // Copy existing properties
          name: "In " + value[prop].name, // Modify the 'name' property
        };
      } else {
        modifiedObject[prop] = value[prop];
      }
    }
    return modifiedObject;
  }
  return value;
}

const strigigyValue = JSON.stringify(users, replacerFunction, 4);
console.log(strigigyValue);
