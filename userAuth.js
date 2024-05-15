/*create a function that takes two array of objects e.g 
[
  {name: "Ridwan", stack: "Frontend"}, 
  {name: "Rapheal", stack: "Backend"},
  {name: "Kelechi", stack: "Frontend"},
  {name: "Tega", stack: "Backend"},
] 
and 
[
  {name: "Ridwan", assignment1: 18, assignment2: 17, assignment3: 20}, 
  {name: "Rapheal", assignment1: 17, assignment2: 17},
  {name: "Kelechi", assignment1: 19, assignment2: 17, assignment3: 20},
  {name: "Tega", assignment1: 19, assignment2: 17},
] 
and returns a new array that has the name and average Assignment Score.
*/

const db1 = [
  {name: "Ridwan", stack: "Frontend"}, 
  {name: "Rapheal", stack: "Backend"},
  {name: "Kelechi", stack: "Frontend"},
  {name: "Tega", stack: "Backend"},
]

const db2 = [
  {name: "Ridwan", assignment1: 18, assignment2: 17, assignment3: 20}, 
  {name: "Rapheal", assignment1: 17, assignment2: 17},
  {name: "Kelechi", assignment1: 19, assignment2: 17, assignment3: 20},
  {name: "Tega", assignment1: 19, assignment2: 17},
]

const getAverage = (array1, array2) => {
  const average = array2.map((el, ind) => {
    if (array1[array2.findIndex((e) => e.name === array2[ind].name)].stack ==="Frontend"){
      return {name: el.name, averageAssignment: (el.assignment1 + assignment2 + assignment3) / 3}
    } else{
      return {name: el.name, averageAssignment: (el.assignment1 + assignment2) / 2}
    }
  })


  return average;
} 

console.log(getAverage(db1, db2))