let money, time;

function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", 0);
    }
}
start();

let appData = {
    budget: money,
    budgetPerDay: 0,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let question1 = prompt("Введите обязательную статью расходов в этом месяце");
        let question2 = prompt("Во сколько обойдется?");

        if (question1 != null && typeof (question1) === 'string' && question1.length < 50 &&
            question2 != null && typeof (question2) === 'number') {
            appData.expenses[question1] = question2;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.budgetPerDay = Number(appData.budget / 30).toFixed(2);

    alert("Ваш бюджет на месяц: " + appData.budgetPerDay);
}
function detectLevel(){
    if (appData.budgetPerDay < 100) {
        console.log('Минималочка');
    } else if (appData.budgetPerDay >= 100 && appData.budgetPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.budgetPerDay > 2000) {
        console.log("Мажорики");
    } else {
        console.log("Произошла ошибка");
    }
}
detectDayBudget();
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?");
        let percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses(){
    for (let i = 0; i < 3; i++) {
        let question1 = prompt("Введите необязательную статью расходов в этом месяце");
        appData.optionalExpenses[i+1] = question1;
    }
}

//let i=0;
// while(i<2){
//     let question1=prompt("Введите обязательную статью расходов в этом месяце");
//     let question2=prompt("Во сколько обойдется?");

//     if(question1!=null && typeof(question1)==='string' && question1.length<50 
//         && question2!=null && typeof(question2)==='number')
//     {
//         appData.expenses[question1]=question2;
//     }
//      i++;
// }

// let i=0;
// do{
//     let question1=prompt("Введите обязательную статью расходов в этом месяце");
//     let question2=prompt("Во сколько обойдется?");

//     if(question1!=null && typeof(question1)==='string' && question1.length<50 
//         && question2!=null && typeof(question2)==='number')
//     {
//         appData.expenses[question1]=question2;
//     }
//     i++;
// }while(i<2);