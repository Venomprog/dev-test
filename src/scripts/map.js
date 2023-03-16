var myMap;



// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    const coordItems = document.querySelectorAll('.coord-item');

    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center:[55.76, 37.64], // Москва
        zoom:10
    });

    BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="mark-wrapper">'+
        '<div class="mark-title">RIALTO</div>'+
        '<div class="mark-street">$[properties.title]</div>'+
        '<div class="mark-phone">'+
            '<div class="mark-phone__link"><a href="tel:375296170973">+375 29 617-09-73</a></div>'+
            '<div class="mark-phone__link"><a href="tel:375296170973">+375 29 617-09-73</a></div>'+
        '</div>'+
    '</div>', {

        // Переопределяем функцию build, чтобы при создании макета начинать
        // слушать событие click на кнопке-счетчике.
        build: function () {
            // Сначала вызываем метод build родительского класса.
            BalloonContentLayout.superclass.build.call(this);
            // А затем выполняем дополнительные действия.
            
        },

        

        
    });



    let placemarks = new ymaps.GeoObjectCollection()

    coordItems.forEach((item) => {
        const items = item.querySelectorAll('.coord-item__content')
        const coords = Array.from(items).map(item => +item.textContent)
        const title = item.querySelector('.coord-item__title')
        
        const placemark = new ymaps.Placemark(coords, {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            title: title.textContent,
        },
        {
            balloonContentLayout: BalloonContentLayout,
            // Опции.
            // Своё изображение иконки метки.
            iconLayout: 'default#image',
            iconImageHref: 'assets/images/mark.png',
            // Размеры метки.
            iconImageSize: [38, 38],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-19, -19],
            hideIconOnBalloonOpen: false
        });

        placemarks.add(placemark)
    })

    myMap.geoObjects.add(placemarks)

    document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        myMap.destroy();
    };

}

let coordArr = [];

