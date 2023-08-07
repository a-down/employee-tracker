function createDepartmentsArray(arr){
  // console.log(arr)
  let newArr = []
  arr.forEach((object) => newArr.push(object.Department))
  // console.log(newArr)
  return newArr
}

function createRolesArray(arr){
  let newArr = []
  arr.forEach((object) => newArr.push(object.Role_Title))
  return newArr
}

function createEmployeeArray(arr){
  let newArr = []
  arr.forEach((object) => newArr.push(`${object.First_Name} ${object.Last_Name}`))
  return newArr
}


module.exports = {
  createDepartmentsArray: createDepartmentsArray,
  createRolesArray: createRolesArray,
  createEmployeeArray: createEmployeeArray, 
}