const calculateSalary = (workedHours, valueHour) => workedHours * valueHour;

const showSalary = (workedHours, valueHour) => `Salário igual a R$ ${calculateSalary(workedHours, valueHour)}`;

console.log(showSalary(150, 40.5));

