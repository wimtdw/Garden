//Кнопка "В избранное" (появляется при наведении на фото в галерее) 
//меняется на "Сохранено", звездочка меняется на закрашенную

var overlays = document.querySelectorAll('.overlay');
overlays.forEach(function (el) {
    var p = el.querySelector('p');
    var i = el.querySelector('.svg-image');
    p.textContent = 'В избранное';
    i.src = 'images/star-svgrepo-com.svg';
    p.style.left="15px";
} );
overlays.forEach(function (overlay) {
    overlay.addEventListener('click', function () {
        var paragraph = overlay.querySelector('p');
        var image = overlay.querySelector('.svg-image');
        if (paragraph.textContent === "В избранное") {
            paragraph.textContent = 'Сохранено';
            image.src = 'images/star-svgrepo-com2.svg';
            paragraph.style.left="30px";
        }
        else {
            paragraph.textContent = 'В избранное';
            image.src = 'images/star-svgrepo-com.svg';
            paragraph.style.left="15px";
        }
    });
});