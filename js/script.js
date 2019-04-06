let money=prompt("Ваш бюджет на месяц?",0);
let time=prompt("Введите дату в формате YYYY-MM-DD");

let appData={};
appData.budget=money;
appData.timeData=time;

let expenses={};
for(let i=0;i<2;i++){
    let question1=prompt("Введите обязательную статью расходов в этом месяце");
    let question2=prompt("Во сколько обойдется?");
    expenses[question1]=question2;
}
appData.expense=expenses;

appData.optionalExpenses={};

appData.income = [];

appData.savings = false;

alert("Ваш бюджет на месяц: "+Number(appData.budget/30).toFixed(2));


