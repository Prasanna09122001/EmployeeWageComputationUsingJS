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
function getworkinghrs(empcheck)
{
    switch(empcheck)
    {
    case IS_PART_TIME: 
        return PART_TIME_HR;
    case IS_FULL_TIME: 
        return Full_TIME_HR;
    case IS_AbBSENT:
         return IS_AbBSENT 
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

let TotalEmphrs=0;
let totalWorkingDay = 0;
const DailyWageArray = new Array();
while (TotalEmphrs < MAX_HRS_IN_A_MONTH && totalWorkingDay < NUM_OF_WORKING_DAYS) {
    totalWorkingDay++;
    empCheck1=Math.floor(Math.random()*10)%3;
    let emphr = getworkinghrs(empCheck1);
    TotalEmphrs+=emphr;
    DailyWageArray.push(CalculateDailyWage(emphr));
}
let empWage1 = CalculateDailyWage(TotalEmphrs);
console.log("Total days :" + totalWorkingDay + " Total Hours : " + TotalEmphrs + " Emp Wages " + empWage1);
console.log(DailyWageArray)

//UC 7A
/*var totempwage=0;
const empDailyWageArray = new Array();
function sum(dailywage)
{
    totempwage +=dailywage
}
DailyWageArray.forEach(sum);
console.log("total Days :"+totalWorkingDay+" Total Hours : "+TotalEmphrs+" Emp Wages : "+totempwage);
function totalwages(totalwage,dailywage)
{
    return totalwage+dailywage;
}
console.log(DailyWageArray.reduce(totalwages,0));
//UC 7B
let day=0;
function DayWithWage(wage)
{
    day++;
    console.log("Day no"+day+" Amount="+wage);
}
DailyWageArray.forEach(Element=>
    (
        DayWithWage(Element)
    ));

//UC 7C
day=0;
console.log("Days With Full Wage");
function DayWithFullWage(wage)
{
    day++;
    if(wage=="160")
    {
        console.log("Day No "+day+" Amount "+wage);
    }
}
DailyWageArray.forEach(element => (
    DayWithFullWage(element)
));

//UC 7D
day=0;
var count=0;
function FullTimeWage(wage)
{
    day++;
    if(wage == "160" && count == 0)
    {
        console.log("First Time When You Get Full Salary in Day "+day);
        count++;
    }
}
    DailyWageArray.forEach(element => (
        FullTimeWage(element)
    ));*/

//UC 7A
totalempwage=0;
function Sum(dailywage){
    totalempwage+=dailywage;
}
DailyWageArray.forEach(Sum);
console.log(totalempwage);

//b
let daycount=0;
function mapDayWithWage(dailywage){
    daycount++;
    return daycount+ " " +dailywage;
}
let mapwithDayArray=DailyWageArray.map(mapDayWithWage);
console.log(DailyWageArray);

//C
function fullTimeWage(dailywage){
    return dailywage.includes("160");
}
let fullTimeWageArr = mapwithDayArray.filter(fullTimeWage);
console.log(fullTimeWageArr);

//D
console.log(mapwithDayArray.find(fullTimeWage));

//E
console.log(fullTimeWageArr.every(fullTimeWage));

//F
function partTimeWage(dailywage){
    return dailywage.includes("80");
}
console.log(mapwithDayArray.some(partTimeWage));

//G
function totalDaysWorked(numOfDays, dailywage){
    if(dailywage>0)
    {
        numOfDays++;
    }
    return numOfDays;
}
console.log(DailyWageArray.reduce(totalDaysWorked,0));