let money=prompt("Ваш бюджет на месяц?",0);
let time=prompt("Введите дату в формате YYYY-MM-DD");

let appData={
    budget: money,
    budgetPerDay: 0,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for(let i=0;i<2;i++){
    let question1=prompt("Введите обязательную статью расходов в этом месяце");
    let question2=prompt("Во сколько обойдется?");

    if(question1!=null && typeof(question1)==='string' && question1.length<50 
        && question2!=null && typeof(question2)==='number')
    {
        appData.expenses[question1]=question2;
    }
}

appData.budgetPerDay = Number(appData.budget/30).toFixed(2);

alert("Ваш бюджет на месяц: "+appData.budgetPerDay);

if (appData.budgetPerDay<100){
    console.log('Минималочка');
}else if(appData.budgetPerDay>=100 && appData.budgetPerDay<2000){
    console.log("Средний уровень достатка");
}else if(appData.budgetPerDay>2000){ 
    console.log("Мажорики");
}else{
    console.log("Произошла ошибка");
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