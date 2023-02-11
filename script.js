/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log

  arr.map((arr) => {
    if (arr.marks > 50) {
      console.log("Name:"+ arr.name +  " " +"Marks:"+ arr.marks);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((arr) =>{
    if(arr.marks > 50){
        console.log("Name:"+ arr.name + " " +"Marks:"+ arr.marks);
    }
  });
}

function addData() {
  //Write your code here, just console.log

  arr.push({id:4,name:"susan",age:"20",marks:45})
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter((arr) => arr.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  let newarr = [
    {id: 4, name: "Rahul", age: "25", marks: 55},
    {id: 5, name: "Alan", age: "22", marks: 86},
    {id: 6, name: "Leo", age: "23", marks: 44}
];

let addarr = arr.concat(newarr)
console.log(addarr)

}
