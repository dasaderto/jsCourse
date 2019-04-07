let money=prompt("Ваш бюджет на месяц?",0);
let time=prompt("Введите дату в формате YYYY-MM-DD");

let appData={
    budget: money,
    timeData: time,
    expense: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let expenses={};
for(let i=0;i<2;i++){
    let question1=prompt("Введите обязательную статью расходов в этом месяце");
    let question2=prompt("Во сколько обойдется?");

    if(question1!=null && typeof(question1)==='string' && question1.length<50 
        && question2!=null && typeof(question2)==='number')
    {
        expenses[question1]=question2;
    }
}
appData.expense=expenses;

alert("Ваш бюджет на месяц: "+Number(appData.budget/30).toFixed(2));


