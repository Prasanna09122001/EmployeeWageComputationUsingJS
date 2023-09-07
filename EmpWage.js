const IS_AbBSENT=0;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HR=4;
const Full_TIME_HR=8;
const WAGE_PER_HR=20;

let empcheck = Math.floor(Math.random()*10)%2;
if(empcheck==IS_AbBSENT)
{
    console.log("Employee is absent");
}
else
{
console.log("Employee is Present");
}
//UC2
let emphrs=0;
empcheck=Math.floor(Math.random()*10)%3;
switch(empcheck)
{
    case IS_PART_TIME: emphrs=PART_TIME_HR;
    break;
    case IS_FULL_TIME: emphrs=Full_TIME_HR;
    break;
    case IS_AbBSENT: emphrs=IS_AbBSENT
}
let empwage= emphrs*WAGE_PER_HR;
console.log(empwage);

//UC3
function getworkinghrs()
{
    switch(empcheck)
    {
    case IS_PART_TIME: 
        return PART_TIME_HR;
        break;
    case IS_FULL_TIME: return Full_TIME_HR;
    break;
    case IS_AbBSENT: return IS_AbBSENT 
    }
}
let totalemphrs=0;
empcheck=Math.floor(Math.random()*10)%3;
totalemphrs=getworkinghrs(empcheck);
let totalempwage=emphrs*WAGE_PER_HR;
console.log(totalempwage);