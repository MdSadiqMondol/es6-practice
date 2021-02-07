const age = [21,4,5,6,76]
const age2 = [43,544,5,43]
const allAge = age.concat(age);


console.log([...age,...age2])

const maximum = Math.max(500,400,300,600);
console.log(maximum)

const maxi = Math.max(...[500,400,300,600],...[900,656,1000]);
console.log(maxi)