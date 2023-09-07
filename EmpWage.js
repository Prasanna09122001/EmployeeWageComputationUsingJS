const IS_AbBSENT=0;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HR=4;
const Full_TIME_HR=8;
const WAGE_PER_HR=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_A_MONTH=160;

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
//UC4
let  hrs=0;
for(let i=0;i<NUM_OF_WORKING_DAYS;i++)
{
    empcheck=Math.floor(Math.random()*10)%3;
    hrs+=getworkinghrs(empcheck);
}
totalempwage=hrs*WAGE_PER_HR;
console.log(totalempwage);
//UC5
let totalemphr=0;
let totalWorkingDays=0;
while(totalemphr<MAX_HRS_IN_A_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS) 
{
    totalWorkingDays++;
    let empcheck=Math.floor(Math.random()*10)%3;
    totalemphr+=getworkinghrs(empcheck);
} 
let empwage1 = totalemphr*WAGE_PER_HR;
console.log("Total Days :"+totalWorkingDays+"Total hours: "+totalemphr+"Emp Wage :"+empwage1);

//UC6
function CalculateDailyWage(Hrs)
{
    return Hrs*WAGE_PER_HR;
}

let totalEmpHours = 0;
let TotalEmphrs=0;
let totalWorkingDay = 0;
const DailyWageArray = new Array();
while (totalEmpHours < MAX_HRS_IN_A_MONTH && totalWorkingDay < NUM_OF_WORKING_DAYS) {
    totalWorkingDay++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    TotalEmphrs += getworkinghrs(empCheck);
    DailyWageArray.push(CalculateDailyWage(TotalEmphrs));
}
let empWage1 = CalculateDailyWage(TotalEmphrs);
console.log("Total days :" + totalWorkingDay + " Total Hours : " + TotalEmphrs + " Emp Wages " + empWage1);
console.log(DailyWageArray)