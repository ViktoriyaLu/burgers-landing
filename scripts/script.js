//document.getElementsByClassName("main-title")[0].style.color = 'red';  //Заголовок красного цвета

//обработчик события - нажатие на кнопку
document.getElementById("main-action-button").onclick = function()   {
    document.getElementById("products").scrollIntoView({behavior:"smooth"});
}
//плавный скрол до секции при нажатии на кнопку меню
let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth"});
    }
}
//переход к форме заплнения при нажатии на кнопку Товара "Заказать"
let buttons = document.getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById( "order").scrollIntoView({behavior:"smooth"});
    }
}

//простая валидация формы на запись
let burger = document.getElementById("burger");
let user = document.getElementById("user");
let phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function() {
    let hasError = false;
        [burger, user, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });
        if (!hasError) {
        [burger, user, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! мы скоро свяжемся с Вами!");
    }
}

// смена валюты и пересчет цены
let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;
    
    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 80;
    } else if (currentCurrency === "₽" ) {
        newCurrency = "BYN";
        coefficient = 3;
    }
    else if (currentCurrency === "BYN" ) {
        newCurrency = "€";
        coefficient = 0.8;
    }
    e.target.innerText = newCurrency;
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}

















