
document.addEventListener('DOMContentLoaded', () => {
    var myMap;
    const myYaMap = document.getElementById('map');

    if (myYaMap){
        // Дождёмся загрузки API и готовности DOM.
    ymaps.ready(init);

    function init () {
        const coordItems = document.querySelectorAll('.marks-list__item');
    
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center:[55.76, 37.64], // Москва
            zoom:10
        });
    
    
        const clusterer = new ymaps.Clusterer({
                clusterIconLayout: ymaps.templateLayoutFactory.createClass('<div class="cluster">{{ properties.geoObjects.length }}</div>'),
                clusterIconShape: {
                type: 'Rectangle',
                coordinates: [[0, 0], [50, 50]]
            },
        })
    
        BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '$[properties.balloon]'
            , {
    
            // Переопределяем функцию build, чтобы при создании макета начинать
            // слушать событие click на кнопке-счетчике.
            build: function () {
                // Сначала вызываем метод build родительского класса.
                BalloonContentLayout.superclass.build.call(this);
                // А затем выполняем дополнительные действия.
                
            },
    
            
    
            
        });
    
    
    
        // let placemarks = new ymaps.GeoObjectCollection()
    
        coordItems.forEach((item) => {
            const coords = item.dataset.cord;
            // const coords = Array.from(items).map(item => +item.textContent)
            // const title = item.querySelector('.coord-item__title')
            const balloon = item.innerHTML
            // '23 32'.split(' ').map(item => Number(item))
            const corda = coords.split(' ').map(item => +item);
            // console.log(corda)
            const placemark = new ymaps.Placemark(corda, 
            {
                balloon
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
    
            clusterer.add(placemark)
        })
    
        myMap.geoObjects.add(clusterer)
    
        document.getElementById('destroyButton').onclick = function () {
            // Для уничтожения используется метод destroy.
            myMap.destroy();
        };
    
    }
    
    let coordArr = [];
    }
    


})

// при клике на плейсмарку на карте

//Найти оффсет  и сделать скроллтоп + оффсет карточки до которойскролить
//добавить класс актив для карточки и подсветить ее

// закрывать плейсмарку при клике вне ее

