// // var header = document.querySelector('header');
// // var section = document.querySelector('section');

// // var requestURL = 'https://valeriia4.github.io/json/info.json';
// // var request = new XMLHttpRequest();
// // request.open('GET', requestURL);
// // request.responseType = 'json';
// // request.send();
// // request.onload = function() {
// //   var nameTitle = request.response;
// //   populateHeader(nameTitle);
// // }


// // function populateHeader(jsonObj) {
// //   var myH1 = document.createElement('h1');
// //   myH1.textContent = jsonObj['name'];
// //   header.appendChild(myH1);

// //   var myPara = document.createElement('p');
// //   myPara.textContent = jsonObj['snippet'];
// //   header.appendChild(myPara)


// var listOfItems; // создали переменную в которую запишем результат аякса

// // 1. Создаём новый объект XMLHttpRequest
// var xhr = new XMLHttpRequest();

// // 2. Конфигурируем (настраиваем) его: GET-запрос на URL 'phones.json'
// // xhr.open(метод отправки (гет, пост, пут или еще что то), ссылка на файл, асинхронно или нет (тру или фолс), [логин и пароль для HTTP-авторизации]);

// xhr.open('GET', 'https://valeriia4.github.io/json/info.json', true);

// // 3. Отсылаем запрос
// xhr.send(); // в body можем что то передавать

// xhr.onreadystatechange = function () {
//     if (xhr.readyState != 4) return;

//     // 4. Если код ответа сервера не 200, то это ошибка
//     if (xhr.status != 200) {
//         // обработать ошибку
//         console.log(xhr);
//         console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
//     } else {
//         // вывести результат
//         console.log(xhr);
//         console.log(xhr.responseText); // responseText -- текст ответа.

//         // JSON.parse - строку json приведет к тому с чем может работать JS, например к объекту или массиву ...
//         listOfItems = JSON.parse(xhr.responseText);

//         console.log(listOfItems);
//     }
// }


// var btnGetName = document.getElementById('getName');
// if (btnGetName){
//     btnGetName.onclick = function () {
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://valeriia4.github.io/json/info.json", true);
//         xhr.onload = function () {
//             console.log(xhr.responseText);
//             var name = JSON.parse(xhr.responseText);
//             console.log(name);
//             parseName(name);
//             var imageUrl = JSON.parse(xhr.responseText);
//             parseImg(imageUrl);
//         };
//         xhr.send();
//     }
// }

// function parseName(name){
//     var htmlNameList = document.getElementById('name');
//     var nameList = name;

//     console.log(nameList);

//     for (var j = 0; j < nameList.length; j++) {
//         let element = nameList[j];
//         console.log(element);
//         let name = document.createElement('li'),
//         nameTitle = document.createElement('h3');
//         nameTitle.innerText = element.name;

//         name.appendChild(nameTitle);
//         htmlNameList.appendChild(name);
//     }
// }

// function parseImg(imageUrl){
//     var htmlImgList = document.getElementById('image');
//     var imgList = imageUrl;

//     console.log(imgList);

//     var image = '';
//         image += '<img src="' + imageUrl + '"  alt="techne" class="catalog-items__img">';

//         console.log(image)

// }
;(function($) {
    "use strict";
    $(function(){
        $.getJSON('https://valeriia4.github.io/json/info.json', function(data) {
            for(var i=0;i<data.users.length;i++){
                $('#users').append('<tr><td>' + '<img src="' + data.users[i].imageUrl + '"' + '</td><td>' + data.users[i].name + '</td><td>');
            }
        });

    })
})(jQuery);
