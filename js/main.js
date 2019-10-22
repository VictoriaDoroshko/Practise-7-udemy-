// 2) Задание по проекту

// ·        Получить кнопку "Начать расчет" через id

// ·        Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)

// ·        Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

// ·        Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 

// ·        Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

// ·        Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

// 3) Проверить, чтобы все работало и не было ошибок в консоли

// 4) Добавить папку с уроком на свой GitHub


let start = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value'),
    daybudget = document.getElementsByClassName('daybudget-value'),
    level = document.getElementsByClassName('level-value'),
    expenses = document.getElementsByClassName('expenses-value'),
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthsavings = document.getElementsByClassName('monthsavings-value'),
    yearsavings = document.getElementsByClassName('yearsavings-value'),
    expensesItem = document.getElementsByClassName('expenses-item');
    expensesItemBtn = document.getElementsByTagName('button .expenses-item-btn'),
    optionalExpensesBtn = document.getElementsByTagName('button .optionalexpenses-btn'),
    countBudgetBtn = document.getElementsByTagName('button .count-budget-btn'),
    optionalexpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');