var listOfPhones; // создали переменную в которую запишем результат аякса

// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем (настраиваем) его: GET-запрос на URL 'phones.json'
// xhr.open(метод отправки (гет, пост, пут или еще что то), ссылка на файл, асинхронно или нет (тру или фолс), [логин и пароль для HTTP-авторизации]);

xhr.open('GET', 'info.json', true);

// 3. Отсылаем запрос
xhr.send(); // в body можем что то передавать

xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        console.log(xhr);
        console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        console.log(xhr);
        console.log(xhr.responseText); // responseText -- текст ответа.

        // JSON.parse - строку json приведет к тому с чем может работать JS, например к объекту или массиву ...
        listOfPhones = JSON.parse(xhr.responseText);

        console.log(listOfPhones);
    }
}


var btnGetProducts = document.getElementById('getProducts');
if (btnGetProducts){
    btnGetProducts.onclick = function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products/", true);
    xhr.onload = function () {
        console.log(xhr.responseText);
        var products = JSON.parse(xhr.responseText);
        console.log(products);
        parseProducts(products);
    };
    xhr.send();
}
}

function parseProducts(products){
    var htmlProductList = document.getElementById('products');
    var productsList = products.data;

    console.log(productsList);

    for (var j = 0; j < productsList.length; j++) {
        let element = productsList[j];
        console.log(element);
        let product = document.createElement('li'),
            productTitle = document.createElement('h3');
            productTitle.innerText = element.name;
				
            product.appendChild(productTitle);
            htmlProductList.appendChild(product);
    }
}



// ajax for login, METHOD POST

var loginForm = document.getElementById('ba-login-form');

loginForm.onsubmit = function(e){
    e.preventDefault();

    var xhrLogin = new XMLHttpRequest();

    xhrLogin.open('POST', 'https://reqres.in/api/users', true);

    var loginData = {
        "name": "morpheus",
        "job": "leader"
    }

    var loginRequestData = JSON.stringify(loginData);

    xhrLogin.send(loginRequestData);

    xhrLogin.onreadystatechange = function () {
        if (xhrLogin.readyState != 4) return;
    
        // 4. Если код ответа сервера не 200, то это ошибка
        if (xhrLogin.status != 200) {
            // обработать ошибку
            console.log(xhrLogin);
            console.log(xhrLogin.status + ': ' + xhrLogin.statusText); // пример вывода: 404: Not Found
        } else {
            // вывести результат
            console.log(xhrLogin);
            console.log(xhrLogin.responseText); // responseText -- текст ответа.            
    
            console.log(JSON.parse(xhrLogin.responseText));
        }
    }
}