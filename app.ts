#! /usr/bin/env node

import inquirer from "inquirer";

let covertedamount:{[key:string]:number}={
      PKR:278.40,
       UAE: 3.67,
        USD:1
}

let ans= await inquirer.prompt([{
    name:'from',
    type:'list',
    message:'converting from',
    choices:['PKR','UAE','USD']
},
{
    name:'To',
    type:'list',
    message:'converting to',
    choices:['PKR','UAE','USD']
},
{
    type:'number',
   name:'amount',
   message:'your amount to convert'
}
])

console.log(covertedamount[ans.To]/covertedamount[ans.from]*ans.amount);
