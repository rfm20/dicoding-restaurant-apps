// for async await transpile
import 'regenerator-runtime';


// Import file styles
import '../styles/main.css';
import '../styles/responsive.css';


// Fetch data Json
import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData)
    let datas = jsonData['restaurants']
    let dataList = '';
    datas.forEach(function(data) {
        dataList +=`
            <div class="list__item">
                <img class="list__item__picture" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
                <div class="list__item__rating">★ ${data['rating']}</div>
                <div class="list__item__content">
                    <p class="list__item__city">Kota : ${data['city']}</p>
                    <h1 class="list__item__title"><a href="#">${data['name']}</a></h1>
                    <div class="list__item__description">${data['description'].slice(0, 150)}...</div>
                </div>
            </div>
        `;
    });
    document.querySelector('#json-data').innerHTML = dataList;  
});


// Navigation Bar Menu
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});