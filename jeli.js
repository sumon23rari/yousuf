const employees = [
    { name: 'John', age: 29 },
    { name: 'Wayne', age: 36 },
    { name: 'David', age: 44 },
    { name: 'Bruce', age: 21 },
  ];
  
  employees.sort((a, b) => b.age - a.age);
  
  console.log(employees);